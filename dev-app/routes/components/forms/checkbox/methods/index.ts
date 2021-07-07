/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CheckboxMethods {
    public vCheckbox1BOutput = true;

    public formCheckboxCols = [
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
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formCheckboxMethods = [
        {
            description: 'Function to fire when the box is checked or unchecked.',
            name: 'on-change',
            value: 'function',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
