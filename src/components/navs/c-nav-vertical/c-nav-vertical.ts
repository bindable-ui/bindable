/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';

import {lazyLoadCheck} from '../../../helpers/lazy-load-check';
import * as styles from './c-nav-vertical.css.json';

export class CNavVertical {
    @bindable
    public loadMore;
    @bindable
    public navBottom = false;

    public styles = styles;

    public attached() {
        if (typeof this.navBottom !== 'boolean') {
            this.navBottom = false;
        }
    }

    public onScroll(event) {
        if (lazyLoadCheck($(event.target), 100) && this.loadMore) {
            this.loadMore();
        }
    }
}
