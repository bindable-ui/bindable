/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class BooleanYesNoInfo {
    public booleanYesNoCols = [
        {
            colClass: 't150',
            colHeadName: 'yesNo',
            colHeadValue: 'Yes / No',
            valueConverter: 'booleanYesNo',
        },
    ];

    public booleanYesNoRows = [
        {
            yesNo: true,
        },
        {
            yesNo: false,
        },
    ];
}
