/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalSlidingProperties {
    public verticalSlidingCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't270',
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

    public verticalSlidingProperties = [
        {
            default: 'false',
            description: 'Set if you need to have something at the bottom of the nav outside the scrolling area.',
            name: 'nav-bottom',
            value: 'boolean',
        },
    ];
}
