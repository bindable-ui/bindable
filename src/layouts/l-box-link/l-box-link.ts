/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../decorators/auth-state';
import * as styles from '../l-box/l-box.css.json';

@authState
export class LBoxLink {
    @bindable
    public background = 'unset';
    @bindable
    public backgroundHover = 'var(--c_soot)';
    @bindable
    public borderTop;
    @bindable
    public color = 'unset';
    @bindable
    public colorHover = 'unset';
    @bindable
    public fillSpace = false;
    @bindable
    public href = '#';
    @bindable
    public marginSides = '0px';
    @bindable
    public marginEnds = '0px';
    @bindable
    public paddingSides = 'var(--s1)';
    @bindable
    public paddingEnds = 'var(--s0)';
    @bindable
    public target = '_self';

    public styles = styles;

    public attached() {
        if (this.target !== '_self' && this.target !== '_blank') {
            this.target = '_self';
        }

        if (typeof this.fillSpace !== 'boolean') {
            this.fillSpace = false;
        }
    }
}
