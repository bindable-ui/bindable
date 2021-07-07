/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class SwitcherProperties {
    public switcherCols = [
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

    public switcherProperties = [
        {
            default: '',
            description: 'Double the width of an item in the Switcher.',
            name: 'double-width',
            value: 'first | second | third | fourth | fifth',
        },
        {
            default: '',
            description: 'The maximum number of items allowed to appear in a line.'
            + 'If the limit is exceeded everytyhing will be on its own line. Leave blank for no limit.',
            name: 'limit',
            value: 'two | three | four | five',
        },
        {
            default: '',
            description: 'Set the spacing between items. Leave blank for no spacing.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '50rem',
            description: 'Set at what point the stacking should occur.' +
            ' The wider the threshold the sooner the stacking will occur.',
            name: 'threshold',
            value: 'Any length value. (80ch, 5rem, 50%, 200px)',
        },
    ];
}
