/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-cover.css.json';

export class LCover {
    @bindable
    public center = false;
    @bindable
    public row = false;
    @bindable
    public rowStackSmall = false;
    @bindable
    public paddingTop = '0';
    @bindable
    public paddingRight = '0';
    @bindable
    public paddingBottom = '0';
    @bindable
    public paddingLeft = '0';
    @bindable
    public scrolling = false;
    @bindable
    public scrollingMobile = false;
    @bindable
    public topGutter = '0';
    @bindable
    public bottomGutter = '0';
    @bindable
    public rightGutter = '0';
    @bindable
    public leftGutter = '0';

    public styles = styles;

    public attached() {
        if (typeof this.center !== 'boolean') {
            this.center = false;
        }

        if (typeof this.row !== 'boolean') {
            this.row = false;
        }

        if (typeof this.scrolling !== 'boolean') {
            this.scrolling = false;
        }

        if (typeof this.scrollingMobile !== 'boolean') {
            this.scrollingMobile = false;
        }
    }
}
