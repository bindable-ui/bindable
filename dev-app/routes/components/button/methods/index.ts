/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ButtonMethods {
    public buttonCols = [
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

    public buttonMethods = [
        {
            description: 'The function you want to run when the button is clicked.',
            name: 'action',
            value: 'function',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
