/*
Copyright 2021, Edgecast
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

    public checkboxThemeProperties = [
        {
            default: 'var(--s0)',
            name: '--checkbox-size',
            property: 'width, height',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--checkbox-border',
            property: 'border',
        },
        {
            default: '2px',
            name: '--checkbox-border-radius',
            property: 'border-radius',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--checkbox-background',
            property: 'background',
        },
        {
            default: 'var(--c_gray)',
            name: '--checkbox-hover-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--radio-selected-background',
            property: 'background-color',
        },
        {
            default: 'var(--s-2)',
            name: '--checkbox-selected-check-size',
            property: 'background-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--checkbox-disabled-background',
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
