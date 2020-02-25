/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@autoinject()
export class TableProperties {
    public tableCols;
    public tableProperties;
    public basicCols;
    public basicData;
    public sortableCols;
    public sortableData;

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
            {
                _class: 'monospaced',
                colClass: 't150',
                colHeadName: 'default',
                colHeadValue: 'Default',
            },
        ];

        this.tableProperties = [
            {
                default: 'false',
                description: 'Bind this to set if you want hover states on the table rows.',
                name: 'hover',
                value: 'boolean',
            },
            {
                default: 'false',
                description: 'Set if you want no vertical borders.',
                name: 'no-vertical-borders',
                value: 'boolean',
            },
            {
                default: 'true',
                description: 'Set if you want to your table to have responsive styles.',
                name: 'responsive',
                value: 'boolean',
            },
            {
                default: 'false',
                description: 'Set if you want the table to be sortable.',
                name: 'sortable',
                value: 'boolean',
            },
            {
                default: '',
                description: 'Name of the column by which initial data was sorted.',
                name: 'default-sort-col',
                value: 'string',
            },
            {
                default: false,
                description: 'If set to true initial sort will be descending.',
                name: 'reverse-sort',
                value: 'boolean',
            },
            {
                default: 'true',
                description: 'Set if you want to have a striped table or not. ',
                name: 'striped',
                value: 'boolean',
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
        ];

        // sortable table
        this.sortableCols = [
            {
                colClass: 't270',
                colHeadName: 'name',
                colHeadValue: 'Name',
                sort: true,
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't85',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.sortableData = [
            {
                gender: 'Male',
                name: 'Luke Skywalker',
                ship: 'X-Wing',
            },
            {
                _status: 'critical',
                gender: 'Male',
                name: 'Fin',
                ship: 'Tie Fighter',
            },
            {
                gender: 'Male',
                name: 'Han Solo',
                ship: 'M. Falcon',
            },
            {
                _status: 'healthy',
                gender: 'Female',
                name: 'Ray',
                ship: 'M. Falcon',
            },
        ];
    }
}
