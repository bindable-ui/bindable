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

    public h1ThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h1ThemeProperties = [
        {
            default: '-0.55rem',
            name: '--h1-margin-top',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--h1-font-family',
        },
        {
            default: 'var(--s3)',
            name: '--h1-font-size',
        },
        {
            default: 'var(--s4)',
            name: '--h1-truncate-min-height',
        },
        {
            default: 'var(--s-1)',
            name: '--h1-truncate-padding-right',
        },
        {
            default: 'var(--c_slate)',
            name: '--h1-truncate-hover-background',
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

    public h2ThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h2ThemeProperties = [
        {
            default: '-0.55rem',
            name: '--h2-margin-top',
        },
        {
            default: 'var(--ff_secondary-normal)',
            name: '--h2-font-family',
        },
        {
            default: 'var(--s2)',
            name: '--h2-font-size',
        },
        {
            default: 'var(--s3)',
            name: '--h2-truncate-min-height',
        },
        {
            default: 'var(--s-1)',
            name: '--h2-truncate-padding-right',
        },
        {
            default: 'var(--c_slate)',
            name: '--h2-truncate-hover-background',
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

    public h3ThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h3ThemeProperties = [
        {
            default: '-0.4rem',
            name: '--h3-margin-top',
        },
        {
            default: 'var(--ff_secondary-normal)',
            name: '--h3-font-family',
        },
        {
            default: 'var(--s1)',
            name: '--h3-font-size',
        },
        {
            default: 'var(--c_subOneMain)',
            name: '--h3-link-color',
        },
        {
            default: ' var(--s2)',
            name: '--h3-truncate-min-height',
        },
        {
            default: 'var(--c_slate)',
            name: '--h3-truncate-hover-background',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--h3-truncate-dark-hover-background',
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

    public h4ThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h4ThemeProperties = [
        {
            default: '-0.1rem',
            name: '--h4-margin-top',
        },
        {
            default: 'var(--ff_primary-normal)',
            name: '--h3-font-family',
        },
        {
            default: 'initial',
            name: '--h3-font-size',
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
            default: '',
            description: 'Set if you need the h5 to be a different color.',
            name: 'color',
            value: 'smoke',
        },
    ];

    public h5ThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public h5ThemeProperties = [
        {
            default: '-0.55rem',
            name: '--h5-margin-top',
        },
        {
            default: 'var(--ff_secondary-normal)',
            name: '--h5-font-family',
        },
        {
            default: 'var(--s0)',
            name: '--h5-font-size',
        },
        {
            default: 'var(--c_smoke)',
            name: '--h5-color-smoke',
        },
    ];
}
