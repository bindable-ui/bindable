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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public toastsThemeProperties = [
        {
            default: '20px',
            name: '--toast-wrapper-top',
        },
        {
            default: '20px',
            name: '--toast-wrapper-right',
        },
        {
            default: '260px',
            name: '--toast-wrapper-width',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--toast-border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toast-background',
        },
        {
            default: 'var(--s2)',
            name: '--toast-margin-bottom',
        },
        {
            default: 'var(--s3)',
            name: '--toast-icon-container-size',
        },
        {
            default: 'var(--s0) var(--s-1) var(--s-1)',
            name: '--toast-message-padding',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--toast-message-color',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--toast-info-background',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--toast-success-background',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--toast-warning-background',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--toast-error-background',
        },
    ];
}
