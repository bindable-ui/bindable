/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class GlobalProperties {
    public globalCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public globalProperties = [
        {
            default: 'var(--ff_primary-normal)',
            name: '--body-font-family',
        },
        {
            default: 'var(--c_slate)',
            name: '--body-background',
        },
        {
            default: 'var(--c_white)',
            name: '--body-color',
        },
        {
            default: 'var(--c_smoke)',
            name: '--a-color',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--a-color-hover',
        },
        {
            default: 'var(--c_smoke)',
            name: '--p-default-color',
        },
        {
            default: 'var(--c_primaryMain)',
            name: '--selected-text-background',
        },
        {
            default: 'var(--c_white)',
            name: '--selected-text-color',
        },
        {
            default: '7px',
            name: '--scrollbar_width',
        },
        {
            default: '#7B7B7B',
            name: '--scrollbar_color',
        },
        {
            default: '#222',
            name: '--scrollbar_track_color',
        },
        {
            default: '215px',
            name: '--w_popover',
        },
    ];
}
