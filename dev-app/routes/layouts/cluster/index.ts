/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ClusterProperties {
    public clusterCols = [
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

    public clusterProperties = [
        {
            default: 'center',
            description: 'Set the vertical alignment.',
            name: 'align',
            value: 'center | flex-start | flex-end | stretch | baseline',
        },
        {
            default: 'flex-start',
            description: 'Set the horizontal alignment.',
            name: 'justify',
            value: 'center | flex-start | flex-end | space-between | space-around',
        },
        {
            default: 'var(--s1)',
            description: 'Set the spacing between cluster items.',
            name: 'spacing',
            value: 'Any length value (1rem, 15px).' +
            ' It is advised that you use the Core Scale Properties. ex: var(--s1).',
        },
        {
            description: 'overflow: hidden is used on the l-cluster. This could cause problems for your layout. When that happens use spacing-direction to set which direction you need to space out your cluster items without the overflow: hidden;',
            name: 'spacing-direction',
            value: 'left | right',
        },
        {
            default: false,
            description: 'Set if you have content in the cluster that needs could be truncated. If set to true wrap will be set to false. Must use spacing-direction if set to true.',
            name: 'truncate-content',
            value: 'boolean',
        },
        {
            default: true,
            description: 'Set if you want contents of the cluster to not wrap.',
            name: 'wrap',
            value: 'boolean',
        },
    ];
}
