/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-box.css.json';

export class LBox {
    @bindable
    public background = 'unset';
    @bindable
    public borderTop = 'unset';
    @bindable
    public borderRight = 'unset';
    @bindable
    public borderLeft = 'unset';
    @bindable
    public borderBottom = 'unset';
    @bindable
    public border;
    @bindable
    public color = 'unset';
    @bindable
    public fillSpace = false;
    @bindable
    public marginSides = '0px';
    @bindable
    public marginEnds = '0px';
    @bindable
    public paddingSides = 'var(--s1)';
    @bindable
    public paddingEnds = 'var(--s0)';
    @bindable
    public scrolling = false;

    public styles = styles;

    public attached() {
        if (typeof this.scrolling !== 'boolean') {
            this.scrolling = false;
        }

        if (typeof this.fillSpace !== 'boolean') {
            this.fillSpace = false;
        }
    }
}
