/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class AddRemoveActions {
    public addRemoveCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public addRemoveActions = [
        {
            description: 'Set a function to fire when the select contents changes on the left side.',
            name: 'actions-left',
            value: 'function',
        },
        {
            description: 'Set a function to fire when the select contents changes on the right side.',
            name: 'actions-right',
            value: 'function',
        },
    ];
}
