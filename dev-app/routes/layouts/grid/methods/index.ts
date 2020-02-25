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
        {
            _class: 'monospaced',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public gridMethods = [
        {
            description: 'The function you want to run when the button is clicked.',
            name: 'action',
            value: 'function',
        },
        {
            default: '_self',
            description: 'Set if you want the box link to open in a new window.',
            name: 'target',
            value: '_self | _blank',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
