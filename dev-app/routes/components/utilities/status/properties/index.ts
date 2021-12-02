/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class StatusProperties {
    public statusCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public statusProperties = [
        {
            default: 'var(--c_secondaryMain)',
            description: 'Set the color of the dot',
            name: 'color',
            value: 'CSS Color',
        },
        {
            description: 'Set to a URL to go to if clicked.',
            name: 'href',
            value: 'string',
        },
        {
            default: 'slow',
            description: 'Set the speed of the pulse',
            name: 'pulse-speed',
            value: 'slow | medium | fast',
        },
        {
            default: 'auto',
            description:
            'Set to a number with a unit type.' +
            ' This will set the size of when the content should truncate. Ex "200px"',
            name: 'max-width',
            value: 'string',
        },
        {
            default: 'false',
            description: 'Set if you want the click to open a new window.',
            name: 'target-new',
            value: 'boolean',
        },
        {
            description: 'Set to define what the text is next to the dot.',
            name: 'text',
            value: 'string',
        },
    ];
}
