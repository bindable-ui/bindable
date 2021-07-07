/*
Copyright 2021, Yahoo
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
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public radioThemeProperties = [
        {
            default: 'var(--s0)',
            name: '--radio-size',
            property: 'width, height',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--radio-border',
            property: 'border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--radio-background',
            property: 'background',
        },
        {
            default: 'var(--c_gray)',
            name: '--radio-hover-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--radio-selected-background',
            property: 'background-color',
        },
        {
            default: 'calc(var(--s-5) - 1px)',
            name: '--radio-selected-dot-size',
            property: 'background-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--radio-disabled-background',
            property: 'background',
        },
        {
            default: 'var(--c_smoke)',
            name: '--radio-checkbox-label-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--radio-checkbox-label-size',
            property: 'font-size',
        },
    ];
}
