/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class HorizontalItemProperties {
    public horizontalItemCols = [
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
    ];

    public horizontalItemProperties = [
        {
            description: 'Use with a dynamic route or link to an outside URL with this.',
            name: 'href',
            value: '',
        },
        {
            default: '',
            description: 'Set to place an icon at the top right of the nav item.',
            name: 'icon',
            value: 'Any icon value',
        },
        {
            default: 'var(--c_primaryLight)',
            description: 'Use to set the color of the icon.',
            name: 'icon-color',
            value: 'CSS Color',
        },
        {
            default: '',
            description: 'Use if you need to place a link on the right end of the nav.',
            name: 'position',
            value: 'right',
        },
        {
            description: 'If you need the mobile nav in your nav you will need to use route instead of href.',
            name: 'route',
            value: '',
        },
        {
            description: 'Use to set an active state on the nav item.',
            name: 'state',
            value: 'active | hidden',
        },
        {
            description: 'Use to set the text of the link.',
            name: 'title',
            value: '',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        alert('Clicked');
    }
}
