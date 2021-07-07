/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class StackProperties {
    public stackCols = [
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
            colClass: 't120',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public stackProperties = [
        {
            default: '',
            description: 'Set if you need the stack to be a list. Note that the direct ' +
            'children of the c-stack should have the role="listitem" attribute if a list is used.',
            name: 'list',
            value: 'ordered | unordered',
        },
        {
            default: 'false',
            description: 'Set if you would like the spacing to be set on the children of c-stack children.',
            name: 'recursive',
            value: 'boolean',
        },
        {
            default: 'var(--s3)',
            description: 'Set the spacing between each of the stacked items. Leave blank for no spacing.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            default: '',
            description: 'Set to say after which stacked item you want to split ' +
            'the rest to the other end of the stack.',
            name: 'split-after',
            value: 'one | two | three | four | five',
        },
    ];
}
