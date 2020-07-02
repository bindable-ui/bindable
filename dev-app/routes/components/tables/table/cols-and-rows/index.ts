/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@autoinject()
export class TableColsRows {
    public tableCols;
    public tableProperties;
    public basicCols;
    public basicRows;
    public colsCols;
    public colsRows;
    public rowsCols;
    public rowsRows;

    constructor() {
        this.tableCols = [
            {
                _class: 'code',
                colClass: 't215',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                _class: 'code',
                colClass: 't270',
                colHeadName: 'value',
                colHeadValue: 'Value',
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
            },
        ];

        this.tableProperties = [
            {
                description: 'A list of objects that hold the data for each col in your table.',
                name: 'cols',
                value: 'Array of objects',
            },
            {
                description: 'A list of objects that define data for each row in your table.',
                name: 'rows',
                value: 'Array of objects',
            },
        ];

        this.basicCols = [
            {
                colClass: 't270',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
            },
            {
                colClass: 't85',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.basicRows = [
            {
                gender: 'Male',
                name: 'Luke Skywalker',
                ship: 'X-Wing',
            },
            {
                gender: 'Male',
                name: 'Han Solo',
                ship: 'M.Falcon',
            },
            {
                gender: 'Male',
                name: 'Fin',
                ship: 'M. Falcon',
            },
            {
                gender: 'Female',
                name: 'Rey',
                ship: 'M. Falcon',
            },
            {
                gender: 'Male',
                name: 'Yoda',
                ship: 'Any',
            },
        ];

        this.colsCols = [
            {
                _class: 'code',
                colClass: 't270',
                colHeadName: 'key',
                colHeadValue: 'Key',
            },
            {
                _class: 'code',
                colClass: 't450',
                colHeadName: 'value',
                colHeadValue: 'Value',
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
            },
        ];

        this.colsRows = [
            {
                description: 'Set a class for specific use cases.',
                key: '_class',
                value: 'textInput, monospaced, alighRight, active, bgHealthy, bgWarning, bgCritical, ' +
                'bgInfo, bgProcess, footer, dragCheck, button',
            },
            {
                description: 'This will set a width on a column. At least one column needs to be left blank to ' +
                'take the extra space.',
                key: 'colClass',
                value: 't30, t40, t50, t65, t75, t85, t90, t105, t120, t150, t175, t190, t215, t240, t270, t350, t450',
            },
            {
                description: 'Allows you to set a function to fire on click of a cell in a column.',
                key: 'colAction',
                value: '() => this.someFunction',
            },
            {
                description: 'Name of the column.',
                key: 'colHeadName',
                value: 'string',
            },
            {
                description: 'Display name of the column.',
                key: 'colHeadValue',
                value: 'string',
            },
            {
                description: 'Use when you are using a horizontal scrolling table. You must set this on each col for' +
                ' the scrolling to work. This is the number of pixels the default width of the table is.',
                key: 'colWidth',
                value: 'number',
            },
            {
                description: 'Works with the table property "sortable". This will allow you to set which columns are ' +
                'sortable.',
                key: 'sort',
                value: 'boolean',
            },
            {
                description: 'Works with the table property "sortable". This will allow you to set ' +
                'default sort order for a column.',
                key: 'reverseSort',
                value: 'boolean',
            },
        ];

        this.rowsCols = [
            {
                _class: 'monospaced',
                colClass: 't270',
                colHeadName: 'key',
                colHeadValue: 'Key',
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

        this.rowsRows = [
            {
                description: 'This key will match the value of the "colHeadName" key. It will set the text ' +
                'of the cell. If you use the ' +
                'c-td-image view and viewModel this will be the URL of the image.',
                key: '*',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Action". ' +
                'It will take a custom function to trigger some action (Launch modal, Go to link). ' +
                'Only available for use with the c-td-action view and viewModel.',
                key: '*Action',
                value: 'function',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Alt". ' +
                'When using the c-td-image view and viewModel this will allow you to add alt text to the image. ' +
                'Only available for use with the c-td-image view and viewModel.',
                key: '*Alt',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Changed". ' +
                'It is a listener for keyup events on the c-td-text-input component. ' +
                'See "view and viewModels for more info on c-td-text-input". ' +
                'Only available for use with the c-td-text-input view and viewModel.',
                key: '*Changed',
                value: 'function',
            },

            {
                description: 'This key will match the value of the "colHeadName" key plus the word "ButtonColor". ' +
                'It will set the color of the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonColor',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "ButtonIcon". ' +
                'It will set the icon of the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIcon',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonIconAlign". ' +
                'It will set the icon alignment of the icon in the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIconAlign',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonIconOnly". ' +
                'Set this to true if you have an icon button with not text. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIconOnly',
                value: 'boolean',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonIconSpacing". ' +
                'Set this to a length value to set the space between the icon and the text. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIconSpacing',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonIconSize". ' +
                'It will set the icon size of the icon in the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIconSize',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonIconDir". ' +
                'It will set the icon direction of the icon in the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonIconDir',
                value: 'ltr | rtl',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word' +
                '"ButtonState". ' +
                'It will set the state of the button. ' +
                'See "view and viewModels for more info on c-td-button". ' +
                'Only available for use with the c-td-button view and viewModel.',
                key: '*ButtonState',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Icon". ' +
                'Set the icon to be placed in a cell. ' +
                'Only available for use with the c-td-action and c-td-truncate view and viewModel.',
                key: '*Icon',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "IconSize". ' +
                'Set the size of the icon to be placed in a cell. ' +
                'Only available for use with the c-td-action and c-td-truncate view and viewModel.',
                key: '*IconSize',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "IconAlign". ' +
                'Set the alignment of the icon to be placed in a cell. ' +
                'Only available for use with the c-td-action and c-td-truncate view and viewModel.',
                key: '*IconAlign',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Pill". ' +
                'Set the text of the pill in a cell. You must use the matching c-td-pill view and viewModel. ' +
                'Only available for use with the c-td-pill view and viewModel.',
                key: '*Pill',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "Span". Use this ' +
                'on a cell to allow it span multiple cells. You will also need to set "_strictShow" to true on any ' +
                ' cell using *Span.',
                key: '*Span',
                value: 'number',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipArrowPosition". ' +
                'Sets the "arrow-position" property for the tip. See the tip page for more details. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipArrowPosition',
                value: 'center | rightEdge | leftEdge',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipTriggerIcon". ' +
                'Set the icon that will trigger the tip. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipTriggerIcon',
                value: 'Any Icon Name',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipTriggerIconAlign". ' +
                'Set the icon alignment that will trigger the tip. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipTriggerIconAlign',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipTriggerIconSize". ' +
                'Set the icon size that will trigger the tip. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipTriggerIconSize',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipSide". ' +
                'Sets the "side" property for the tip. See the tip page for more details. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipSide',
                value: 'top | right | bottom | left',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipSize". ' +
                'Sets the "size" property for the tip. See the tip page for more details. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipSize',
                value: 'small | medium | large | xlarge | auto',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipTriggerText". ' +
                'Set what the text will be for the tip trigger. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipTriggerText',
                value: 'string',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word ' +
                '"TipViewModel". ' +
                'Set the path to the .html that will have the contents of the tip. ' +
                'Only available for use with the c-td-tip view and viewModel.',
                key: '*TipViewModel',
                value: 'path to .html file',
            },
            {
                description: 'This key will match the value of the "colHeadName" key plus the word "URL". Use this ' +
                'on a cell to place a link in the cell. ' +
                'This will set the URL of where the link will go. ' +
                'Only available for use with the c-td-action view and viewModel.',
                key: '*URL',
                value: 'number',
            },
            {
                description: 'Set a class for specific use cases.',
                key: '_class',
                value: 'textInput, monospaced, alighRight, active, bgHealthy, bgWarning, bgCritical, bgInfo, ' +
                'bgProcess, footer',
            },
            {
                description: 'This will hide the entire row.',
                key: '_hidden',
                value: 'boolean',
            },
            {
                description: 'This will place a colored bar on the left of the row. Use with "actions".',
                key: '_status',
                value: 'healthy, info, warning, critical, neutral',
            },
            {
                description: 'Set to true when using *Span to hide the unused cells. It will remove all blank cells ' +
                'in the row.',
                key: '_strictShow',
                value: 'boolean',
            },
            {
                description: 'Set on the cell where you need the drag icon and a checkbox. Will also need the ' +
                '"dragCheck" class and c-td-drag-check view and viewModel on the col.',
                key: 'dragCheck',
                value: 'boolean',
            },
            {
                description: 'Set the value of the text input in a cell when you use c-td-text-input.' +
                'Set to an empty string for no value.',
                key: 'textInput',
                value: 'string',
            },
        ];
    }
}
