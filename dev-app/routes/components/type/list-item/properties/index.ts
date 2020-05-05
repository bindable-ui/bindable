/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ListItemProperties {
    public listItemCols = [
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
            colClass: 't85',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public listItemProperties = [
        {
            description: 'Will set the list item as active.',
            name: 'state',
            value: 'active',
        },
        {
            default: 'false',
            description: 'Will allow the text wrap to a new line.',
            name: 'wrap',
            value: 'boolean',
        },
    ];
}
