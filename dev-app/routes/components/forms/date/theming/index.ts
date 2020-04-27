/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class FormDateThemeProperties {
    public formDateThemeCols = [
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
            colHeadValue: 'Main Theme',
        },
    ];

    public formDateThemeProperties = [
        {
            default: 'var(--c_smoke)',
            name: '--form-date-calendar-icon-color',
            property: 'fill',
        },
        {
            default: 'var(--s-2)',
            name: '--form-date-calendar-icon-right-space',
            property: 'right',
        },
    ];

    public formDateThemeProperties2 = [
        {
            default: 'var(--c_soot)',
            name: '--form-date-calendar-background',
            property: 'background',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--form-date-calendar-day-hover-background',
            property: 'background',
        },
        {
            default: '#777',
            name: '--form-date-calendar-old-new-color',
            property: 'color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--form-date-calendar-today-marker-color',
            property: 'border-bottom-color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--form-date-calendar-day-active-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_white)',
            name: '--form-date-calendar-day-active-color',
            property: 'color',
        },
        {
            default: '#777',
            name: '--form-date-calendar-day-disabled-color',
            property: 'color',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--form-date-calendar-button-color',
            property: 'color',
        },
    ];
}
