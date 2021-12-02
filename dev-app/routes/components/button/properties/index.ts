/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ButtonProperties {
    public buttonCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
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

    public buttonProperties = [
        {
            default: 'primary',
            description: 'Set the color',
            name: 'color',
            value: 'primary | secondary | subOne | neutral | danger',
        },
        {
            description: 'If you need an <a> this will set the URL.',
            name: 'href',
        },
        {
            default: 'unset',
            description: 'Set the alignment of the icon.',
            name: 'icon-align',
            value: 'string',
        },
        {
            default: 'unset',
            description: 'Set the color of the icon.',
            name: 'icon-color',
            value: 'CSS color',
        },
        {
            default: 'ltr',
            description: 'Set the direction of the icon.',
            name: 'icon-dir',
            value: 'ltr | rtl',
        },
        {
            default: 'false',
            description: 'Set to true if the button has no text.',
            name: 'icon-only',
            value: 'boolean',
        },
        {
            description: 'Set an icon in the button.',
            name: 'icon',
            value: 'string',
        },
        {
            default: '0.75em',
            description: 'Set the size of the icon.',
            name: 'icon-size',
            value: 'string',
        },
        {
            default: 'var(--s-5)',
            description: 'Set the spacing of the icon.',
            name: 'icon-spacing',
            value: 'string',
        },
        {
            default: 'medium',
            description: 'Set the size',
            name: 'size',
            value: 'medium | small',
        },
        {
            description: 'Set a state of the button.',
            name: 'state',
            value: 'disabled | thinking | hidden',
        },
        {
            description: 'Set some text below the main button text.',
            name: 'sub-text',
            value: 'string',
        },
        {
            default: 'false',
            description:
                'Only works when title is used. This makes the button and <a> tag.' +
                'This will allow the link to open in a new window.',
            name: 'target-new',
            value: 'boolean',
        },
        {
            description: 'If you need an <a> this will set the text.',
            name: 'title',
        },
        {
            default: 'button',
            description: 'Set the type of the button.',
            name: 'type',
            value: 'button | submit | reset',
        },
    ];
}
