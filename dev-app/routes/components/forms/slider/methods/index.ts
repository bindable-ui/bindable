/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SliderMethods {
    public formSliderCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formSliderMethods = [
        {
            description: 'Function to fire when the slider changes.',
            name: 'on-change',
            value: 'function',
        },
    ];

    public changed() {
        alert('changed');
    }
}
