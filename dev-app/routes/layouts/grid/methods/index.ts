/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class GridMethods {
    public gridMethodCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
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

    public gridMethods = [
        {
            description: 'An object with callback functions. More details coming soon.',
            name: 'actions',
            value: 'object',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
