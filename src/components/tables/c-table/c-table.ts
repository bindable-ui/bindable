/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';
import {generateRandom} from '../../../helpers/generate-random';
import sorting from '../../../helpers/sorting';

import * as vCheckboxInputStyles from '../../forms/checkbox-radio/checkbox/c-checkbox-input/c-checkbox-input.css.json';
import * as styles from './c-table.css.json';

/**
 * Actions: Pass in custom callbacks for c-table. These include:
 *      getRowClass - Assigns class to a tr.
 *      getColClass - Assigns class to a td.
 *
 *      Example:
 *          ```
 *          tableActions = {
 *              getRowClass: row => {
 *                  let cls = row._class;
 *                  if (row.name && row.name === 'Han Solo') {
 *                      cls += ' active';
 *                  }
 *                  return cls;
 *              },
 *
 *              getColClass: (row, col) => {
 *                  if (col.colHeadName === 'ship') {
 *                      if (row.ship === 'Falcon') {
 *                          return ' active';
 *                      }
 *                  }
 *                  return col._class;
 *              },
 *          }
 *          ```
 */

@authState
export class CTable {
    @bindable
    public actions;
    @bindable
    public cols;
    @bindable
    public rowDropzoneActions;
    @bindable
    public hover = false;
    @bindable
    public noVerticalBorders = false;
    @bindable
    public responsive = true;
    @bindable
    public rows;
    @bindable
    public sortable = false;
    @bindable
    public defaultSortCol: string = '';
    @bindable
    public reverseSort: boolean = false;
    @bindable
    public striped = true;

    public styles = styles;
    public vCheckboxInputStyles = vCheckboxInputStyles;

    public attached() {
        if (typeof this.striped !== 'boolean') {
            this.striped = false;
        }

        if (typeof this.hover !== 'boolean') {
            this.hover = false;
        }

        if (typeof this.noVerticalBorders !== 'boolean') {
            this.noVerticalBorders = false;
        }

        if (typeof this.sortable !== 'boolean') {
            this.sortable = false;
        }

        if (typeof this.responsive !== 'boolean') {
            this.responsive = true;
        }
    }

    public bind() {
        if (this.sortable) {
            this.cols.forEach(col => {
                this.setColSortClass(col);
            });
        }
    }

    public generateRandomId() {
        return generateRandom();
    }

    public getRowClass(row) {
        if (this.actions && this.actions.getRowClass) {
            return this.actions.getRowClass(row);
        }
        return row._class;
    }

    public getColClass(row, col) {
        if (this.actions && this.actions.getColClass) {
            return this.actions.getColClass(row, col);
        }
        return col._class;
    }

    // getColValue will only be called if colHeadName property is missing.
    // This will apply to runtime generated fields such as item count.
    public getColValue(row, col) {
        if (this.actions && this.actions.getColValue) {
            return this.actions.getColValue(row, col);
        }
        return '';
    }

    public columnClick(col) {
        if (col.sort) {
            this.sortColumn(col);
        }
        return true;
    }

    public rowClick(row, col) {
        let shouldRun = false;

        const rowClickWhitelist = ['c-td-truncate', 'c-td-pill', 'c-td-image'];

        // Don't run the rowClick function if it's not the default viewModel or in the whitelist
        if (this.actions && this.actions.rowClick) {
            if (!col.view) {
                // Default viewModel
                shouldRun = true;
            } else {
                // Custom viewModel
                shouldRun = _.some(rowClickWhitelist, vm => _.includes(col.view, vm));
            }
        }

        if (shouldRun) {
            this.actions.rowClick(row);
        }

        return true;
    }

    public getClasses(str = '') {
        const keys = str.split(' ');
        const classes = keys.map(key => this.styles[key]);

        return classes.join(' ');
    }

    private setColSortClass(col) {
        if (!col.sort) {
            return;
        }

        let sortClass = this.styles.sortNone;
        const isReverse = /^-/.test(this.defaultSortCol);
        const defaultSortCol = this.defaultSortCol.replace(/^-/, '');

        if (col.colHeadName === defaultSortCol) {
            const {reverseSort = false} = col;

            if (isReverse) {
                sortClass = this.styles.sortDesc;
            } else if (reverseSort) {
                sortClass = col.reverseSort ? this.styles.sortDesc : this.styles.sortAsc;
            } else {
                sortClass = this.reverseSort ? this.styles.sortDesc : this.styles.sortAsc;
            }
        }

        col.sortClass = sortClass;
    }

    private sortColumn(col) {
        // clear all other col classes
        this.cols.forEach(c => {
            if (c.sort && col !== c) {
                c.sortClass = this.styles.sortNone;
            }
        });

        let reverse: boolean;
        // Use reverseSort property of column or reverse-sort binding of table (in that order)
        // to determine initial sort. After initial sort, just toggle.
        if (col.sortClass === this.styles.sortNone) {
            if (typeof col.reverseSort === 'boolean') {
                col.sortClass = col.reverseSort ? this.styles.sortDesc : this.styles.sortAsc;
                reverse = col.reverseSort;
            } else {
                col.sortClass = this.reverseSort ? this.styles.sortDesc : this.styles.sortAsc;
                reverse = this.reverseSort;
            }
        } else if (col.sortClass === this.styles.sortAsc) {
            col.sortClass = this.styles.sortDesc;
            reverse = true;
        } else {
            col.sortClass = this.styles.sortAsc;
            reverse = false;
        }
        if (this.actions && this.actions.sortColumn) {
            // server-side sort
            this.actions.sortColumn(col, reverse);
        } else {
            // client-side sort
            this.rows.sort(sorting(col.colHeadName, reverse));
        }
    }
}
