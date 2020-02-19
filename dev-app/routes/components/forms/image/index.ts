/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ImageInput {
    public formImageCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public formImageProperties = [
        {
            description: 'Set the description. This will appear next to the radio button.',
            name: 'description',
            value: 'string',
        },
        {
            description:
            'Set the ID for the radio. Will also match with the label "for" so ' +
            'clicking on the label will select the radio.',
            name: 'id',
            value: 'string',
        },
        {
            description: 'Sets the path to the image.',
            name: 'image-url',
            value: '',
        },
        {
            description:
            'Set the name. Use this when using multiple instances of c-form-image in a group.' +
            'Each name in a group should be the same.',
            name: 'name',
            value: 'string',
        },
        {
            description: 'Set to active when you need to indicate this item in a group is selected.',
            name: 'state',
            value: 'active',
        },
    ];
}
