/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-nav-vertical-item.css.json';

@containerless
export class CNavVerticalItem {
    @bindable
    public accordionItem = false;
    @bindable
    public accordionState = 'closed';
    @bindable
    public accordionTransitionIn = false;
    @bindable
    public alignBottom = false;
    @bindable
    public clickAction;
    @bindable
    public dropzoneActions;
    @bindable
    public href;
    @bindable
    public prefixIcon;
    @bindable
    public icon;
    @bindable
    public iconAction;
    @bindable
    public sectionTitle;
    @bindable
    public state;
    @bindable
    public subText;
    @bindable
    public title;

    public styles = styles;

    public attached() {
        if (typeof this.accordionItem !== 'boolean') {
            this.accordionItem = false;
        }

        if (typeof this.accordionTransitionIn !== 'boolean') {
            this.accordionTransitionIn = false;
        }

        // Put the correct transition styles on closed nav items
        if (this.accordionState === 'closed') {
            this.accordionTransitionIn = true;
        }
    }

    public toggleAccordion() {
        if (this.accordionState === 'closed') {
            this.accordionState = 'open';
            setTimeout(() => {
                this.accordionTransitionIn = false;
            }, 500);
        } else {
            this.accordionState = 'closed';
            setTimeout(() => {
                this.accordionTransitionIn = true;
            }, 500);
        }
    }

    public clickTrigger() {
        if (this.href && _.isFunction(this.clickAction)) {
            const res = this.clickAction();

            if (res) {
                window.location.href = this.href;
            }
        } else if (this.href) {
            window.location.href = this.href;
        }
    }

    public actionFunction() {
        if (this.iconAction) {
            this.iconAction();
        }
    }
}
