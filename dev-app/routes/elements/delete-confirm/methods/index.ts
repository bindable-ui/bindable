/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class DeleteConfirmMethods {
    public deleteConfirmCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't190',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public deleteConfirmMethods = [
        {
            description: 'Name of your delete function.',
            name: 'action',
            value: 'function',
        },
    ];

    public testDelete() {
        alert('Delete Function Here');
    }
}
