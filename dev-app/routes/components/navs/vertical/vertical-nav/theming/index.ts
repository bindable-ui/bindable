/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NavVerticalThemeProperties {
    public navVerticalThemeCols = [
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

    public navVerticalThemeProperties = [
        {
            default: 'var(--s-2) 0 0',
            name: '--nav-padding',
            property: 'padding',
        },
        {
            default: 'var(--s-2)',
            name: '--nav-last-child-margin-bottom',
            property: 'margin-bottom',
        },
        {
            default: 'var(--s0)',
            name: '--nav-bottom-last-child-margin-bottom',
            property: 'margin-bottom',
        },
    ];
}
