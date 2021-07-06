/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Dividers {
    public dividerThemeCols = [
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

    public dividerThemeProperties = [
        {
            default: '1px',
            name: '--divider-height',
            property: 'height',
        },
        {
            default: 'var(--c_gray)',
            name: '--divider-background',
            property: 'background-color',
        },
    ];
}
