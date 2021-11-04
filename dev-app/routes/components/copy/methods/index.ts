/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ButtonMethods {
    public methodCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
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
    ];

    public methods = [
        {
            description: 'The function you want to run when the copy button is clicked.',
            name: 'action',
            value: 'function',
        },
    ];

    public onClick = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Promise Resolved Text');
            }, 500);
        });
    }
}
