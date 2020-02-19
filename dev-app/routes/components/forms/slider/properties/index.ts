/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SliderProperties {
    public vFormSliderOutput = 2;

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
        {
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formSliderProperties = [
        {
            description: 'Set the text for the error message',
            name: 'error-msg',
            value: '',
        },
        {
            default: '4',
            description: 'Set how many increments you want in the slider. It is zero based.',
            name: 'increments',
            value: 'number',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            description: 'Value the input puts out.',
            name: 'slider-value',
            value: 'number',
        },
        {
            description: 'Time before an update bubbles back up.',
            name: 'debounce-time',
            value: 'number',
        },
        {
            description: 'Set the state of the input.',
            name: 'state',
            value: 'error | disabled | hidden',
        },
    ];
}
