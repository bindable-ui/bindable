/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {observable} from 'aurelia-framework';

export class SelectProperties {
    public formSelectCols = [
        {
            _class: 'monospaced',
            colClass: 't190',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't85',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formSelectProperties = [
        {
            description: 'Set the text for the error message',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Set the text for the warning message',
            name: 'warning-msg',
            value: '',
        },
        {
            default: 'false',
            description: 'Set if you are loading more options into a multiple select box. multiple must be true.',
            name: 'is-loading-more',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you are loading many options into a multiple select box. multiple must be true.',
            name: 'is-loading',
            value: 'boolean',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            default: 'false',
            description: 'Set if you need a multiselect',
            name: 'multiple',
            value: 'boolean',
        },
        {
            description:
                'This will generate the <option> tags. See example below. If simple is true you can use an Array.',
            name: 'options.bind',
            value: 'array of objects | array',
        },
        {
            description: 'This is where you will store the value of the selected item(s).',
            name: 'selectValue',
            value: 'array',
        },
        {
            description: 'Set the form in a specific state',
            name: 'state',
            value: 'error | warning | disabled | hidden',
        },
    ];

    public testOptions = [];
    public testSimpleOptions = ['Value 1', 'Value 2', 'Value 3'];
    public testSelectValues = [10001, 10005];
    public testSelect2 = '';

    public attached() {
        const ZIPCOUNT = 33000;
        for (let i = 10000; i < ZIPCOUNT + 10000; i += 1) {
            this.testOptions.push(i);
        }
    }
}
