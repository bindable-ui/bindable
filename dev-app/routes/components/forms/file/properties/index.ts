/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FileProperties {
    public files = null;
    public files1 = null;
    public files2 = null;

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

    public formFileProperties = [
        {
            description: 'Set the text for the error message',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Set if this file picker is going to be for choosing an image.',
            name: 'image-picker',
            value: 'boolean',
        },
        {
            description: 'Set a URL of an image. This image will display above the input field.',
            name: 'image-src',
            value: 'string',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            description: 'Set to true if the image is uploading.',
            name: 'is-uploading',
            value: 'boolean',
        },
        {
            description: 'Set the state of the input.',
            name: 'state',
            value: 'error | disabled | hidden',
        },
        {
            description: 'Show a reset button that calls a callback. Use with on-reset method.',
            name: 'show-reset',
            value: 'boolean',
        },
    ];
}
