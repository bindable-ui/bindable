/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TipThemeProperties {
    public tipThemeCols = [
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

    public tipThemeProperties = [
        {
            default: 'var(--s-2) var(--s3) var(--s-2) var(--s-2)',
            name: '--tip-padding',
        },
        {
            default: 'var(--c_soot)',
            name: '--tip-border-color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--tip-background',
        },
        {
            default: 'var(--c_white)',
            name: '--tip-color',
        },
        {
            default: '1px 4px 2px 5px',
            name: '--tip-close-padding',
        },
        {
            default: 'var(--c_slate)',
            name: '--tip-close-background',
        },
        {
            default: 'var(--c_white)',
            name: '--tip-close-color',
        },
        {
            default: '14px',
            name: '--tip-close-font-size',
        },
        {
            default: 'var(--c_smoke)',
            name: '--tip-close-background-hover',
        },
        {
            default: '150px',
            name: '--tip-width-small',
        },
        {
            default: '180px',
            name: '--tip-width-medium',
        },
        {
            default: '220px',
            name: '--tip-width-large',
        },
        {
            default: '300px',
            name: '--tip-width-xlarge',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--tip-color-primary',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--tip-color-secondary',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--tip-color-sub-one',
        },
        {
            default: 'var(--c_subTwoMain)',
            name: '--tip-color-sub-two',
        },
        {
            default: 'var(--c_subThreeMain)',
            name: '--tip-color-sub-three',
        },
    ];
}
