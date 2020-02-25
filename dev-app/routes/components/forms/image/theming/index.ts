/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class FormImageThemeProperties {
    public formImageThemeCols = [
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

    public formImageThemeProperties = [
        {
            default: '#3C3C3C',
            name: '--form-image-hover-background',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--form-image-description-color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--form-image-description-font-family',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--form-image-active-background',
        },
    ];
}
