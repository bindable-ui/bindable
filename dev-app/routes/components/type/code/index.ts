/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Code {
    public typeCodeThemeCols = [
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
            colHeadValue: 'Bindable Theme',
        },
    ];

    public typeCodeThemeProperties = [
        {
            default: 'var(--s-2) var(--s0)',
            name: '--code-padding',
            property: 'padding',
        },
        {
            default: 'solid 1px var(--c_charcoal)',
            name: '--code-border',
            property: 'border',
        },
        {
            default: 'var(--c_asphalt)',
            name: '--code-background',
            property: 'background',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--code-color',
            property: 'color',
        },
    ];
}
