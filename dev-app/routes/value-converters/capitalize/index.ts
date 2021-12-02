/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CapitalizeInfo {
    public capitalizeCols = [
        {
            colClass: 't150',
            colHeadName: 'firstName',
            colHeadValue: 'First Name',
            valueConverter: 'capitalize',
        },
        {
            colHeadName: 'lastName',
            colHeadValue: 'Last Name',
            valueConverter: 'capitalize',
        },
        {
            colHeadName: 'eyeColor',
            colHeadValue: 'Eye Color',
        },
    ];

    public capitalizeRows = [
        {
            eyeColor: 'green',
            firstName: 'luke',
            lastName: 'skywalker',
        },
    ];
}
