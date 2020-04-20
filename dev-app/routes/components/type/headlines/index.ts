/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class Headlines {
    public h1Cols = [
        {
            _class: 'monospaced',
            colClass: 't175',
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h1Properties = [
        {
            default: 'true',
            description: 'Set to false if you do not want the text to be flush to' +
            'the top of the container.',
            name: 'flush-top',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you would like the text to truncate.',
            name: 'truncate',
            value: 'boolean',
        },
    ];

    public h2Cols = [
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h2Properties = [
        {
            default: 'false',
            description:'Set if you would like the text to truncate.',
            name: 'truncate',
            value: 'boolean',
        },
    ];

    public h3Cols = [
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h3Properties = [
        {
            default: 'false',
            description: 'Set if you need the h3 to truncate.',
            name: 'truncate',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you are using truncate and you need the hover color to be dark.',
            name: 'dark-back',
            value: 'boolean',
        },
    ];

    public h4Cols = [
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h4Properties = [
        {
            description: 'Set if you need to truncate the h4.',
            name: 'truncate',
            value: 'boolean',
        },
    ];

    public h5Cols = [
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
            _class: 'monospaced',
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h5Properties = [
        {
            default: 'inherit',
            description: 'Set if you need the h5 to be a different color.',
            name: 'color',
            value: 'CSS Color',
        },
    ];
}
