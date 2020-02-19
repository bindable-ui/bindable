/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-pill.css.json';

export class CPill {
    @bindable
    public color = 'info';
    @bindable
    public href;
    @bindable
    public icon;
    @bindable
    public iconAction;

    public styles = styles;

    public actionFunction() {
        if (this.iconAction && _.isFunction(this.iconAction)) {
            this.iconAction();
        }
    }
}
