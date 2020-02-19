/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as moment from 'moment';

export class TimelineProperties {
    public timelineCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'type',
            colHeadValue: 'Type',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public timelineProperties = [
        {
            default: 'false',
            description: 'Timeline is loading or not',
            name: 'isLoading',
            type: 'boolean',
        },
        {
            default: 'false',
            description: 'Lazy loading data from the top',
            name: 'isLoadingTop',
            type: 'boolean',
        },
        {
            default: 'false',
            description: 'Lazy loading data from the bottom',
            name: 'isLoadingBottom',
            type: 'boolean',
        },
        {
            default: 'null',
            description: 'Selected ISO Date',
            name: 'date',
            type: 'string',
        },
        {
            default: 1,
            description: 'Number of days to display (for "week" and "month" views)',
            name: 'days',
            type: 'number',
        },
        {
            default: 'day',
            description: 'What view to display: "day", "week", "month"',
            name: 'timeView',
            type: 'string',
        },
        {
            default: 2,
            description: 'Zoom level on "day" view',
            name: 'zoomLevel',
            type: 'number',
        },
        {
            default: '[]',
            description: 'Array of time entries',
            name: 'entries',
            type: 'ITimeEntryBasic[]',
        },
        {
            default: '{}',
            description: 'Actions object',
            name: 'actions',
            type: 'ITimelineActions',
        },
        {
            default: 'null',
            description: 'Start displaying time blocks at this time. Format: "0700", "07", "7", "0730", "730", ect.',
            name: 'startTime',
            type: 'string',
        },
        {
            default: 'null',
            description: 'End displaying time blocks at this time. Same format as above.',
            name: 'endTime',
            type: 'string',
        },
        {
            default: 'null',
            description: 'Time offset from beginning of day. Not compatible with startTime/endTime. Same format as above.',
            name: 'offsetTime',
            type: 'string',
        },
        {
            default: 1,
            description: 'Number of days being displayed from lazy-loading. Only on "day" view.',
            name: 'scrollDays',
            type: 'number',
        },
        {
            default: 'false',
            description: 'Automatically "snap" to a close time entry to create a new one with no gap.Number of days being displayed from lazy-loading. Only on "day" view.',
            name: 'snapAdd',
            type: 'boolean',
        },
        {
            default: '() => false',
            description: 'Callback to determine if a click on the timeline should prevent adding a new entry.',
            name: 'preventCreate',
            type: '(isoString: string) => boolean',
        },
        {
            default: 'null',
            description: 'View to compose when editing an individual entry.',
            name: 'editEntryViewModel',
            type: 'string',
        },
        {
            default: 'null',
            description: 'View to compose when adding a new time entry.',
            name: 'newEntryViewModel',
            type: 'string',
        },
    ];

    public timelineEntriesCols = [
        {
            _class: 'monospaced',
            colHeadName: 'key',
            colHeadValue: 'Key',
        },
        {
            _class: 'monospaced',
            colHeadName: 'value',
            colHeadValue: 'Example Value',
        },
        {
            _class: 'monospaced',
            colHeadName: 'type',
            colHeadValue: 'Type',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public timelineEntriesRows = [
        {
            description: 'Alternate text value to show in place of time when displaying entry (optional).',
            key: 'altTime',
            value: 'Started at 12:05AM.',
            type: 'string'
        },
        {
            description: 'Background color of the time entry (optional).',
            key: 'background',
            value: 'blue',
            type: 'CSS color'
        },
        {
            description: 'Font color of the time entry (optional).',
            key: 'color',
            value: 'white',
            type: 'CSS color'
        },
        {
            description: 'Duration of entry in seconds.',
            key: 'duration',
            value: 1320,
            type: 'number'
        },
        {
            description: 'Array of icon names. Up to two are displayed (optional).',
            key: 'icons',
            value: "['time', 'rules']",
            type: 'string[]'
        },
        {
            description: 'The size of the entry on day views (optional).',
            key: 'sizeDay',
            value: 'expandable | small',
            type: 'string'
        },
        {
            description: 'The size of the entry on week views (optional).',
            key: 'sizeWeek',
            value: 'expandable | small',
            type: 'string'
        },
        {
            description: 'The start of the entry in ISOString format.',
            key: 'start',
            value: 'moment().toISOString()',
            type: 'ISOString'
        },
        {
            description: 'The end of the entry in ISOString format (optional).',
            key: 'end',
            value: 'moment().toISOString()',
            type: 'ISOString'
        },
        {
            description: 'Title of the time entry',
            key: 'title',
            value: 'A title',
            type: 'string'
        },
    ];
}
