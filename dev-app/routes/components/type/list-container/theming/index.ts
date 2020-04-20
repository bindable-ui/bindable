/*
Copyright 2020, Verizon Media
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public listContainerThemeProperties = [
        {
            default: 'initial',
            name: '--list-container-dark-color',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--list-container-dark-background',
        },
        {
            default: 'var(--c_white)',
            name: '--list-container-dark-a-color-hover',
        },
        {
            default: 'var(--c_soot)',
            name: '--list-container-dark-a-background-hover',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--list-container-dark-a-icon-hover',
        },
        {
            default: 'initial',
            name: '--list-container-light-color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--list-container-light-background',
        },
        {
            default: 'var(--c_white)',
            name: '--list-container-light-a-color-hover',
        },
        {
            default: 'var(--c_ash)',
            name: '--list-container-light-a-background-hover',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--list-container-light-a-icon-hover',
        },
        {
            default: 'var(--s-5) var(--s-2)',
            name: '--list-container-medium-a-padding',
        },
        {
            default: 'var(--s-5) var(--s-2) 0',
            name: '--list-container-medium-h5-padding',
        },
        {
            default: 'var(--s-5) var(--s-1)',
            name: '--list-container-small-a-padding',
        },
        {
            default: 'var(--s-1)',
            name: '--list-container-small-a-font-size',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--list-container-divider',
        },
    ];
}
