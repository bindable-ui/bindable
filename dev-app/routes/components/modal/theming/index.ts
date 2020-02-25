/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ModalThemeProperties {
    public modalThemeCols = [
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

    public modalThemeProperties = [
        {
            default: 'rgba(0, 0, 0, 0.6)',
            name: '--modal-overlay-background',
        },
    ];

    public modalThemeProperties2 = [
        {
            default: 'var(--c_slate)',
            name: '--modal-background',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--modal-top-border-color',
        },
        {
            default: '5px',
            name: '--modal-top-border-size',
        },
        {
            default: 'var(--s3) var(--s3) var(--s-1)',
            name: '--modal-header-padding',
        },
        {
            default: '0 var(--s3)',
            name: '--modal-body-padding',
        },
        {
            default: 'var(--s1) var(--s3)',
            name: '--modal-footer-padding',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--modal-footer-border-top',
        },
    ];
}
