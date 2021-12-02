/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SliderSlots {
    public formSliderColsSlots = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formSliderOptionsSlots = [
        {
            description: 'Use when you need to put a tip next to the label.',
            name: 'tip',
        },
        {
            description: 'Use to place content before the slider.',
            name: 'before',
        },
        {
            description: 'Use to place content after the slider.',
            name: 'after',
        },
    ];
}
