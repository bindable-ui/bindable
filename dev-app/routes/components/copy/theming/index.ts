/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CopyThemeProperties {
    public copyThemeCols = [
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

    public copyThemeProperties = [
        {
            default: 'solid 1px var(--c_gray)',
            name: '--copy-button-border',
        },
        {
            default: '0 var(--s-5) var(--s-5) 0',
            name: '--copy-button-radius',
        },
        {
            default: '73px',
            name: '--copy-button-width',
        },
        {
            default: 'var(--s-3) var(--s-1) calc(var(--s-3) - 2px)',
            name: '--copy-content-padding',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--copy-content-border',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--copy-content-background',
        },
        {
            default: 'var(--c_gray)',
            name: '--copy-content-color',
        },
        {
            default: 'var(--s-1)',
            name: '--copy-content-font-size',
        },
    ];
}
