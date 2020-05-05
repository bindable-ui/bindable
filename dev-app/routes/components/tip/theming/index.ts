/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TipThemeProperties {
    public tipThemeCols = [
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

    public tipThemeProperties = [
        {
            default: 'var(--s-2) var(--s3) var(--s-2) var(--s-2)',
            name: '--tip-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_soot)',
            name: '--tip-border-color',
            property: 'border-color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--tip-background',
            property: 'background',
        },
        {
            default: 'var(--c_white)',
            name: '--tip-color',
            property: 'color',
        },
        {
            default: '1px 4px 2px 5px',
            name: '--tip-close-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_slate)',
            name: '--tip-close-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_white)',
            name: '--tip-close-color',
            property: 'color',
        },
        {
            default: '14px',
            name: '--tip-close-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_smoke)',
            name: '--tip-close-background-hover',
            property: 'backround-color',
        },
        {
            default: '150px',
            name: '--tip-width-small',
            property: 'width',
        },
        {
            default: '180px',
            name: '--tip-width-medium',
            property: 'width',
        },
        {
            default: '220px',
            name: '--tip-width-large',
            property: 'width',
        },
        {
            default: '300px',
            name: '--tip-width-xlarge',
            property: 'width',
        },
    ];
}
