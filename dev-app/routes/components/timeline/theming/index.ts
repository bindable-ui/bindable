/*
Copyright 2020, Verizon Media
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public timelineBlockThemeProperties = [
        {
            default: 'solid 1px #444',
            name: '--time-block-border-bottom',
        },
        {
            default: 'var(--c_smoke)',
            name: '--time-color',
        },
        {
            default: '12px',
            name: '--time-font-size',
        },
    ];

    public timelineBlockThemeProperties2 = [
        {
            default: '#00AC3E',
            name: '--current-time-line-color',
        },
        {
            default: 'rgba(0, 0, 0, 0.5)',
            name: '--loading-spinner-background',
        },
    ];

    public timelineBlockThemeProperties3 = [
        {
            default: 'var(--c_slate)',
            name: '--timeline-week-dates-background',
        },
        {
            default: 'solid 1px #444',
            name: '--timeline-week-dates-border-bottom',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--timeline-week-dates-link-color',
        },
        {
            default: 'var(--c_smoke)',
            name: '--timeline-week-dates-link-color-hover',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--timeline-week-dates-first-border-right',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--timeline-week-content-border-left',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--timeline-week-dates-today-color',
        },
    ];
}
