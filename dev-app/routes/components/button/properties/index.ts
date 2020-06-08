/*
Copyright 2020, Verizon Media
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
            description: 'Place an icon in the button.',
            name: 'icon',
            value: 'See Icon Component for values',
        },
        {
            description: "User 'center' when you have no text in your button.",
            name: 'icon-position',
            value: 'right | left | center',
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
