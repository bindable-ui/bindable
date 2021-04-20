/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class PillThemeProperties {
    public pillThemeCols = [
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public pillThemeProperties = [
        {
            default: '4px 7px 3px',
            name: '--pill-padding',
            property: 'padding',
        },
        {
            default: '5px',
            name: '--pill-border-radius',
            property: 'border-radius',
        },
        {
            default: 'var(--c_white)',
            name: '--pill-text-color',
            property: 'color',
        },
        {
            default: 'var(--s-2)',
            name: '--pill-font-size',
            property: 'font-size',
        },
        {
            default: 'normal',
            name: '--pill-font-weight',
            property: 'font-weight',
        },
        {
            default: 'inherit',
            name: '--pill-font-family',
            property: 'font-family',
        },
        {
            default: 'var(--c_white)',
            name: '--pill-link-color',
            property: 'color',
        },
    ];
}
