/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, computedFrom, inject} from 'aurelia-framework';

import {SharedNav} from './shared-nav-service';

import * as styles from './c-nav-vertical-sliding.css.json';

@inject(SharedNav)
export class CNavVerticalSliding {
    public showTrigger = false;
    public nav;
    public showHidden;
    @bindable
    public navBottom = false;
    public styles = styles;

    constructor(sharedNav) {
        this.nav = sharedNav.nav;
    }

    public attached() {
        if (typeof this.navBottom !== 'boolean') {
            this.navBottom = false;
        }
    }

    public toggleNav() {
        if (this.nav.shownIndex === 0) {
            this.nav.shownIndex += 1;
        } else {
            this.nav.shownIndex -= 1;
        }
    }

    @computedFrom('nav.shownIndex')
    get navState() {
        if (this.nav && this.nav.shownIndex > 0) {
            return 'right';
        }

        return 'left';
    }

    @computedFrom('nav.shownIndex', 'nav.pages[nav.shownIndex].isLoading')
    get isPageLoading() {
        if (this.nav && this.nav.pages[this.nav.shownIndex] && this.nav.pages[this.nav.shownIndex].isLoading) {
            this.showHidden = false;
            return true;
        }

        _.delay(() => {
            this.showHidden = true;
        }, 500);

        return false;
    }

    @computedFrom('nav.shownIndex', 'nav.activeIndex')
    get isTriggerContentHidden() {
        if (
            this.nav &&
            this.nav.pages[this.nav.shownIndex] &&
                (this.nav.pages[this.nav.shownIndex].prevText ||
                    this.nav.pages[this.nav.shownIndex].nextText ||
                    this.nav.pages[this.nav.shownIndex].title ||
                    this.nav.pages[this.nav.shownIndex].searchFn ||
                    this.nav.pages[this.nav.shownIndex].searchQuery ||
                    this.nav.pages[this.nav.shownIndex].searchPlaceholder) &&
            this.nav.activeIndex === 0
        ) {
            _.delay(() => {
                this.showTrigger = false;
            }, 800);
            return true;
        }

        _.delay(() => {
            this.showTrigger = true;
        }, 700);
        return false;
    }
}
