/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalItemProperties {
    public verticalItemCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't270',
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

    public verticalItemProperties = [
        {
            default: 'false',
            description: 'Use to set a c-nav-vertical-item to be an accordion.',
            name: 'accordion-item',
            value: 'boolean',
        },
        {
            default: 'closed',
            description: 'Use to set an c-nav-vertical-item that is an accorion to be open on load.',
            name: 'accordion-state',
            value: 'open | closed',
        },
        {
            default: 'false',
            description:
                'Use if you would like this element and everything under' +
                ' it to be algned at the bottom of the vertical nav.',
            name: 'align-bottom',
            value: 'boolean',
        },
        {
            description: 'Use to set the href of the nav item.',
            name: 'href',
            value: '',
        },
        {
            description: 'Will place an icon on the right end of the nav item.',
            name: 'icon',
            value: 'Any icon name. Usually "cog"',
        },
        {
            description: 'Use to separate nav links with a divider title.',
            name: 'section-title',
            value: '',
        },
        {
            description: 'Use to set the state of the nav item.',
            name: 'state',
            value: 'active | hidden',
        },
        {
            description: 'Set if you need some descriptive text under the nav item text.',
            name: 'sub-text',
            value: '',
        },
        {
            description: 'Set the text of the nav item.',
            name: 'title',
            value: '',
        },
    ];

    public fireIconFunction() {
        alert('Icon Action Fired.');
    }
}
