/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TextAreaProperties {
    public formTextCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formTextProperties = [
        {
            description: '',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Set if you need an id on the textarea.',
            name: 'id',
            value: 'string',
        },
        {
            description: 'Set the label text. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            description: '',
            name: 'placeholder',
            value: '',
        },
        {
            description: 'Set a state for the text input.',
            name: 'state',
            value: 'error | disabled | hidden',
        },
        {
            description: 'Value of the textarea.',
            name: 'textarea-value',
            value: 'string',
        },
    ];

    public formTextareaColsSlots = [
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

    public formTextareaOptionsSlots = [
        {
            description: 'Use when you need to put a tip next to the label.',
            name: 'tip',
        },
    ];
}
