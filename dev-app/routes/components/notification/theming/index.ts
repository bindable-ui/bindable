/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NotificationThemeProperties {
    public notificationThemeCols = [
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

    public notificationThemeProperties = [
        {
            default: 'var(--s-1)',
            name: '--notification-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_white)',
            name: '--notification-color',
            property: 'color',
        },
        {
            default: 'var(--s-3) var(--s0) var(--s-3) 0',
            name: '--notification-padding',
            property: 'padding',
        },
        {
            default: 'solid 1px var(--c_subOneMain)',
            name: '--notification-info-border',
            property: 'border',
        },
        {
            default: 'var(--c_subOneDark)',
            name: '--notification-info-background',
            property: 'background',
        },
        {
            default: 'var(--c_subOneLighter)',
            name: '--notification-info-color',
            property: 'fill',
        },
        {
            default: ' solid 1px var(--c_subTwoMain)',
            name: '--notification-warning-border',
            property: 'border',
        },
        {
            default: 'var(--c_subTwoDark)',
            name: '--notification-warning-background',
            property: 'background',
        },
        {
            default: 'var(--c_subTwoLight)',
            name: '--notification-warning-color',
            property: 'fill',
        },
        {
            default: 'solid 1px var(--c_primaryLighter)',
            name: '--notification-critical-border',
            property: 'border',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--notification-critical-background',
            property: 'background',
        },
        {
            default: 'var(--c_primaryLighter)',
            name: '--notification-critical-color',
            property: 'fill',
        },
        {
            default: 'solid 1px var(--c_secondaryLighter)',
            name: '--notification-success-border',
            property: 'border',
        },
        {
            default: 'var(--c_secondaryDark)',
            name: '--notification-success-background',
            property: 'background',
        },
        {
            default: 'var(--c_secondaryLighter)',
            name: '--notification-success-color',
            property: 'fill',
        },
        {
            default: '0 0 calc(var(--s5) + 120px)',
            name: '--notification-callout-flex',
            property: 'flex',
        },
        {
            default: 'var(--s0) var(--s2)',
            name: '--notification-callout-padding',
            property: 'padding',
        },
        {
            default: 'var(--s0)',
            name: '--notification-callout-h5-size',
            property: 'font-size',
        },
    ];
}
