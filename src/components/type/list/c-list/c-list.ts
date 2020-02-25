/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-list.css.json';

export class CList {
    @bindable
    public label;
    @bindable
    public noBullets = false;

    public styles = styles;

    public attached() {
        if (typeof this.noBullets !== 'boolean') {
            this.noBullets = false;
        }
    }
}
