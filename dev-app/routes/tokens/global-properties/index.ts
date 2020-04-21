/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class GlobalProperties {
    public globalCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default Theme Value',
        },
    ];

    public globalProperties = [
        {
            default: 'var(--ff_primary-normal)',
            name: '--body-font-family',
        },
        {
            default: 'var(--c_slate)',
            name: '--body-background',
        },
        {
            default: 'var(--c_white)',
            name: '--body-color',
        },
        {
            default: 'var(--c_smoke)',
            name: '--a-color',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--a-color-hover',
        },
        {
            default: 'var(--c_smoke)',
            name: '--p-default-color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--selected-text-background',
        },
        {
            default: 'var(--c_white)',
            name: '--selected-text-color',
        },
    ];
}
