/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TipSlots {
    public tipCols = [
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
    ];

    public tipSlots = [
        {
            description: 'Set what you want to trigger the tip.',
            name: 'trigger',
            value: 'HTML or other components',
        },
        {
            description: 'Set the contents of the tip.',
            name: 'content',
            value: 'HTML or other components',
        },
    ];
}
