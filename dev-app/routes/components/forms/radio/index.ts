/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Radio {
    public radioStateTest = 'first3';

    public radioChecked = null;

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
    ];

    public formRadioProperties = [
        {
            description: '',
            name: 'checked',
            value: 'null',
        },
        {
            description: 'Makes it so clicking the label will mark the radio button.',
            name: 'id',
            value: '',
        },
        {
            default: '',
            description:
            'If placed on each c-radio and has the same value they will be grouped.' +
            ' This can also be set on the c-form-checkbox-radio-container.',
            name: 'name',
            value: '',
        },
        {
            description: 'Set the state of the radio button.',
            name: 'state',
            value: 'disabled | hidden',
        },
    ];
}
