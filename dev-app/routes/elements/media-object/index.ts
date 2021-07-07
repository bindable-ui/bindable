/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class MediaObject {
    public mediaObjectCols = [
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colClass: 't105',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public mediaObjectProperties = [
        {
            default: 'var(--c_slate)',
            description:
                'Set the background color of the element.',
            name: 'background',
            value: 'CSS color',
        },
        {
            default: 'unset',
            description: 'Set if you want a border on the top of the media-object.',
            name: 'border-top',
            value: '<border-style> <border-width> <border-color>',
        },
        {
            default: 'unset',
            description: 'Set if you want a border on the right of the media-object.',
            name: 'border-right',
            value: '<border-style> <border-width> <border-color>',
        },
        {
            default: 'unset',
            description: 'Set if you want a border on the bottom of the media-object.',
            name: 'border-bottom',
            value: '<border-style> <border-width> <border-color>',
        },
        {
            default: 'unset',
            description: 'Set if you want a border on the left of the media-object.',
            name: 'border-left',
            value: '<border-style> <border-width> <border-color>',
        },
        {
            description: 'Set if you want a border on all sides of the media-object.',
            name: 'border',
            value: '<border-style> <border-width> <border-color>',
        },
        {
            default: 'true',
            description:
                'Vertically center the items in the element.',
            name: 'center',
            value: 'boolean',
        },
        {
            default: 'unset',
            description:
                'Indicate what the desired width of the media item will be. ' +
                'This will help position the spinner and prevent skipping when ' +
                'the media item loads in.',
            name: 'media-width',
            value: 'string',
        },
        {
            default: 'unset',
            description:
                'Indicate what the desired height of the media item will be. ' +
                'This will help position the spinner and prevent skipping when ' +
                'the media item loads in.',
            name: 'media-height',
            value: 'string',
        },
        {
            default: 'transparent',
            description:
                'Set the background color of the box the media item will go in.',
            name: 'media-background',
            value: 'CSS color',
        },
        {
            default: 'var(--s-2)',
            description:
                'Set the top/bottom padding of the element.',
            name: 'padding-ends',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s-2)',
            description:
                'Set the left/right padding of the element.',
            name: 'padding-sides',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--c_subOneMain)',
            description:
                'Set the color of an optional pill.',
            name: 'pill-color',
            value: 'CSS color',
        },
        {
            description:
                'Set what the pill text will be.',
            name: 'pill-text',
            value: 'string'
        },
        {
            default: 'var(--s-3)',
            description:
                'Set the spacing of the left gutter of the element.',
            name: 'left-gutter',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s-3)',
            description:
                'Set the spacing of the right gutter of the element.',
            name: 'right-gutter',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s-3)',
            description:
                'Set the spacing of the top gutter of the element.',
            name: 'top-gutter',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s-3)',
            description:
                'Set the spacing of the bottom gutter of the element.',
            name: 'bottom-gutter',
            value: 'Any length value (1rem, 15px). It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'true',
            description:
                'Set to false if you do not want the itmes to stack on small screens.',
            name: 'row-stack-small',
            value: 'boolean',
        },
    ];

}
