/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TimelineActions {
    public timelineActionsCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public timelineActions = [
        {
            description: 'A function to lazy load items when scrolling to the top of the timeline on day view.',
            name: 'scrollTop',
            value: 'function',
        },
        {
            description: 'A function to lazy load items when scrolling to the bottom of the timeline on day view.',
            name: 'scrollBottom',
            value: 'function',
        },
    ];
}
