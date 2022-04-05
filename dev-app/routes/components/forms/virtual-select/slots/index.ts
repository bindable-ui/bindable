/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SelectSlots {
    public formSelectColsSlots = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formSelectOptionsSlots = [
        {
            description: 'Use when you need to put a tip next to the label.',
            name: 'tip',
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
}
