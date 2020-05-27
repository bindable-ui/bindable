/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ToastsThemeProperties {
    public toastsThemeCols = [
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public toastsThemeProperties = [
        {
            default: '20px',
            name: '--toast-wrapper-top',
            property: 'top',
        },
        {
            default: '20px',
            name: '--toast-wrapper-right',
            property: 'right',
        },
        {
            default: '260px',
            name: '--toast-wrapper-width',
            property: 'width',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--toast-border',
            property: 'border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toast-background',
            property: 'background-color',
        },
        {
            default: 'var(--s2)',
            name: '--toast-margin-bottom',
            property: 'margin-bottom',
        },
        {
            default: 'var(--s3)',
            name: '--toast-icon-container-size',
            property: 'width, height',
        },
        {
            default: 'var(--s0) var(--s-1) var(--s-1)',
            name: '--toast-message-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toast-message-color',
            property: 'color',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--toast-info-background',
            property: 'background',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--toast-success-background',
            property: 'success',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--toast-warning-background',
            property: 'warning',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--toast-error-background',
            property: 'error',
        },
    ];
}
