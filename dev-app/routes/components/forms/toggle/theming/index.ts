/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ToggleThemeProperties {
    public toggleThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public toggleThemeProperties = [
        {
            default: 'var(--c_white)',
            name: '--toggle-nub-border-hover',
        },
        {
            default: 'var(--c_white)',
            name: '--toggle-nub-border-checked',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toggle-nub-border-disabled',
        },
        {
            default: 'var(--c_slate)',
            name: '--toggle-nub-background',
        },
        {
            default: 'var(--c_slate)',
            name: '--toggle-nub-background-disabled',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--toggle-nub-background-checked',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--toggle-nub-background-checked-disabled',
        },
        {
            default: 'var(--c_gray)',
            name: '--toggle-nub-hover-background',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--toggle-bar-background-checked',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toggle-bar-background',
        },
        {
            default: 'inset 0px 0px 2px var(--c_black)',
            name: '--toggle-bar-shadow',
        },
    ];
}
