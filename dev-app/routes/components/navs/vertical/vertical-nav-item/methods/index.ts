/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalItemMethods {
    public verticalItemCols = [
        {
            _class: 'monospaced',
            colClass: 't190',
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
    ];

    public verticalItemMethods = [
        {
            description: 'Set the action to take on click of the nav item.',
            name: 'click-action',
            value: 'function',
        },
        {
            description: 'Set the action to take when something is dropped on the nav item.',
            name: 'dropzone-actions',
            value: 'function',
        },
        {
            description: 'Set the action to take on click of the icon.',
            name: 'icon-action',
            value: 'function',
        },
    ];

    public fireIconFunction() {
        alert('Icon Action Fired.');
    }

    public fireClickFunction() {
        alert('Click Action Fired.');
    }
}
