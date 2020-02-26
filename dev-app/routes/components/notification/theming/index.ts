/*
Copyright 2020, Verizon Media
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public notificationThemeProperties = [
        {
            default: 'var(--s-1)',
            name: '--notification-font-size',
        },
        {
            default: 'var(--c_white)',
            name: '--notification-color',
        },
        {
            default: 'var(--s-3) var(--s0) var(--s-3) 0',
            name: '--notification-padding',
        },
        {
            default: 'solid 1px var(--c_subOneMain)',
            name: '--notification-info-border',
        },
        {
            default: 'var(--c_subOneDark)',
            name: '--notification-info-background',
        },
        {
            default: 'var(--c_subOneLighter)',
            name: '--notification-info-color',
        },
        {
            default: ' solid 1px var(--c_subTwoMain)',
            name: '--notification-warning-border',
        },
        {
            default: 'var(--c_subTwoDark)',
            name: '--notification-warning-background',
        },
        {
            default: 'var(--c_subTwoLight)',
            name: '--notification-warning-color',
        },
        {
            default: 'solid 1px var(--c_primaryLighter)',
            name: '--notification-critical-border',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--notification-critical-background',
        },
        {
            default: 'var(--c_primaryLighter)',
            name: '--notification-critical-color',
        },
        {
            default: 'solid 1px var(--c_secondaryLighter)',
            name: '--notification-success-border',
        },
        {
            default: 'var(--c_secondaryDark)',
            name: '--notification-success-background',
        },
        {
            default: 'var(--c_secondaryLighter)',
            name: '--notification-success-color',
        },
        {
            default: '0 0 calc(var(--s5) + 120px)',
            name: '--notification-callout-flex',
        },
        {
            default: 'var(--s0) var(--s2)',
            name: '--notification-callout-padding',
        },
        {
            default: 'var(--s0)',
            name: '--notification-callout-h5-size',
        },
    ];
}
