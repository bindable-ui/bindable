/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NavVerticalSlidingThemeProperties {
    public navVerticalSlidingThemeCols = [
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

    public navVerticalSlidingThemeProperties = [
        {
            default: 'var(--c_darkGray)',
            name: '--nav-sliding-background',
            property: 'background-color',
        },
        {
            default: '10px 24px 0',
            name: '--nav-sliding-trigger-container-margin',
            property: 'margin',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--nav-sliding-trigger-font-family',
            property: 'font-family',
        },
        {
            default: 'var(--s-2)',
            name: '--nav-sliding-trigger-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--c_lightGray)',
            name: '--nav-sliding-trigger-hover-color',
            property: 'color',
        },
    ];
}
