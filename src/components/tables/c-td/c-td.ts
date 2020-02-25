/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, computedFrom} from 'aurelia-framework';
import * as styles from './c-td.css.json';

export class CTd {
    @bindable
    public col;
    @bindable
    public getColValue;
    @bindable
    public row;

    public styles = styles;

    @computedFrom('col', 'row', 'row[col.colHeadName]')
    get modelData() {
        return {
            col: this.col,
            row: this.row,
            value: this.col.colHeadName ? this.row[this.col.colHeadName] : this.getColValue(this.row, this.col),
        };
    }
}
