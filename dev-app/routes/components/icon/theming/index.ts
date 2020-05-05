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
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Main Theme',
        },
    ];

    public iconThemeProperties = [
        {
            default: 'var(--s-3)',
            name: '--icon-itzy',
            property: 'width, height',
        },
        {
            default: 'var(--s-2)',
            name: '--icon-tiny',
            property: 'width, height',
        },
        {
            default: 'var(--s-1)',
            name: '--icon-small',
            property: 'width, height',
        },
        {
            default: 'var(--s0)',
            name: '--icon-medium',
            property: 'width, height',
        },
        {
            default: 'var(--s1)',
            name: '--icon-large',
            property: 'width, height',
        },
        {
            default: 'var(--s2)',
            name: '--icon-huge',
            property: 'width, height',
        },
    ];
}
