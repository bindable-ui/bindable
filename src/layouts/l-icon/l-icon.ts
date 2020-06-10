/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-icon.css.json';

export class LIcon {
    @bindable
    public action;
    @bindable
    public align = 'unset';
    @bindable
    public color = 'unset';
    @bindable
    public icon;
    @bindable
    public size = '0.75em';
    @bindable
    public spacing = 'var(--s-5)';

    public styles = styles;

    public actionFunction() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }
    }
}
