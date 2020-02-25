/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class IconThemeProperties {
    public iconThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public iconThemeProperties = [
        {
            default: 'var(--s-3)',
            name: '--icon-itzy',
        },
        {
            default: 'var(--s-2)',
            name: '--icon-tiny',
        },
        {
            default: 'var(--s-1)',
            name: '--icon-small',
        },
        {
            default: 'var(--s0)',
            name: '--icon-medium',
        },
        {
            default: 'var(--s1)',
            name: '--icon-large',
        },
        {
            default: 'var(--s2)',
            name: '--icon-huge',
        },
    ];
}
