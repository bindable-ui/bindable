/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class AddRemoveProperties {
    public addRemoveCols = [
        {
            _class: 'monospaced',
            colClass: 't215',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colClass: 't105',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public addRemoveProperties = [
        {
            default: 'false',
            description:
            'Set if you are loading more options into the multiple select box on the left.' +
            ' multiple must be true.',
            name: 'is-loading-more-left',
            value: 'boolean',
        },
        {
            default: 'false',
            description:
            'Set if you are loading more options into the multiple select box on the right.' +
            ' multiple must be true.',
            name: 'is-loading-more-right',
            value: 'boolean',
        },
        {
            default: 'false',
            description:
            'Set if you are loading options into the multiple select box on the left while the page loads.' +
            ' multiple must be true.',
            name: 'is-loading-left',
            value: 'boolean',
        },
        {
            default: 'false',
            description:
            'Set if you are loading options into the multiple select box on the right while the page loads.' +
            ' multiple must be true.',
            name: 'is-loading-right',
            value: 'boolean',
        },
        {
            description: 'Use to set the array values of the left section.',
            name: 'list-left',
            value: 'array',
        },
        {
            description: 'Use to set the array values of the right section.',
            name: 'list-right',
            value: 'string',
        },
        {
            default: 'false',
            description: 'Set if you need to allow reording of the list on the right.',
            name: 'reorder',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you would like to enable loading more when scrolling down on the left select.',
            name: 'scroll-to-load-left',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you would like to enable loading more when scrolling down on the right select.',
            name: 'scroll-to-load-right',
            value: 'boolean',
        },
        {
            description: 'Get/remove the search text on the left side.',
            name: 'search-text-left',
            value: 'string',
        },
        {
            description: 'Get/remove the search text on the right side.',
            name: 'search-text-right',
            value: 'string',
        },
        {
            default: 'false',
            description:
            'Set to true if you just use an array for the select values instead of an array of objects.',
            name: 'simple',
            value: 'boolean',
        },
        {
            description: 'Set the status.',
            name: 'state',
            value: 'disabled | hidden',
        },
        {
            description: 'Set when you need a tip on the left multiselect.',
            name: 'tip-left-content',
            value: 'string',
        },
        {
            description: 'Set when you need a tip on the right multiselect.',
            name: 'tip-right-content',
            value: 'string',
        },
        {
            default: 'Left Title',
            description: 'Use to set the title of the left section.',
            name: 'title-left',
            value: 'string',
        },
        {
            default: 'Right Title',
            description: 'Use to set the title of the right section.',
            name: 'title-right',
            value: 'string',
        },
    ];

    public leftVals = [
        {
            text: '1',
            value: 1,
        },
        {
            text: '2',
            value: 2,
        },
    ];

    public rightVals = [
        {
            text: '3',
            value: 3,
        },
        {
            text: '4',
            value: 4,
        },
    ];
}
