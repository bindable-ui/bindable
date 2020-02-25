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
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public textThemeProperties = [
        {
            default: 'var(--s-5) var(--s-3)',
            name: '--input-padding',
        },
        {
            default: 'solid 1px var(--c_black)',
            name: '--input-border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background',
        },
        {
            default: 'var(--c_smoke)',
            name: '--input-color',
        },
        {
            default: 'inset 0 -1px 0 var(--c_gray)',
            name: '--input-box-shadow',
        },
        {
            default: 'box-shadow var(--trans_main), color var(--trans_main), border var(--trans_main), background var(--trans_main)',
            name: '--input-transition',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--input-color-focus',
        },
        {
            default: 'inset 0 -1px 0 var(--c_secondaryMain)',
            name: '--input-box-shadow-focus',
        },
        {
            default: 'inset 0 -1px 0 var(--c_primaryLight)',
            name: '--input-box-shadow-error',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background-error',
        },
        {
            default: 'inset 0 -1px 0 var(--c_subTwoMain)',
            name: '--input-box-shadow-warning',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--input-background-warning',
        },
        {
            default: 'var(--s-2)',
            name: '--input-icon-padding',
        },
        {
            default: 'var(--s-2)',
            name: '--input-icon-side-spacing',
        },
        {
            default: 'calc(var(--s-3) + 1px)',
            name: '--input-icon-top-spacing',
        },
        {
            default: 'var(--s0)',
            name: '--input-icon-size',
        },
        {
            default: 'var(--c_smoke)',
            name: '--input-icon-color',
        },
        {
            default: 'calc(var(--s-4) + 1px) var(--s-3)',
            name: '--input-button-padding',
        },
        {
            default: '1px',
            name: '--input-button-border-size',
        },
        {
            default: 'var(--c_black)',
            name: '--input-button-border-color',
        },
        {
            default: '0 5px 5px 0',
            name: '--input-button-border-radius',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--input-button-bin-hover-background',
        },
        {
            default: 'var(--s3)',
            name: '--input-clearable-spacing-right',
        },
        {
            default: 'var(--s-5)',
            name: '--input-clearable-icon-top',
        },
        {
            default: 'var(--s-1)',
            name: '--input-clearable-icon-right',
        },
        {
            default: 'var(--s4)',
            name: '--input-clearable-icon-right-w-button',
        },
        {
            default: 'var(--s-2)',
            name: '--input-clearable-icon-size',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--input-clearable-icon-hover-color',
        },
    ];

    public textThemeProperties2 = [
        {
            default: 'var(--c_subOneMain)',
            name: '--form-disabled-color',
        },
        {
            default: 'var(--ff_primary-normal-italic)',
            name: '--form-disabled-font-family',
        },
    ];

    public textThemeProperties3 = [
        {
            default: 'var(--c_primaryLight)',
            name: '--form-error-color',
        },
        {
            default: 'var(--s-1)',
            name: '--form-error-font-size',
        },
    ];

    public textThemeProperties4 = [
        {
            default: 'var(--c_subtwoMain)',
            name: '--form-warning-color',
        },
        {
            default: 'var(--s-1)',
            name: '--form-warning-font-size',
        },
    ];
}
