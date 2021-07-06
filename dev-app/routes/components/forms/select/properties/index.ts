/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {observable} from 'aurelia-framework';

export class SelectProperties {
    public formSelectCols = [
        {
            _class: 'monospaced',
            colClass: 't190',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't85',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formSelectProperties = [
        {
            description: 'Set the text for the error message',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Set the text for the warning message',
            name: 'warning-msg',
            value: '',
        },
        {
            default: 'false',
            description: 'Set if you are loading more options into a multiple select box. multiple must be true.',
            name: 'is-loading-more',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you are loading many options into a multiple select box. multiple must be true.',
            name: 'is-loading',
            value: 'boolean',
        },
        {
            description: 'Set the text for the label. If left off no label will be placed.',
            name: 'label',
            value: '',
        },
        {
            default: 'false',
            description: 'Set if you need a multiselect',
            name: 'multiple',
            value: 'boolean',
        },
        {
            description:
            'This will generate the <option> tags. See example below. If simple is true you can use an Array.',
            name: 'options.bind',
            value: 'array of objects | array',
        },
        {
            default: 'false',
            description: 'Set on a multiple if you need to reorder the contents.',
            name: 'reorder',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Set if you would like to enable loading more when scrolling down.',
            name: 'scroll-to-load',
            value: 'boolean',
        },
        {
            default: 'false',
            description:
            'Set if you need a search input above the multiselect. Multiselect must be true for this to work.',
            name: 'search',
            value: 'boolean',
        },
        {
            description: 'Place to store/get the search text value.',
            name: 'search-text',
            value: 'string',
        },
        {
            description: 'This is where you will store the value of the selected item(s).',
            name: 'selectValue',
            value: 'array',
        },
        {
            description:
            'Set to true if you just use an array for the select values instead of an array of objects.',
            name: 'simple',
            value: 'boolean',
        },
        {
            description: 'Set the form in a specific state',
            name: 'state',
            value: 'error | warning | disabled | hidden',
        },
        {
            default: 'false',
            description:
            'Set if you want to enable Select2. Select2 is a plugin that allows for fuzzy search of the <options> within the <select>. It also has multiple and tagging support.',
            name: 'enable-select2',
            value: 'boolean',
        },
        {
            default: 'false',
            description:
            'When searching if no result is found and enter is pressed a new item will be added to the select.',
            name: 'select2-tags',
            value: 'boolean',
        },
        {
            default: 'false',
            description: 'Allow clearing the select out.',
            name: 'select2-allow-clear',
            value: 'boolean',
        },
        {
            default: '0',
            description: 'Cap the max amount of items that can be selected. 0 means no limit.',
            name: 'select2-max-input',
            value: 'number',
        },
        {
            default: 'Search',
            description: 'Set the text of the search placeholder.',
            name: 'select2-placeholder',
            value: 'string',
        },
    ];

    public testOptions = [
        {
            text: 'Value 1',
            value: 'value1',
        },
        {
            text: 'Value 2',
            value: 'value2',
        },
        {
            text: 'Value 3',
            value: 'value3',
            disabled: true,
        },
        {
            text: 'Value 4',
            value: 'value4',
        },
        {
            text: 'Value 5',
            value: 'value5',
        },
    ];

    public testSimpleOptions = ['Value 1', 'Value 2', 'Value 3'];
    public testSelectValues = [];
    public testSelect2 = '';

    @observable
    select2Updated = 0;

    select2UpdatedChanged(_val, oldVal) {
        if (!_.isUndefined(oldVal)) {
            console.log('Select2 changed');
        }
    }
}
