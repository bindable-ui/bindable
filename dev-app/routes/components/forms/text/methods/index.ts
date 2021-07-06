/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TextInputMethods {
    public eventListeners = {
        blur: () => {
            // eslint-disable-next-line no-alert
            alert('focus lost');
        },
    };

    public formTextCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formTextMethods = [
        {
            description: 'The function that will fire when the button in the input field is clicked.',
            name: 'button-action',
            value: 'function',
        },
        {
            description: 'Object containing event listeners to attach to an element',
            name: 'event-listeners',
            value: 'object',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        alert('Clicked');
    }
}
