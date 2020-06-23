/*
Copyright 2019, Verizon
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class RadioActions {
    public formRadioCols = [
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

    public formRadioActions = [
        {
            description: 'Set a function to fire when the radio changes.',
            name: 'actions',
            value: 'function',
        },
    ];

    public testActions = {
        // eslint-disable-next-line
        onChange: () => alert('Radio Value Changed'),
    };
}
