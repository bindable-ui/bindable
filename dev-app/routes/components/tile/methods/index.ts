/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TileMethods {
    public tileCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public tileMethods = [
        {
            description: 'Set a function to run on click of the tile.',
            name: 'action',
            value: 'function',
        },
        {
            description: 'Set a function to run on click of the checkbox.',
            name: 'check-action',
            value: 'function',
        },
    ];

    public action() {
        // eslint-disable-next-line no-alert
        window.alert('Tile clicked.');
    }

    public checkAction() {
        // eslint-disable-next-line no-alert
        window.alert('Tile checkbox checked.');
    }
}
