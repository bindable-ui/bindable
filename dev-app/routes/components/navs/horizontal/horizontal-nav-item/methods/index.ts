/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class HorizontalItemMethods {
    public horizontalItemCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colClass: 't90',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public horizontalItemMethods = [
        {
            default: '',
            description: 'Use if you need a function to fire onClick.',
            name: 'action',
            value: 'function',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        alert('Clicked');
    }
}
