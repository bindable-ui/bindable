/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CheckboxRadioContainerProperties {
    public formCheckboxRadioContainerCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formCheckboxRadioContainerProperties = [
        {
            description: 'Value of the error.',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Value of the warning.',
            name: 'warning-msg',
            value: '',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            description: 'Set if you need your checks/radio to be side by side.',
            name: 'layout',
            value: 'inline',
        },
        {
            description: 'Used for radio groups. This will set the name for the entire group.',
            name: 'name',
            value: '',
        },
        {
            description: 'Set to show error or hide contents (both hidden and disabled will hide).',
            name: 'state',
            value: 'error | hidden | disabled',
        },
    ];
}
