/*
Copyright 2021, Yahoo
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

    public navHorizontalThemeProperties = [
        {
            default: 'var(--s0) 0',
            name: '--nav-medium-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-1) 0',
            name: '--nav-small-padding',
            property: 'padding',
        },
        {
            default: 'calc(var(--s0) - 0.12rem)',
            name: '--nav-small-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--s-5) 0',
            name: '--nav-tiny--padding',
            property: 'padding',
        },
        {
            default: 'var(--s-1)',
            name: '--nav-tiny-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_soot)',
            name: '--nav-mobile-background',
            property: 'background',
        },
        {
            default: 'var(--s-1)',
            name: '--nav-mobile-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_slate)',
            name: '--nav-mobile-hover',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--nav-mobile-active',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--nav-mobile-trigger-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_white)',
            name: '--nav-mobile-trigger-bars-color',
            property: 'background',
        },
    ];
}
