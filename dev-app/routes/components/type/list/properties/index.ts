/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ListProperties {
    public listCols = [
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
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public listProperties = [
        {
            description: 'Set the label text. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            default: 'false',
            description: 'Set to true if you would like bullets in your list.',
            name: 'no-bullets',
            value: 'boolean',
        },
    ];
}
