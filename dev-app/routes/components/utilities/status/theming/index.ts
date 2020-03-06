/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class StatusThemeProperties {
    public statusThemeCols = [
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

    public statusThemeProperties = [
        {
            default: 'var(--c_smoke)',
            name: '--status-color',
        },
        {
            default: 'var(--s-1)',
            name: '--status-font-size',
        },
        {
            default: 'var(--s-5)',
            name: '--status-margin-left',
        },
    ];
}
