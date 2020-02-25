/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, inject} from 'aurelia-framework';

import {lazyLoadCheck} from '../../../helpers/lazy-load-check';
import {CTableActions, CTableCol} from '../c-table/c-table-interfaces';

import * as styles from './c-table-fixed-header.css.json';

@inject(Element)
export class CTableFixedHeader {
    @bindable
    public actions: CTableActions = {};
    @bindable
    public cols: CTableCol[] = [];
    @bindable
    public colsModified;
    @bindable
    public isLoading = false;
    @bindable
    public scrollToLoad = false;

    public styles = styles;
    public totalWidth = 0;
    public windowWidth;

    constructor(public element: Element) {}

    public attached() {
        this.onScroll();
        this.setWindowWidth();
        $(window).resize(this.setWindowWidth.bind(this));
        _.defer(() => this.calcColWidths());
    }

    public detached() {
        $(window).off('resize', this.setWindowWidth.bind(this));
    }

    public isLoadingChanged() {
        // Do a simple check after it does a lazy load to see if we need to load more
        this.onScroll();
    }

    public colsModifiedChanged() {
        this.calcColWidths();
    }

    public setWindowWidth() {
        this.windowWidth = $(this.element).width();
    }

    public calcColWidths() {
        this.totalWidth = 0;

        if (this.cols.length) {
            const allHaveWidths = _.every(this.cols, col => {
                if (col.colWidth) {
                    if (!col._hidden) {
                        this.totalWidth += col.colWidth;
                    }
                    return true;
                }

                return false;
            });

            if (!allHaveWidths) {
                this.totalWidth = 0;
            }
        }
    }

    public onScroll() {
        if (!this.scrollToLoad) {
            return;
        }

        const elem = $(this.element.ownerDocument).find(`.${this.styles.fixedTableHeader}`);

        if (lazyLoadCheck(elem) && this.actions && this.actions.onScrollBottom) {
            this.actions.onScrollBottom();
        }
    }
}
