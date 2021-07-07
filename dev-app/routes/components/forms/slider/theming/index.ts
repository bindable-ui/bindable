/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class SliderThemeProperties {
    public sliderThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public sliderThemeProperties = [
        {
            default: 'solid 1px var(--c_smoke)',
            name: '--slider-track-border',
            property: 'border',
        },
        {
            default: 'var(--c_gray)',
            name: '--slider-track-background',
            property: 'background',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--slider-track-border-disabled',
            property: 'border',
        },
        {
            default: 'var(--c_ash)',
            name: '--slider-track-background-disabled',
            property: 'background',
        },
        {
            default: 'var(--c_ash)',
            name: '--slider-thumb-border',
            property: 'border',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--slider-thumb-background',
            property: 'background',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--slider-thumb-border-disabled',
            property: 'border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--slider-thumb-background-disabled',
            property: 'background',
        },
    ];
}
