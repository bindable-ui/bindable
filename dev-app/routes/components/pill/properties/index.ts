/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {PLATFORM} from 'aurelia-pal';

export class PillProperties {
    public pillCols = [
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

    public pillProperties = [
        {
            default: 'var(--c_subOneMain)',
            description: 'Set the background color',
            name: 'color',
            value: 'CSS Color',
        },
        {
            default: 'var(--c_white)',
            description: 'Set the text color of the pill',
            name: 'text-color',
            value: 'CSS Color',
        },
        {
            default: 'var(--c_white)',
            description: 'Set the text color for a pill link',
            name: 'link-color',
            value: 'CSS Color',
        },
        {
            default: 'normal',
            description: 'Set an alternate font-weight for the pill text',
            name: 'font-weight',
            value: 'CSS font-weight',
        },
        {
            default: 'inherit',
            description: 'Set an alternate font-family for the pill',
            name: 'font-family',
            value: 'CSS Color',
        },
        {
            description: 'Optional: Set the URL the pill should link to.',
            name: 'href',
            value: 'URL',
        },
        {
            description: 'Set the icon to be in the pill.',
            name: 'icon',
            value: 'Any icon',
        },
        {
            description: 'If using an icon, set an alternate color.',
            name: 'icon-color',
            value: 'CSS Color',
        },
        {
            default: 'ltr',
            description: 'Set the direction of the icon.',
            name: 'icon-dir',
            value: 'ltr | rtl',
        },
        {
            description: 'Sets which direction there the spacing shows up.',
            name: 'spacing',
            value: 'spacingRight | spacingLeft',
        },
    ];

    public pillTableCols = [
        {
            colHeadName: 'name',
            colHeadValue: 'Name',
            view: PLATFORM.moduleName('resources/components/tables/td-contents/c-td-pill/c-td-pill.html'),
            viewModel: PLATFORM.moduleName('resources/components/tables/td-contents/c-td-pill/c-td-pill'),
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
            view: PLATFORM.moduleName('resources/components/tables/td-contents/c-td-pill/c-td-pill.html'),
            viewModel: PLATFORM.moduleName('resources/components/tables/td-contents/c-td-pill/c-td-pill'),
        },
    ];

    public pillTableData = [
        {
            description: 'more text here',
            descriptionPill: 'Desc Pill',
            name: 'stuff here',
            namePill: 'Name Pill',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        window.alert('Clicked');
    }
}
