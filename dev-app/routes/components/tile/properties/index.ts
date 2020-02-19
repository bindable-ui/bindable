/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TileProperties {
    public tileCols = [
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public tileProperties = [
        {
            description: 'Get the value of the checkbox.',
            name: 'check-value',
            value: '',
        },
        {
            default: 'true',
            description: 'Set if you do not need the hover animation on the tile.',
            name: 'hover',
            value: 'boolean',
        },
        {
            default: 70,
            description: 'Set the height in px of the container holding the image.',
            name: 'image-container-height',
            value: 'number',
        },
        {
            description: 'Set the URL of the image in the tile. If set to none a ? icon will display.',
            name: 'image-url',
            value: 'URL | none',
        },
        {
            description: 'Place a small message under the title.',
            name: 'message',
            value: 'string',
        },
        {
            default: 'No Image',
            description: 'Will show when there is now image-url in place of the image.',
            name: 'no-image-message',
            value: 'string',
        },
        {
            default: 'true',
            description: 'Set if you do not need the checkbox in the tile.',
            name: 'show-checkbox',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set to true of you need to show the drag icon.',
            name: 'show-drag',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set to true of you need to have a tip in the tile.',
            name: 'show-tip',
            value: 'boolean',
        },
        {
            default: '',
            description: 'Highlight search matches',
            name: 'search-match',
            value: 'string',
        },
        {
            description: 'Set if you need to disable or hide the tile for certain reasons.',
            name: 'state',
            value: 'disabled | hidden',
        },
        {
            description: 'This adds a colors bar on the tile.',
            name: 'status',
            value: 'processing | healthy | info | warning | error',
        },
        {
            default: 'actions',
            description: 'Set the icon that will trigger a tip.',
            name: 'tip-icon',
            value: 'Any icon name',
        },
        {
            description: 'Set what the title of the tile is.',
            name: 'title',
            value: 'string',
        },
        {
            description: 'If you need an icon in from of the tile title set it with this.',
            name: 'title-icon',
            value: 'Any icon name',
        },
    ];
}
