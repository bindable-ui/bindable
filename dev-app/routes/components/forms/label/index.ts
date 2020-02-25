/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FormLabel {
    public labelThemeCols = [
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

    public labelThemeProperties = [
        {
            default: 'var(--c_white)',
            name: '--label-color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--label-font-family',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--label-color-error',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--label-color-warning',
        },
        {
            default: 'var(--s-1)',
            name: '--label-edit-font-size',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--label-edit-color',
        },
        {
            default: 'var(--c_subOneLighter)',
            name: '--label-edit-hover-color',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--label-done-color',
        },
        {
            default: 'var(--c_subTwoLighter)',
            name: '--label-done-hover-color',
        },
    ];
}
