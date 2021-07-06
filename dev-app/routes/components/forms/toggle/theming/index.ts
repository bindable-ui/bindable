/*
Copyright 2021, Yahoo EdgeCast
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

    public toggleThemeProperties = [
        {
            default: 'var(--c_smoke)',
            name: '--toggle-nub-border',
            property: 'border',
        },
        {
            default: 'var(--c_white)',
            name: '--toggle-nub-border-hover',
            property: 'border-color',
        },
        {
            default: 'var(--c_white)',
            name: '--toggle-nub-border-checked',
            property: 'border-color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toggle-nub-border-disabled',
            property: 'border-color',
        },
        {
            default: 'var(--c_slate)',
            name: '--toggle-nub-background',
            property: 'background',
        },
        {
            default: 'var(--c_slate)',
            name: '--toggle-nub-background-disabled',
            property: 'background',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--toggle-nub-background-checked',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--toggle-nub-background-checked-disabled',
            property: 'background',
        },
        {
            default: 'var(--c_gray)',
            name: '--toggle-nub-hover-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--toggle-bar-background-checked',
            property: 'background-color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toggle-bar-background',
            property: 'background-color',
        },
        {
            default: 'inset 0px 0px 2px var(--c_black)',
            name: '--toggle-bar-shadow',
            property: 'box-shadow',
        },
    ];
}
