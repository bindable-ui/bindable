/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import {generateRandom} from '../../helpers/generate-random';
import {lazyLoadCheck} from '../../helpers/lazy-load-check';
import * as styles from './l-grid.css.json';

@containerless
export class LGrid {
    @bindable
    public actions;
    @bindable
    public minSize = '20rem';
    @bindable
    public gap = 'var(--s3)';
    @bindable
    public autoSizing = 'auto-fit';
    @bindable
    public id = generateRandom();
    @bindable
    public isLoading = false;
    @bindable
    public scrollToLoad = false;

    public styles = styles;
    public parentElem;

    public attached() {
        if (this.autoSizing !== 'auto-fill' && this.autoSizing !== 'auto-fit') {
            this.autoSizing = 'auto-fit';
        }

        if (typeof this.isLoading !== 'boolean') {
            this.isLoading = false;
        }

        if (typeof this.scrollToLoad !== 'boolean') {
            this.scrollToLoad = false;
        }

        this.parentElem = $('div[data-value="cover"]').has(`#${this.id}`);

        if (this.parentElem.length !== 1) {
            this.parentElem = null;
        } else {
            this.parentElem.scroll(this.onScroll.bind(this));
            this.onScroll(); // Check if we need to lazy-load right off the bat
        }
    }

    public detached() {
        if (this.parentElem) {
            this.parentElem.off('scroll', this.onScroll.bind(this));
        }
    }

    public isLoadingChanged() {
        // Do a simple check after it does a lazy load
        // to see if we need to load more
        this.onScroll();
    }

    public onScroll() {
        if (!this.scrollToLoad) {
            return;
        }

        if (lazyLoadCheck(this.parentElem) && this.actions && this.actions.onScrollBottom) {
            this.actions.onScrollBottom();
        }
    }
}
