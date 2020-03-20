/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class P {
    public pCols = [
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
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public pProperties = [
        {
            default: 'false',
            description: 'Set if you need your paragraph to be bold.',
            name: 'bold',
            value: 'boolean',
        },
        {
            default: 'var(--c_smoke)',
            description: 'Set the color on a <p> tag.',
            name: 'color',
            value: 'Any color value. It is advised that you use the Core Color CSS Properties.',
        },
        {
            default: 'unset',
            description: 'Set the max-width on a <p> tag.',
            name: 'max-width',
            value: 'Any length value (65rem, 1000px).',
        },
        {
            default: 'medium',
            description: 'Sets the size of the text in the paragraph.',
            name: 'size',
            value: 'small | medium | large',
        },
        {
            default: 'false',
            description: 'Set if you would like the text in the paragraph to truncate.',
            name: 'truncate',
            value: 'boolean',
        },
    ];
}
