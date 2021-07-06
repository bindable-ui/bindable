/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class IconProperties {
    public iconCols = [
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

    public iconProperties = [
        {
            default: 'unset',
            description: 'Set the alignment of the icon.',
            name: 'align',
            value: 'This should be a positive or negative em value but can be a different unit type. Normally not used unless you want a larger icon next to your text.',
        },
        {
            default: 'unset',
            description: 'Set the color of the icon. If not set the icon will inherit the color from its parent.',
            name: 'color',
            value: 'CSS Color',
        },
        {
            default: 'ltr',
            description: 'Set the direction of the contents.',
            name: 'dir',
            value: 'rtl | ltr (right to left | left to right)',
        },
        {
            description: 'Set the icon to use.',
            name: 'icon',
            value: 'Name of the icon from your svg sprite.',
        },
        {
            default: '0.75em',
            description: 'Set the size of the icon.',
            name: 'size',
            value: 'Any CSS size value. 0.75em highly recommended and will scale for you.',
        },
        {
            default: 'var(--s-5)',
            description: 'Set the spacing between the text and icon.',
            name: 'spacing',
            value: 'Any CSS size value. It is highly recommended a modular scale value be used.',
        },
    ];
}
