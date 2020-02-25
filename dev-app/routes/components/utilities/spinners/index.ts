/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Spinners {
    public spinnerCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public spinnerProperties = [
        {
            default: 'medium',
            description: 'Set the size of the spinner',
            name: 'size',
            value: 'small | medium',
        },
    ];
}
