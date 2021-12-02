/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TimelineBlockThemeProperties {
    public timelineBlockThemeCols = [
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

    public timelineBlockThemeProperties = [
        {
            default: 'solid 1px #444',
            name: '--time-block-border-bottom',
            property: 'border-bottom',
        },
        {
            default: 'var(--c_smoke)',
            name: '--time-color',
            property: 'color',
        },
        {
            default: '12px',
            name: '--time-font-size',
            property: 'font-size',
        },
    ];

    public timelineBlockThemeProperties2 = [
        {
            default: '#00AC3E',
            name: '--current-time-line-color',
            property: 'background',
        },
    ];

    public timelineBlockThemeProperties3 = [
        {
            default: 'var(--c_slate)',
            name: '--timeline-week-dates-background',
            property: 'background',
        },
        {
            default: 'solid 1px #444',
            name: '--timeline-week-dates-border-bottom',
            property: 'border-bottom',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--timeline-week-dates-link-color',
            property: 'color',
        },
        {
            default: 'var(--c_smoke)',
            name: '--timeline-week-dates-link-color-hover',
            property: 'color',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--timeline-week-dates-first-border-right',
            property: 'border-right',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--timeline-week-content-border-left',
            property: 'border-left',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--timeline-week-dates-today-color',
            property: 'background',
        },
    ];

    public timelineBlockThemeProperties4 = [
        {
            default: '730px',
            name: '--timeline-month-min-width',
            property: 'min-width',
        },
        {
            default: 'solid 1px var(--c_slate)',
            name: '--timeline-month-border',
            property: 'border',
        },
        {
            default: 'var(--c_white)',
            name: '--timeline-month-header-color',
            property: 'color',
        },
        {
            default: 'var(--s-4) var(--s-5)',
            name: '--timeline-month-header-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_soot)',
            name: '--timeline-month-header-background',
            property: 'background',
        },
        {
            default: '9rem',
            name: '--timeline-month-item-height',
            property: 'height',
        },
        {
            default: 'var(--s-5) var(--s-2)',
            name: '--timeline-month-item-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--timeline-month-item-background',
            property: 'background',
        },
        {
            default: 'var(--c_smoke)',
            name: '--timeline-month-item-active-month',
            property: 'color',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--timeline-month-item-no-active-month',
            property: 'color',
        },
        {
            default: 'var(--c_white)',
            name: '--timeline-month-item-today-color',
            property: 'color',
        },
        {
            default: 'solid calc(var(--s-5) - 2px) var(--c_primaryMain)',
            name: '--timeline-month-item-today-border-bottom',
            property: 'border-bottom',
        },
    ];
}
