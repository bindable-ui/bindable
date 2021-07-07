/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CountInfo {
    public countCols = [
        {
            colClass: 't150',
            colHeadName: 'count',
            colHeadValue: 'Total Count',
            valueConverter: 'count',
        },
    ];

    public countRows = [
        {
            count: ['something', 'something else', 'last thing'],
        },
    ];
}
