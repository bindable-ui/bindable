/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SelectActions {
    public formSelectCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't240',
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

    public formSelectActions = [
        {
            description: 'Set a function to fire when the select contents changes.',
            name: 'actions',
            value: 'function',
        },
    ];

    public testOptions = [
        {
            text: 'Value 1',
            value: 'value1',
        },
        {
            text: 'Value 2',
            value: 'value2',
        },
        {
            text: 'Value 3',
            value: 'value3',
        },
        {
            text: 'Value 4',
            value: 'value4',
        },
        {
            text: 'Value 5',
            value: 'value5',
        },
    ];

    public testSimpleOptions = ['Value 1', 'Value 2', 'Value 3'];
    public testSelectValues = [];

    public testActions = {
        // eslint-disable-next-line
        onChange: () => alert('Select Value Changed'),
    };
}
