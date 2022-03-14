import {CTableCol} from 'components/tables/c-table/c-table-interfaces';
import * as styles from '../../../forms/checkbox-radio/radio/c-radio-input/c-radio-input.css.json';

export class CTdRadio {
    public col: CTableCol;
    public row;
    public styles = styles;

    public activate(model) {
        this.row = model.row;
        this.col = model.col;
    }

    public onChange() {
        if (this.col.radioChanged) this.col.radioChanged(this.row);
    }

    public get state() {
        return this.row[`${this.col.colHeadName}State`];
    }
}
