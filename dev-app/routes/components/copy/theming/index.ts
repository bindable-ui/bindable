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
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Main Theme',
        },
    ];

    public copyThemeProperties = [
        {
            default: 'solid 1px var(--c_gray)',
            name: '--copy-button-border',
            property: 'border',
        },
        {
            default: '0 var(--s-5) var(--s-5) 0',
            name: '--copy-button-radius',
            property: 'border-radius',
        },
        {
            default: '73px',
            name: '--copy-button-width',
            property: 'grid-template-columns (second col width size)',
        },
        {
            default: 'var(--s-3) var(--s-1) calc(var(--s-3) - 2px)',
            name: '--copy-content-padding',
            property: 'padding',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--copy-content-border',
            property: 'border',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--copy-content-background',
            property: 'background',
        },
        {
            default: 'var(--c_gray)',
            name: '--copy-content-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--copy-content-font-size',
            property: 'font-size',
        },
    ];
}
