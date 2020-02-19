/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Notification {
    public notificationCols = [
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public notificationProperties = [
        {
            description: 'Will add a second colymn with content text. Text should be short.',
            name: 'callout-content',
            value: 'string',
        },
        {
            description: 'Will add a second column with headline text. Text should be short.',
            name: 'callout-title',
            value: 'string',
        },
        {
            default: 'warning',
            description: 'Sets the color and icon',
            name: 'type',
            value: 'info | warning | critical | success',
        },
        {
            description: 'Hides if state is hidden.',
            name: 'state',
            value: 'hidden',
        },
    ];
}
