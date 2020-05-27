/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalProperties {
    public verticalCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't270',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public verticalProperties = [
        {
            default: 'false',
            description: 'Set if you need to have a second nav stuck to the bottom of the col.',
            name: 'nav-bottom',
            value: 'boolean',
        },
        {
            default: 'var(--c_darkGray)',
            description: 'Set the background color of the nav',
            name: 'background-color',
            value: 'CSS Color',
        },
    ];
}
