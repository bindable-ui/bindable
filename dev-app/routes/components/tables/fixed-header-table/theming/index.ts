/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TableFixedHeaderThemeProperties {
    public tableFixedHeaderThemeCols = [
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

    public tableFixedHeaderThemeProperties = [
        {
            default: 'calc(var(--s4) + 5px)',
            name: '--table-header-height',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--table-header-border',
        },
        {
            default: 'calc((var(--s4) * -1) - 3px)',
            name: '--table-header-div-margin-top',
        },
        {
            default: 'var(--s0)',
            name: '--table-header-div-padding-left',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--table-header-div-border-left',
        },
        {
            default: 'calc(var(--s4) + 3px)',
            name: '--table-header-div-line-height',
        },
        {
            default: 'var(--c_asphalt)',
            name: '--table-header-loader-background',
        },
    ];
}
