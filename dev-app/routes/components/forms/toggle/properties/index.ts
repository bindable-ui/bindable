/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ToggleProperties {
    public vToggle1Output = true;
    public vToggle1BOutput = true;

    public formToggleCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formToggleProperties = [
        {
            description: 'Sets the value of the toggle.',
            name: 'checked-value',
            value: 'String',
        },
        {
            description: 'Adding this will make sure clicking on the label will toggle/untoggle.',
            name: 'id',
            value: '',
        },
        {
            description: 'Sets the state of the toggle.',
            name: 'state',
            value: 'disabled | hidden',
        },
    ];
}
