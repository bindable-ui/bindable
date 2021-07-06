/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TileReplaceableParts {
    public tileCols = [
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public tileReplaceableParts = [
        {
            description: 'Set what you want to go in the left tip.',
            name: 'tip-content-left',
            value: 'Text or other components',
        },
        {
            description: 'Set what you want to go in the right tip.',
            name: 'tip-content-right',
            value: 'Text or other components',
        },
    ];
}
