/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Dividers {
    public dividerThemeCols = [
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

    public dividerThemeProperties = [
        {
            default: 'var(--c_smoke)',
            name: '--list-color',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--list-color-link',
        },
    ];
}
