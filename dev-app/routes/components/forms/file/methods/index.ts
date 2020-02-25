/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FileMethods {
    public formFileCols = [
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
    ];

    public formFileMethods = [
        {
            description: 'Function to use for uploading the file.',
            name: 'upload',
            value: 'function',
        },
        {
            description: 'Function to fire when the show-reset is true and Reset button is clicked.',
            name: 'on-reset',
            value: 'function',
        },
    ];

    public resetClicked() {
        alert('Clicked');
    }
}
