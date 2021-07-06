/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SpinnerThemeProperties {
    public spinnerThemeCols = [
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

    public spinnerThemeProperties = [
        {
            default: 'var(--c_white)',
            name: '--spinner-color',
            property: 'border-top-color',
        },
        {
            default: 'unset',
            name: '--spinner-border',
            property: 'border',
        },
        {
            default: 'var(--s-5)',
            name: '--spinner-border-radius',
            property: 'border-radius',
        },
        {
            default: 'var(--c_asphalt)',
            name: '--spinner-background',
            property: 'background',
        },
    ];
}
