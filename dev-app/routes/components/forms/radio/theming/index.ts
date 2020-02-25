/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class RadioThemeProperties {
    public radioThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public radioThemeProperties = [
        {
            default: 'var(--s0)',
            name: '--radio-size',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--radio-border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--radio-background',
        },
        {
            default: 'var(--c_gray)',
            name: '--radio-hover-background',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--radio-selected-background',
        },
        {
            default: 'calc(var(--s-5) - 1px)',
            name: '--radio-selected-dot-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--radio-disabled-background',
        },
        {
            default: 'var(--c_smoke)',
            name: '--radio-checkbox-label-color',
        },
        {
            default: 'var(--s-1)',
            name: '--radio-checkbox-label-size',
        },
    ];
}
