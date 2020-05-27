/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-icon.css.json';

export class LIcon {
    @bindable
    public align = 'unset';
    @bindable
    public color = 'unset';
    @bindable
    public icon;
    @bindable
    public iconOnly = false;
    @bindable
    public size = '0.75em';
    @bindable
    public spacing = 'var(--s-1)';

    public styles = styles;

    public attached() {
        if (typeof this.iconOnly !== 'boolean') {
            this.iconOnly = false;
        }
    }
}
