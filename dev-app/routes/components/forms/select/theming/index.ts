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
    ];
}
