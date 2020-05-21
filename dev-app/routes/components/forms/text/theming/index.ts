/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class TextThemeProperties {
    public textThemeCols = [
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

    public textThemeProperties = [
        {
            default: 'var(--s-5) var(--s-3)',
            name: '--input-padding',
            property: 'padding',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--input-border',
            property: 'border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background',
            property: 'background',
        },
        {
            default: 'var(--c_smoke)',
            name: '--input-color',
            property: 'color',
        },
        {
            default: '#6C6C6C',
            name: '--input-placeholder-color',
            property: 'color',
        },
        {
            default: 'inset 0 -1px 0 var(--c_gray)',
            name: '--input-box-shadow',
            property: 'box-shadow',
        },
        {
            default: 'box-shadow var(--trans_main), color var(--trans_main), border var(--trans_main), background var(--trans_main)',
            name: '--input-transition',
            property: 'transition',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--input-color-focus',
            property: 'color',
        },
        {
            default: 'inset 0 -1px 0 var(--c_secondaryMain)',
            name: '--input-box-shadow-focus',
            property: 'box-shadow',
        },
        {
            default: 'inset 0 -1px 0 var(--c_primaryLight)',
            name: '--input-box-shadow-error',
            property: 'box-shadow',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background-error',
            property: 'background',
        },
        {
            default: 'inset 0 -1px 0 var(--c_subTwoMain)',
            name: '--input-box-shadow-warning',
            property: 'box-shadow',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background-warning',
            property: 'background',
        },
        {
            default: 'inset 0 -1px 0 var(--c_subOneMain)',
            name: '--input-box-shadow-info',
            property: 'box-shadow',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background-info',
            property: 'background',
        },
        {
            default: 'var(--s-2)',
            name: '--input-icon-padding',
            property: 'padding-left, padding-right',
        },
        {
            default: 'var(--s-2)',
            name: '--input-icon-side-spacing',
            property: 'left, right',
        },
        {
            default: 'calc(var(--s-3) + 1px)',
            name: '--input-icon-top-spacing',
            property: 'top',
        },
        {
            default: 'var(--s0)',
            name: '--input-icon-size',
            property: 'width, height',
        },
        {
            default: 'var(--c_smoke)',
            name: '--input-icon-color',
            property: 'fill',
        },
        {
            default: 'var(--s-3) var(--s1)',
            name: '--input-button-padding',
            property: 'padding',
        },
        {
            default: '1px',
            name: '--input-button-border-size',
            property: 'border-width',
        },
        {
            default: 'var(--c_black)',
            name: '--input-button-border-color',
            property: 'border-color',
        },
        {
            default: '0 5px 5px 0',
            name: '--input-button-border-radius',
            property: 'border-radius',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--input-button-bin-hover-background',
            property: '',
        },
        {
            default: 'unset',
            name: '--input-button-bin-hover-icon-color',
            property: '',
        },
        {
            default: 'var(--s3)',
            name: '--input-clearable-spacing-right',
            property: 'color',
        },
        {
            default: 'var(--s-5)',
            name: '--input-clearable-icon-top',
            property: 'top',
        },
        {
            default: 'var(--s-1)',
            name: '--input-clearable-icon-right',
            property: 'right',
        },
        {
            default: 'var(--s4)',
            name: '--input-clearable-icon-right-w-button',
            property: 'right',
        },
        {
            default: 'var(--s-2)',
            name: '--input-clearable-icon-size',
            property: 'width, height',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--input-clearable-icon-color',
            property: 'fill',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--input-clearable-icon-hover-color',
            property: 'fill',
        },
    ];

    public textThemeProperties2 = [
        {
            default: 'var(--c_subOneMain)',
            name: '--form-disabled-color',
            property: 'color',
        },
        {
            default: 'var(--ff_primary-normal-italic)',
            name: '--form-disabled-font-family',
            property: 'font-family',
        },
    ];

    public textThemeProperties3 = [
        {
            default: 'var(--c_primaryLight)',
            name: '--form-error-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--form-error-font-size',
            property: 'font-size',
        },
    ];

    public textThemeProperties4 = [
        {
            default: 'var(--c_subTwoMain)',
            name: '--form-warning-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--form-warning-font-size',
            property: 'font-size',
        },
    ];

    public textThemeProperties5 = [
        {
            default: 'var(--c_subOneMain)',
            name: '--form-info-color',
            property: 'color',
        },
        {
            default: 'var(--s-1)',
            name: '--form-info-font-size',
            property: 'font-size',
        },
    ];
}
