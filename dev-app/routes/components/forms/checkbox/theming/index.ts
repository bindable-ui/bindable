/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CheckboxThemeProperties {
    public checkboxThemeCols = [
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

    public checkboxThemeProperties = [
        {
            default: 'var(--s0)',
            name: '--checkbox-size',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--checkbox-border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--checkbox-background',
        },
        {
            default: 'var(--c_gray)',
            name: '--checkbox-hover-background',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--radio-selected-background',
        },
        {
            default: 'var(--s-2)',
            name: '--checkbox-selected-check-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--checkbox-disabled-background',
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
