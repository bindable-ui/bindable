/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CoverProperties {
    public coverCols = [
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

    public coverProperties = [
        {
            default: 'false',
            description: 'Set to true if you want the cover vertically centered.',
            name: 'center',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set the cover to be horizontal.',
            name: 'row',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Use only when row is set to true. If this is set to true the row will go back to a column on small screens.',
            name: 'row-stack-small',
            value: 'boolean',
        },
        {
            default: '0',
            description: 'Set if you need padding at the top of l-cover.',
            name: 'padding-top',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '0',
            description: 'Set if you need padding at the right of l-cover.',
            name: 'padding-right',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '0',
            description: 'Set if you need padding at the bottom of l-cover.',
            name: 'padding-bottom',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '0',
            description: 'Set if you need padding at the left of l-cover.',
            name: 'padding-left',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'false',
            description: 'Set if you need overflow scroll set on the cover item.',
            name: 'scrolling',
            value: 'boolean',
        },
        {
            default: '0',
            description: 'Set if you need a gutter between the first and second items in the l-cover.',
            name: 'top-gutter',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '0',
            description: 'Set if you need a gutter between the second and last items in the l-cover.',
            name: 'bottom-gutter',
            value: 'Any length value (1rem, 15px).' +
                ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
    ];
}
