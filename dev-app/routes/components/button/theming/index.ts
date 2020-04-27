/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ButtonThemeProperties {
    public buttonThemeCols = [
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
            colHeadValue: 'Main Theme',
        },
    ];

    public buttonThemeProperties = [
        {
            default: 'var(--s-5)',
            name: '--button-border-radius',
            property: 'border-radius',
        },
        {
            default: 'var(--c_white)',
            name: '--button-color',
            property: 'color',
        },
        {
            default: ' #939393',
            name: '--button-disabled-color',
            property: 'color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--button-font-family',
            property: 'font-family',
        },
        {
            default: 'var(--s-1)',
            name: '--button-font-size',
            property: 'font-size',
        },
        {
            default: '0 1px 1px rgba(0, 0, 0, 0.5)',
            name: '--button-text-shadow',
            property: 'text-shadow',
        },
        {
            default: 'all var(--trans_main)',
            name: '--button-transition',
            property: 'transition',
        },
        {
            default: 'none',
            name: '--button-text-transform',
            property: 'text-transform',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--button-primary-background',
            property: 'background-color',
        },
        {
            default: '#F12930',
            name: '--button-primary-hover-background',
            property: 'background-color',
        },
        {
            default: '#7A1516',
            name: '--button-primary-disabled-background',
            property: 'background-color',
        },
        {
            default: 'var(--button-disabled-color)',
            name: '--button-primary-disabled-color',
            property: 'color',
        },
        {
            default: 'var(--button-color)',
            name: '--button-primary-color',
            property: 'color',
        },
        {
            default: 'var(--c_secondaryMain)',
            name: '--button-secondary-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_secondaryLight)',
            name: '--button-secondary-hover-background',
            property: 'background-color',
        },
        {
            default: '#20623F',
            name: '--button-secondary-disabled-background',
            property: 'background-color',
        },
        {
            default: 'var(--button-disabled-color)',
            name: '--button-secondary-disabled-color',
            property: 'background-color',
        },
        {
            default: 'var(--button-color)',
            name: '--button-secondary-color',
            property: 'background-color',
        },
        {
            default: 'var(--c_gray)',
            name: '--button-neutral-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_smoke)',
            name: '--button-neutral-hover-background',
            property: 'background-color',
        },
        {
            default: '#454545',
            name: '--button-neutral-disabled-background',
            property: 'background-color',
        },
        {
            default: 'var(--button-disabled-color)',
            name: '--button-neutral-disabled-color',
            property: 'background-color',
        },
        {
            default: 'var(--button-color)',
            name: '--button-neutral-color',
            property: 'color',
        },
        {
            default: 'var(--c_primaryLight)',
            name: '--button-danger-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryLighter)',
            name: '--button-danger-hover-background',
            property: 'background-color',
        },
        {
            default: '#913236',
            name: '--button-danger-disabled-background',
            property: 'background-color',
        },
        {
            default: 'var(--button-disabled-color)',
            name: '--button-danger-disabled-color',
            property: 'color',
        },
        {
            default: 'var(--button-color)',
            name: '--button-danger-color',
            property: 'color',
        },
        {
            default: 'var(--s-3) var(--s1)',
            name: '--button-medium-padding',
            property: 'padding',
        },
        {
            default: 'var(--s4)',
            name: '--button-medium-icon-side-padding',
            property: 'padding-left, padding-right',
        },
        {
            default: 'var(--s-3) var(--s-1)',
            name: '--button-medium-icon-center-padding',
            property: 'padding',
        },
        {
            default: 'var(--s0)',
            name: '--button-medium-icon-svg-size',
            property: 'width, height',
        },
        {
            default: 'var(--s0)',
            name: '--button-medium-icon-svg-spacing',
            property: 'left, right',
        },
        {
            default: '1px',
            name: '--button-medium-icon-svg-top-spacing',
            property: 'margin-top',
        },
        {
            default: 'var(--s-5) var(--s-1)',
            name: '--button-small-padding',
            property: 'padding',
        },
        {
            default: 'var(--s3)',
            name: '--button-small-icon-side-padding',
            property: 'padding-left, padding-right',
        },
        {
            default: 'var(--s-5) var(--s-1)',
            name: '--button-small-icon-center-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-1)',
            name: '--button-small-icon-svg-size',
            property: 'width, height',
        },
        {
            default: 'var(--s-1)',
            name: '--button-small-icon-svg-spacing',
            property: 'left, right',
        },
        {
            default: 'calc(var(--s-5) - 3px)',
            name: '--button-small-icon-svg-top-spacing',
            property: 'margin-top',
        },
        {
            default: 'var(--s4)',
            name: '--button-thinking-padding-left',
            property: 'padding-left',
        },
        {
            default: 'calc(15px + var(--s5))',
            name: '--button-thinking-padding-left-with-icon',
            property: 'padding-left',
        },
        {
            default: 'calc(50% - var(--s-4))',
            name: '--button-thinking-spinner-top',
            property: 'top',
        },
        {
            default: 'var(--s0)',
            name: '--button-thinking-spinner-left',
            property: 'left',
        },
        {
            default: 'var(--s-1)',
            name: '--button-thinking-spinner-size',
            property: 'width, height',
        },
    ];
}
