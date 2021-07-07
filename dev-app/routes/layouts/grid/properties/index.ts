/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class GridProperties {
    public gridCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public gridProperties = [
        {
            default: '20rem',
            description: 'Set the min value of the min() function. It might help to see the full CSS line where this will be used: grid-template-columns: repeat(var(--grid-auto-sizing), minmax(min(var(--grid-min-size), 100%), 1fr))',
            name: 'min-size',
            value: 'Any length value. (80ch, 5rem, 250px)',
        },
        {
            default: 'var(--s3)',
            description: 'Set the gap size between grid items.',
            name: 'gap',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'auto-fit',
            description: 'Set how you want to fill extra space on a row.' +
            ' auto-fill will fill the extra space with blank slots.' +
            ' auto-fit will collapse extra slots and allow others to fill the empty space.',
            name: 'auto-sizing',
            value: 'auto-fit | auto-fill',
        },
        {
            default: 'false',
            description: 'Set to true if there is content loading in the grid.',
            name: 'is-loading',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you are going to be loading more contents into the grid when scrolling hits the bottom.',
            name: 'scroll-to-load',
            value: 'boolean',
        },
    ];
}
