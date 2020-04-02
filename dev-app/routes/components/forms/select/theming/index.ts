/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class SelectThemeProperties {
    public selectThemeCols = [
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

    public selectThemeProperties = [
        {
            default: 'var(--c_subOneMain)',
            name: '--select-multiple-checked',
        },
        {
            default: 'var(--c_asphalt)',
            name: '--select-multiple-load-more-background',
        },
    ];
}
