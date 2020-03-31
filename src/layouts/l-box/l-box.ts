/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './l-box.css.json';

@containerless
export class LBox {
    @bindable
    public background = 'var(--c_darkGray)';
    @bindable
    public borderTop;
    @bindable
    public color = 'unset';
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
    }
}
