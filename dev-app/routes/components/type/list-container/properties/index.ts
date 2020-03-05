/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ListContainerProperties {
    public listContainerCols = [
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

    public listContainerProperties = [
        {
            default: 'dark',
            description: 'Set the colors of the list.',
            name: 'color',
            value: 'dark | light',
        },
        {
            default: 'false',
            description: 'Set to put a dividing line between each list item.',
            name: 'dividers',
            value: 'boolean',
        },
        {
            default: 'medium',
            description: 'Set the size of the list.',
            name: 'size',
            value: 'small | medium',
        },
    ];
}
