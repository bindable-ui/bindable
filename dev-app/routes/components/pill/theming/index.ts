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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public pillThemeProperties = [
        {
            default: '4px 7px 3px',
            name: '--pill-padding',
        },
        {
            default: '5px',
            name: '--pill-border-radius',
        },
        {
            default: 'var(--c_white)',
            name: '--pill-color',
        },
        {
            default: 'var(--s-2)',
            name: '--pill-font-size',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--pill-info-background',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--pill-neutral-background',
        },
        {
            default: 'var(--c_white)',
            name: '--pill-link-color',
        },
        {
            default: 'var(--c_subOneLight)',
            name: '--pill-link-info-background-hover',
        },
        {
            default: 'var(--c_gray)',
            name: '--pill-link-neutral-background-hover',
        },
    ];
}
