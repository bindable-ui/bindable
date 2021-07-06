/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NavHorizontalItemThemeProperties {
    public navHorizontalItemThemeCols = [
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

    public navHorizontalItemThemeProperties = [
        {
            default: 'solid 3px var(--c_primaryMain)',
            name: '--nav-item-border-bottom-active',
            property: 'border-bottom',
        },
        {
            default: '0',
            name: '--nav-item-border-bottom-hover',
            property: 'border-bottom',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--nav-item-color',
            property: 'color',
        },
        {
            default: 'var(--c_white)',
            name: '--nav-item-hover-active-color',
            property: 'color',
        },
    ];
}
