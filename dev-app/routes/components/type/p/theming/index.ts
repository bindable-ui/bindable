/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class PThemeProperties {
    public pThemeCols = [
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

    public pThemeProperties = [
        {
            default: 'var(--s0)',
            name: '--p-font-size-large',
        },
        {
            default: 'var(--s-1)',
            name: '--p-font-size-medium',
        },
        {
            default: 'var(--s-2)',
            name: '--p-font-size-small',
        },
    ];
}
