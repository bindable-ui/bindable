/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class MoneyFormatInfo {
    public moneyFormatCols = [
        {
            _class: 'monospaced',
            colHeadName: 'money1',
            colHeadValue: 'Money 1',
            valueConverter: 'moneyFormat',
        },
        {
            _class: 'monospaced',
            colHeadName: 'money2',
            colHeadValue: 'Money 2',
            valueConverter: 'moneyFormat',
        },
        {
            _class: 'monospaced',
            colHeadName: 'money3',
            colHeadValue: 'Money 3',
            valueConverter: 'moneyFormat',
        },
    ];

    public moneyFormatRows = [
        {
            money1: 5,
            money2: 2.4,
            money3: 1298.44,
        },
    ];
}
