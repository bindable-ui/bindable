/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class LabelBoxMethods {
    public labelBoxCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public labelBoxMethods = [
        {
            description: 'Set to a function that you would like to fire when the "Edit" link is clicked.',
            name: 'editing-action',
            value: 'function',
        },
        {
            description: 'Set to a function that you would like to fire when the "Done" link is clicked.',
            name: 'done-editing-action',
            value: 'function',
        },
    ];

    public editing = false;

    public pills = [
        {
            text: 'Live Events',
        },
        {
            text: 'Movies',
        },
        {
            text: 'Cartoons',
        },
        {
            text: 'Sports',
        },
        {
            text: 'Slates',
        },
    ];

    public edit() {
        this.editing = true;
    }

    public done() {
        this.editing = false;
    }

    public iconClick() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
