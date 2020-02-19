/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CenterProperties {
    public centerCols = [
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
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public centerProperties = [
        {
            default: 'false',
            description: 'Set to true if you want children smaller than the max-width to be centered.',
            name: 'intrinsic',
            value: 'boolean',
        },
        {
            default: 'none',
            description: 'Set the max width size of the centered item.',
            name: 'max-width',
            value: 'Any length value. (80ch, 5rem, 50%, 200px)',
        },
        {
            default: '0',
            description: 'Set the size of the left and right spacing.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'false',
            description: 'Set to true if you want the text to be aligned in the center.',
            name: 'text-center',
            value: 'boolean',
        },
    ];
}
