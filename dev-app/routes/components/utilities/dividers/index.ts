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
            default: '1px',
            name: '--divider-height',
        },
        {
            default: 'var(--c_gray)',
            name: '--divider-background',
        },
    ];
}
