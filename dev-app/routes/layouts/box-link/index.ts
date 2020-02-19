/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class BoxLinkProperties {
    public boxCols = [
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

    public boxLinkProperties = [
        {
            default: 'var(--c_darkGray)',
            description: 'Set the background color of the box.',
            name: 'background',
            value: 'Any color value. It is advised that you use the Core Color CSS Properties.',
        },
        {
            default: 'var(--c_soot)',
            description: 'Set the hover background color of the box.',
            name: 'background-hover',
            value: 'Any color value. It is advised that you use the Core Color CSS Properties.',
        },
        {
            description: 'Set if you want a border on the top of the box.',
            name: 'border-top',
            value: 'Any color',
        },
        {
            default: 'var(--c_white)',
            description: 'Set the text color of the box.',
            name: 'color',
            value: 'Any color value. It is advised that you use the Core Color CSS Properties.',
        },
        {
            default: '#',
            description: 'Set the URL where the link should go.',
            name: 'href',
            value: 'String',
        },
        {
            default: '0px',
            description: 'Set the left and right margin of the box.',
            name: 'margin-sides',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '0px',
            description: 'Set the top and bottom margin of the box.',
            name: 'margin-ends',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s1)',
            description: 'Set the left and right padding of the box.',
            name: 'padding-sides',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'var(--s0)',
            description: 'Set the top and bottom padding of the box. Leave blank for not padding.',
            name: 'padding-ends',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'false',
            description: 'Set if you will have a layout component that needs to scroll inside the l-box.',
            name: 'scrolling',
            value: 'boolean',
        },
        {
            default: '_self',
            description: 'Set if you need the link to open in a new window.',
            name: 'target',
            value: '_self | _blank',
        },
    ];
}
