/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class IconProperties {
    public iconCols = [
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
            colClass: 't190',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public iconProperties = [
        {
            default: 'var(--c_lightGray)',
            description: 'Set the color of the icon.',
            name: 'color',
            value: 'CSS Color',
        },
        {
            default: '',
            description: 'Set which icon you want to use.',
            name: 'icon',
            value: 'Name of your icon',
        },
        {
            default: 'small',
            description: 'Set the size',
            name: 'size',
            value: 'itzy | tiny | small | medium | large | huge',
        },
    ];
}
