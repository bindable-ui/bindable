/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalSlots {
    public verticalSlotsCols = [
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public verticalSlots = [
        {
            description: 'Set what you want in your bottom nav.',
            name: 'bottom',
            value: 'c-nav-vertical-item and then other HTML.',
        },
    ];
}
