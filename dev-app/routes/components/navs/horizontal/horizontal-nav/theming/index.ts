/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NavHorizontalThemeProperties {
    public navHorizontalThemeCols = [
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

    public navHorizontalThemeProperties = [
        {
            default: 'var(--c_darkGray)',
            name: '--nav-background',
        },
        {
            default: 'var(--s0) 0',
            name: '--nav-medium-padding',
        },
        {
            default: 'var(--s-1) 0',
            name: '--nav-small-padding',
        },
        {
            default: 'calc(var(--s0) - 0.12rem)',
            name: '--nav-small-font-size',
        },
        {
            default: 'var(--s-5) 0',
            name: '--nav-tiny--padding',
        },
        {
            default: 'var(--s-1)',
            name: '--nav-tiny-font-size',
        },
        {
            default: 'var(--c_soot)',
            name: '--nav-mobile-background',
        },
        {
            default: 'var(--s-1)',
            name: '--nav-mobile-font-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--nav-mobile-hover',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--nav-mobile-active',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--nav-mobile-trigger-background',
        },
        {
            default: 'var(--c_white)',
            name: '--nav-mobile-trigger-bars-color',
        },
    ];
}
