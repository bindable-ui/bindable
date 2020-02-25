/*
Copyright 2020, Verizon Media
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
            colClass: 't350',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public sliderThemeProperties = [
        {
            default: 'solid 1px var(--c_smoke)',
            name: '--slider-track-border',
        },
        {
            default: 'var(--c_gray)',
            name: '--slider-track-background',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--slider-track-border-disabled',
        },
        {
            default: 'var(--c_ash)',
            name: '--slider-track-background-disabled',
        },
        {
            default: 'var(--c_ash)',
            name: '--slider-thumb-border',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--slider-thumb-background',
        },
        {
            default: 'solid 1px var(--c_gray)',
            name: '--slider-thumb-border-disabled',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--slider-thumb-background-disabled',
        },
    ];
}
