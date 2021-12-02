/*
Copyright 2021, Edgecast
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

    public modalThemeProperties = [
        {
            default: 'rgba(0, 0, 0, 0.6)',
            name: '--modal-overlay-background',
            property: 'background',
        },
    ];

    public modalThemeProperties2 = [
        {
            default: 'var(--c_slate)',
            name: '--modal-background',
            property: 'background',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--modal-top-border-color',
            property: 'background-color',
        },
        {
            default: '5px',
            name: '--modal-top-border-size',
            property: 'height',
        },
        {
            default: 'var(--s3) var(--s3) var(--s-1)',
            name: '--modal-header-padding',
            property: 'padding',
        },
        {
            default: '0 var(--s3)',
            name: '--modal-body-padding',
            property: 'padding',
        },
        {
            default: 'var(--s1) var(--s3)',
            name: '--modal-footer-padding',
            property: 'padding',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--modal-footer-border-top',
            property: 'border-top',
        },
    ];
}
