/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-icon.css.json';

@containerless
export class CIcon {
    @bindable
    public action;
    @bindable
    public color = 'lightGray';
    @bindable
    public icon;
    @bindable
    public size = 'small';

    public styles = styles;

    public actionFunction() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }
    }
}
