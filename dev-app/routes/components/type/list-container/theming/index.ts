/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ListContainerThemeProperties {
    public listContainerThemeCols = [
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

    public listContainerThemeProperties = [
        {
            default: 'initial',
            name: '--list-container-dark-color',
            property: 'color',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--list-container-dark-background',
            property: 'background',
        },
        {
            default: 'var(--c_white)',
            name: '--list-container-dark-a-color-hover',
            property: 'color',
        },
        {
            default: 'var(--c_soot)',
            name: '--list-container-dark-a-background-hover',
            property: 'background',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--list-container-dark-a-icon-hover',
            property: 'fill',
        },
        {
            default: 'initial',
            name: '--list-container-light-color',
            property: 'color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--list-container-light-background',
            property: 'background',
        },
        {
            default: 'var(--c_white)',
            name: '--list-container-light-a-color-hover',
            property: 'color',
        },
        {
            default: 'var(--c_ash)',
            name: '--list-container-light-a-background-hover',
            property: 'background',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--list-container-light-a-icon-hover',
            property: 'fill',
        },
        {
            default: 'var(--s-5) var(--s-2)',
            name: '--list-container-medium-a-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-5) var(--s-2) 0',
            name: '--list-container-medium-h5-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-5) var(--s-1)',
            name: '--list-container-small-a-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-1)',
            name: '--list-container-small-a-font-size',
            property: 'font-size',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--list-container-divider',
            property: 'border-bottom',
        },
    ];
}
