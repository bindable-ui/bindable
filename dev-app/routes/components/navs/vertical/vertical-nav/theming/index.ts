/*
Copyright 2020, Verizon Media
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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public navVerticalThemeProperties = [
        {
            default: 'var(--s-2) 0 0',
            name: '--nav-padding',
        },
        {
            default: 'var(--s-2)',
            name: '--nav-last-child-margin-bottom',
        },
        {
            default: 'var(--s0)',
            name: '--nav-bottom-last-child-margin-bottom',
        },
    ];
}
