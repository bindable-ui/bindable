/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SidebarProperties {
    public sidebarCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
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
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public sidebarProperties = [
        {
            default: '65%',
            description: 'Set the min width of the content area.' +
            ' If the size gets smaller then than this value the layout with stack.',
            name: 'content-min',
            value: 'Any length value. (px or rem unit required when scrolling prop is true.)',
        },
        {
            default: 'false',
            description: 'Set if you need scrolling on the sidebar and content areas.',
            name: 'scrolling',
            value: 'boolean',
        },
        {
            default: 'left',
            description: 'Set which side you want the sidebar on.',
            name: 'side',
            value: 'left | right',
        },
        {
            default: 'unset',
            description: 'Set the background of the sidebar.',
            name: 'side-background',
            value: 'CSS Color or Background Image',
        },
        {
            default: 'initial',
            description: 'Set the size of the sidebar. Leave blank for no set size.',
            name: 'side-width',
            value: 'Any length value. (px or rem unit required when scrolling prop is true.)',
        },
        {
            default: 'var(--s3)',
            description: 'Set the spacing between the sidebar and the content.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            description: 'When you have a scrolling sidebar in a scrolling sidebar it it often useful to ' +
            'define when you want them to stop scrolling and stack on top of each other. ' +
            'Set this property to tell the component when to start stacking. It is based off the browswer ' +
            'window width. If this is not set and you are using the scrolling prop, when to stack is ' +
            'calculated from content-min and side-width.',
            name: 'when-to-stack',
            value: 'Any length value (50rem, 1000px)',
        },
    ];
}
