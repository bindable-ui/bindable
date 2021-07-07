/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class LabelBox {
    public labelBoxCols = [
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

    public labelBoxProperties = [
        {
            default: '',
            description: 'Set the value of the label',
            name: 'label',
            value: 'string',
        },
        {
            default: 'false',
            description: 'Set to true if you want the Edit/Done link to show up.' +
            ' This would allow you set functions to those to do someting.',
            name: 'editable',
            value: 'boolean',
        },
    ];
}
