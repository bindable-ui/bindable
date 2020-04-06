/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@autoinject()
export class TableActions {
    public tableCols;
    public tableActions;
    public basicCols;
    public basicData;

    public tableActionsSample1 = {
        getRowClass: row => {
            let cls = row._class;
            if (row.name && row.name === 'Fin') {
                cls += ' bgInfo';
            }

            if (row.name && row.name === 'Han Solo') {
                cls += ' notAllowed';
            }

            return cls;
        },

        getColClass: (row, col) => {
            if (col.colHeadName === 'ship') {
                if (row.ship === 'X-Wing') {
                    return 'bgWarning';
                }
            } else if (col.colHeadName === 'name') {
                if (row.name === 'Ray') {
                    return 'bgCritical';
                }
                if (row.name === 'Yoda') {
                    return 'bgProcessing';
                }
            } else if (col.colHeadName === 'gender') {
                if (row.gender === 'Male') {
                    return 'bgHealthy';
                }
            }
            return col._class;
        },
    };

    public tableActionsSample2 = {
        getColClass: (row, col) => {
            let cls = col._class || '';
            /* istanbul ignore else */
            if (col.colHeadName === 'name') {
                cls += ` ${row._status}`;
            }
            return cls;
        },
    };

    constructor() {
        this.tableCols = [
            {
                _class: 'monospaced',
                colClass: 't215',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                _class: 'monospaced',
                colClass: 't270',
                colHeadName: 'value',
                colHeadValue: 'Value',
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
            },
        ];

        this.tableActions = [
            {
                description: 'Bind this to add various css classes to cells and rows.',
                name: 'actions',
                value: 'function',
            },
        ];

        // basic table
        this.basicCols = [
            {
                colClass: 't270',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
            },
            {
                colClass: 't85',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.basicData = [
            {
                _status: 'critical',
                gender: 'Male',
                name: 'Luke Skywalker',
                ship: 'X-Wing',
            },
            {
                _status: 'warning',
                gender: 'Female',
                name: 'Han Solo',
                ship: 'M.Falcon',
            },
            {
                _status: 'healthy',
                gender: 'Male',
                name: 'Fin',
                ship: 'M. Falcon',
            },
            {
                _status: 'critical',
                gender: 'Female',
                name: 'Ray',
                ship: 'M. Falcon',
            },
            {
                _status: 'info',
                gender: 'Male',
                name: 'Yoda',
                ship: '',
            },
            {
                _status: 'neutral-alt',
                gender: 'Male',
                name: 'Palpatine',
                ship: '',
            },
        ];
    }
}
