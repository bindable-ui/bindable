/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class HorizontalNav {
    public horizontalCols = [
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
            colClass: 't175',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public horizontalProperties = [
        {
            default: 'var(--c_darkGray)',
            description: 'Set the background color of the nav.',
            name: 'background-color',
            value: 'CSS Color',
        },
        {
            default: 'center',
            description: 'Set the vertical alignment.',
            name: 'align',
            value: 'center | start | end | stretch | baseline',
        },
        {
            default: 'start',
            description: 'Set the horizontal alignment.',
            name: 'justify',
            value: 'center | start | end | between | around',
        },
        {
            default: 'false',
            description: 'Set if you need there to be a mobile nav trigger on the nav.',
            name: 'mobile',
            value: 'boolean',
        },
        {
            default: 'var(--s1)',
            description: 'Set the spacing between cluster items.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: 'medium',
            description: 'Set the vertical padding of the <a> tags in the nav.',
            name: 'size',
            value: 'medium | small | tiny',
        },
        {
            description: 'Hide the nav if you need.',
            name: 'state',
            value: 'hidden',
        },
        {
            default: 'unset',
            description: 'Set the text transform for the nav.',
            name: 'text-transform',
            value: 'capitalize | uppercase | lowercase | inital | inherit | unset',
        },
    ];
}
