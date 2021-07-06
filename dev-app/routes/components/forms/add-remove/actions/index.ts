/*
Copyright 2021, Yahoo EdgeCast
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
            description: 'An object with callback functions. More details coming soon.',
            name: 'actions-left',
            value: 'object',
        },
        {
            description: 'An object with callback functions. More details coming soon.',
            name: 'actions-right',
            value: 'object',
        },
    ];
}
