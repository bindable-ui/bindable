/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class IconLayoutProperties {
    public iconLayoutCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
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
            colClass: 't215',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public iconLayoutProperties = [
        {
            default: 'unset',
            description: 'Set the background background of the box.',
            name: 'background',
            value: 'Any color value. It is advised that you use the Core Color CSS Properties.',
        },
    ];
}
