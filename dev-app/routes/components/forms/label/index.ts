/*
Copyright 2021, Yahoo EdgeCast
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
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public labelThemeProperties = [
        {
            default: 'var(--c_white)',
            name: '--label-color',
            property: 'color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--label-font-family',
            property: 'font-family',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--label-color-error',
            property: 'color',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--label-color-warning',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--label-edit-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--label-edit-color',
            property: 'color',
        },
        {
            default: 'var(--c_subOneLighter)',
            name: '--label-edit-hover-color',
            property: 'color',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--label-done-color',
            property: 'color',
        },
        {
            default: 'var(--c_subTwoLighter)',
            name: '--label-done-hover-color',
            property: 'color',
        },
    ];
}
