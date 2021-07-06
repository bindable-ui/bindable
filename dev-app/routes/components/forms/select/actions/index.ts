/*
Copyright 2021, Yahoo EdgeCast
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
    ];

    public formSelectActions = [
        {
            description: 'An object with callback functions. More details coming soon.',
            name: 'actions',
            value: 'object',
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
