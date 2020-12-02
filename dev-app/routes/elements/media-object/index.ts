/*
Copyright 2020, Verizon Media
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
    ];

}