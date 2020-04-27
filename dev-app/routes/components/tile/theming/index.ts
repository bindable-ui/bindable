/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TileThemeProperties {
    public tileThemeCols = [
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

    public tileThemeProperties = [
        {
            default: 'var(--s-5)',
            name: '--tile-padding--tile-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--tile-background',
            property: 'background',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--tile-background-hover',
            property: 'background',
        },
        {
            default: 'var(--c_soot)',
            name: '--tile-image-background',
            property: 'background',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--tile-h4-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--tile-h4-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_gray)',
            name: '--tile-checked-background',
            property: 'background',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--tile-checked-text-color',
            property: 'color',
        },
        {
            default: 'var(--c_black)',
            name: '--tile-drag-background',
            property: 'background',
        },
        {
            default: 'calc(var(--s-5) * -1)',
            name: '--tile-tip-top',
            property: 'top',
        },
        {
            default: 'calc(var(--s-5) * -1)',
            name: '--tile-tip-right',
            property: 'right',
        },
        {
            default: 'var(--s-5) var(--s-3)',
            name: '--tile-tip-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--tile-tip-background',
            property: 'background',
        },
        {
            default: 'var(--s-5)',
            name: '--tile-status-height',
            property: 'height',
        },
        {
            default: '#CCC url(\'../../../global-styles/assets/images/td-processing.gif\')',
            name: '--tile-status-processing',
            property: 'background',
        },
    ];
}
