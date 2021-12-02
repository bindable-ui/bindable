/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CopyProperties {
    public copyCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
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
        {
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public copyProperties = [
        {
            default: '',
            description: 'Set the text you want to be in the copy box.',
            name: 'content',
            value: 'string',
        },
        {
            default: '',
            description: 'Set the label of the copy box.',
            name: 'label',
            value: 'string',
        },
        {
            default: 'false',
            description: 'Set if you want the content in the copy box to be a link.',
            name: 'link',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you want the content in the copy box to wrap.',
            name: 'wrap',
            value: 'boolean',
        },
    ];
}
