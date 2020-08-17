/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

export class SelectThemeProperties {
    public selectThemeCols = [
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

    public selectThemeProperties = [
        {
            default: 'var(--s3)',
            name: '--select-padding-right',
            property: 'padding-right',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--select-multiple-checked',
            property: 'background',
        },
        {
            default: 'var(--c_asphalt)',
            name: '--select-multiple-load-more-background',
            property: 'background',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h12L5.94 7 0 0z" fill="\%239B9B97"/></svg>\')',
            name: '--select-arrow-svg',
            property: 'background-image',
        },
        {
            default: 'right 10px center',
            name: '--select-arrow-position',
            property: 'background-position',
        },
        {
            default: 'calc(var(--s-1) + 2px)',
            name: '--select2-arrow-top-position',
            property: 'top',
        },
        {
            default: 'var(--s-1)',
            name: '--select2-arrow-right-position',
            property: 'right',
        },
        {
            default: '13px',
            name: '--select2-arrow-width',
            property: 'width',
        },
        {
            default: '10px',
            name: '--select2-arrow-height',
            property: 'height',
        },
        {
            default: 'var(--c_ash)',
            name: '--select2-multiple-choice-background',
            property: 'background-color',
        },
        {
            default: '1px border var(--c_asphalt)',
            name: '--select2-multiple-choice-border',
            property: 'border',
        },
    ];

    public selectThemeProperties2 = [
        {
            default: 'solid 1px var(--c_black)',
            name: '--select2-dropdown-border',
            property: 'border',
        },
        {
            default: 'var(--c_charcoal)',
            name: '--select2-dropdown-background',
            property: 'background',
        },
        {
            default: '8px',
            name: '--select2-dropdown-search-padding',
            property: 'padding',
        },
        {
            default: '6px 10px',
            name: '--select2-dropdown-list-padding',
            property: 'padding',
        },
        {
            default: 'var(--c_ash)',
            name: '--select2-search-background-color',
            property: 'background-color',
        },
        {
            default: 'var(--s-5) var(--s-3) var(--s-4)',
            name: '--select2-search-padding',
            property: 'padding',
        },
    ];
}
