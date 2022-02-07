/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {DialogService} from 'aurelia-dialog';
import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import { IDragOptions } from 'index';
import sortDropData from "helpers/sort-drop-data";

@autoinject()
export class TableViews {
    public tableCols;
    public tableViews;
    public textInputCols;
    public textInputData;
    public tdTruncateCols;
    public tdTruncateData;
    public tdImageCols;
    public tdImageData;
    public checkboxCols;
    public checkboxData;
    public dragHandleCols;
    public dragHandleData;
    public dragCheckCols;
    public dragCheckData;
    public pillTableCols;
    public pillTableData;
    public actionTableCols;
    public actionTableData;
    public tipTableCols;
    public tipTableData;
    public buttonCols;
    public buttonData;
    public toggleCols;
    public toggleData;

    public tableActionsSample = {
        getColClass: (row, col) => {
            let cls = col._class || '';
            /* istanbul ignore else */
            if (col.colHeadName === 'drag') {
                cls += ` ${row._status}`;
            }
            return cls;
        },

        getBarColor: (row, col) => {
            const color = row._barColor || '';
            return color;
        },
    };

    public tableActionsSample2 = {
        getColClass: (row, col) => {
            let cls = col._class || '';
            /* istanbul ignore else */
            if (col.colHeadName === 'dragCheck') {
                cls += ` ${row._status}`;
            }
            return cls;
        },

        getBarColor: (row, col) => {
            const color = row._barColor || '';
            return color;
        },
    };

    constructor(public dialogService: DialogService) {
        this.tableCols = [
            {
                _class: 'monospaced',
                colClass: 't215',
                colHeadName: 'name',
                colHeadValue: 'Name',
            },
            {
                _class: 'monospaced',
                colClass: 't150',
                colHeadName: 'type',
                colHeadValue: 'Type',
            },
            {
                _class: 'monospaced',
                colClass: 't550',
                colHeadName: 'value',
                colHeadValue: 'Value',
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
            },
        ];

        this.tableViews = [
            {
                description: 'Set to place c-button in a cell.',
                name: 'c-td-button',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-button/c-td-button" +
                ".html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-button/c-td-button')",
            },
            {
                description: 'Set to place c-toggle and corresponding "Enabled/Disabled" text in a cell.',
                name: 'c-td-button',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-toggle/c-td-toggle" +
                ".html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-toggle/c-td-toggle')",
            },
            {
                description: 'Set to place c-text-input in a cell. Both the view and viewModel must be used. ',
                name: 'c-td-text-input',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-text-input/c-td-text-input" +
                ".html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-text-input/c-td-text-input')",
            },
            {
                description: 'Set to allow the text in a td to truncate.',
                name: 'c-td-truncate',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-truncate/c-td-truncate.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-truncate/c-td-truncate')",
            },
            {
                description: 'Set to place an image in a table cell.',
                name: 'c-td-image',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-image/c-td-image.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-image/c-td-image')",
            },
            {
                description: 'Set to place c-checkbox-input in a cell.',
                name: 'c-td-check',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check')",
            },
            {
                description: 'Set to place c-drag-handle in a cell.',
                name: 'c-drag-handle',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/utilities/c-drag-handle/c-drag-handle.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/utilities/c-drag-handle/c-drag-handle.html')",
            },
            {
                description: 'Set to place c-checkbox-input and a drag in a cell.',
                name: 'c-td-drag-check',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check" +
                ".html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check')",
            },
            {
                description: 'Set to place c-pill in a cell.',
                name: 'c-td-pill',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill')",
            },
            {
                description: 'Set to place something that run an action (go to a link or run a function) in ' +
                    'a cell.',
                name: 'c-td-action',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action')",
            },
            {
                description: 'Set to place a tip in a single cell.',
                name: 'c-td-tip',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip')",
            },
            {
                description: 'Set to place c-form-radio in a cell.',
                name: 'c-td-radio',
                type: 'view',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-radio/c-td-radio.html')",
            },
            {
                description: '',
                name: '',
                type: 'viewModel',
                value: "PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-radio/c-td-radio')",
            },
        ];

        // button example
        this.buttonCols = [
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                _class: 'button',
                colAction: () => window.alert('Clicked'),
                colHeadName: 'action',
                colHeadValue: 'Action',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-button/c-td-button.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-button/c-td-button'),
            },
        ];

        this.buttonData = [
            {
                action: 'Retry',
                ship: 'X-Wing',
            },
            {
                actionButtonColor: 'secondary',
                actionButtonIcon: 'checkmark',
                actionButtonIconAlign: '-0.1em',
                actionButtonIconOnly: true,
                actionButtonIconSize: '1.0em',
                actionButtonIconSpacing: '0',
                actionButtonState: 'disabled',
                ship: 'Y-Wing',
            },
            {
                action: 'Next',
                actionButtonColor: 'neutral',
                actionButtonIcon: 'chevron-right',
                actionButtonIconDir: 'rtl',
                ship: 'Y-Wing',
            },
        ];

        // toggle example
        this.toggleCols = [
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
            {
                colClass: 't240',
                colHeadName: 'status',
                colHeadValue: 'Status',
                colOnChange: () => window.alert('Changed'),
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-toggle/c-td-toggle.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-toggle/c-td-toggle'),
            },
        ];

        this.toggleData = [
            {
                gender: 'Male',
                ship: 'X-Wing',
                status: true,
            },
        ];

        // text input example
        this.textInputCols = [
            {
                _class: 'textInput', // use when putting a text input in a cell
                colClass: 't240',
                colHeadName: 'textInput',
                colHeadValue: 'Text Input',
                view: PLATFORM.moduleName(
                    '@bindable-ui/bindable/components/tables/td-contents/c-td-text-input/c-td-text-input.html',
                ),
                viewModel: PLATFORM.moduleName(
                    '@bindable-ui/bindable/components/tables/td-contents/c-td-text-input/c-td-text-input',
                ),
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.textInputData = [
            {
                gender: 'Male',
                ship: 'X-Wing',
                textInput: '',
            },
            {
                gender: 'Male',
                ship: 'M. Falcon',
                textInput: '',
            },
            {
                gender: 'Male',
                ship: 'Tie Fighter',
                textInput: '',
            },
            {
                gender: 'Female',
                ship: 'M. Falcon',
                textInput: 'Rey',
            },
        ];

        // td truncate example
        this.tdTruncateCols = [
            {
                colClass: 't175',
                colHeadName: 'name',
                colHeadValue: 'Name',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-truncate/c-td-truncate.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-truncate/c-td-truncate'),
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.tdTruncateData = [
            {
                _status: 'healthy',
                gender: 'Male',
                name: 'Luke Skywalker with a lot of text',
                nameIcon: 'info',
                nameIconSize: '1em',
                ship: 'X-Wing',
            },
            {
                gender: 'Male',
                name: 'Han Solo is super cool and all that',
                namePill: 'Pill Left',
                namePillColor: 'var(--c_subTwoMain)',
                ship: 'M. Falcon',
            },
            {
                gender: 'Male',
                name: 'Han Solo is super cool and all that',
                namePill: 'Pill Right',
                namePillColor: 'var(--c_subTwoMain)',
                namePillRight: true,
                ship: 'M. Falcon',
            },
            {
                gender: 'Droid',
                name: JSON.stringify({
                    "Click for full content.": "n/a",
                	"name": "C-3PO",
                	"height": "167",
                	"mass": "75",
                	"hair_color": "n/a",
                	"skin_color": "gold",
                	"eye_color": "yellow",
                	"birth_year": "112BBY",
                	"gender": "n/a",
                	"homeworld": "https://swapi.co/api/planets/1/",
                	"films": [
                		"https://swapi.co/api/films/2/",
                		"https://swapi.co/api/films/5/",
                		"https://swapi.co/api/films/4/",
                		"https://swapi.co/api/films/6/",
                		"https://swapi.co/api/films/3/",
                		"https://swapi.co/api/films/1/"
                	],
                	"species": [
                		"https://swapi.co/api/species/2/"
                	],
                	"vehicles": [],
                	"starships": [],
                	"created": "2014-12-10T15:10:51.357000Z",
                	"edited": "2014-12-20T21:17:50.309000Z",
                	"url": "https://swapi.co/api/people/2/"
                }),
                nameTip: true,
                nameTipSize: 'large',
                ship: 'M. Falcon',
            },
            {
                gender: 'Male',
                name: 'Fin',
                ship: 'Tie Fighter',
            },
            {
                gender: 'Female',
                name: 'Rey',
                ship: 'M. Falcon',
            },
        ];

        // td image example
        this.tdImageCols = [
            {
                colClass: 't150',
                colHeadName: 'image',
                colHeadValue: 'Image',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-image/c-td-image.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-image/c-td-image'),
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
                sort: true,
            },
        ];

        this.tdImageData = [
            {
                description: 'This is a description.',
                image: 'https://picsum.photos/160/90/?random',
                imageAlt: 'Image Alt',
            },
            {
                description: 'This is a description.',
                image: 'https://picsum.photos/160/90/?random',
                imageAlt: 'Image Alt Here',
            },
            {
                description: 'This is a description.',
                image: 'https://picsum.photos/160/90/?random',
                imageAlt: 'Alt Text',
            },
            {
                description: 'This is a description.',
                image: 'https://picsum.photos/160/90/?random',
                imageAlt: 'Image Alt Here',
            },
        ];

        // checkbox example
        this.checkboxCols = [
            {
                colClass: 't30',
                colHeadName: 'checkbox',
                colHeadValue: '',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check'),
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.checkboxData = [
            {
                checkbox: false,
                gender: 'Male',
                ship: 'X-Wing',
            },
            {
                checkbox: false,
                gender: 'Male',
                ship: 'M. Falcon',
            },
            {
                checkbox: false,
                gender: 'Male',
                ship: 'Tie Fighter',
            },
            {
                checkbox: true,
                gender: 'Female',
                ship: 'M. Falcon',
            },
        ];

        // drag handle example
        this.dragHandleCols = [
            {
                _class: 'drag',
                colClass: 't30',
                colHeadName: 'drag',
                colHeadValue: '',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/utilities/c-drag-handle/c-drag-handle.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/utilities/c-drag-handle/c-drag-handle'),
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.dragHandleData = [
            {
                gender: 'Male',
                ship: 'X-Wing',
            },
            {
                gender: 'Male',
                ship: 'M. Falcon',
            },
            {
                _barColor: 'var(--c_subFourMain)',
                _status: 'bar',
                gender: 'Male',
                ship: 'Tie Fighter',
            },
            {
                gender: 'Female',
                name: 'Rey',
                ship: 'M. Falcon',
            },
        ];

        // drag handle checkbox example
        this.dragCheckCols = [
            {
                _class: 'dragCheck',
                colClass: 't30',
                colHeadName: 'dragCheck',
                colHeadValue: '',
                getDragOptions: (row): IDragOptions => {
                    return {
                        dragData: (event) => {
                            const trEl = this.findParentByType(event.target, 'TR');
                            trEl.style.opacity = '0.4';
                            return row;
                        },
                        getDragTarget: (target) => {
                            return this.findParentByType(target, 'TR');
                        },

                        onDragEnd: (event) => {
                            const trEl = this.findParentByType(event.target, 'TR');
                            trEl.style.opacity = '1';
                            return false;
                        },

                    };
                },
                view: PLATFORM.moduleName(
                    '@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check.html',
                ),
                viewModel: PLATFORM.moduleName(
                    '@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check',
                ),
            },
            {
                colHeadName: 'ship',
                colHeadValue: 'Ship',
                sort: true,
            },
            {
                colClass: 't50',
                colHeadName: 'gender',
                colHeadValue: 'Gender',
            },
        ];

        this.dragCheckData = [
            {
                dragCheck: false,
                gender: 'Male',
                order: 1,
                ship: 'X-Wing',
            },
            {
                dragCheck: false,
                gender: 'Male',
                order: 2,
                ship: 'M. Falcon',
            },
            {
                _barColor: 'var(--c_subFourMain)',
                _status: 'bar',
                dragCheck: false,
                gender: 'Male',
                order: 3,
                ship: 'Tie Fighter',
            },
            {
                dragCheck: true,
                gender: 'Female',
                order: 4,
                ship: 'M. Falcon',
            },
        ];

        this.pillTableCols = [
            {
                colHeadName: 'name',
                colHeadValue: 'Name',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill'),
            },
            {
                colHeadName: 'description',
                colHeadValue: 'Description',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-pill/c-td-pill'),
            },
        ];

        this.pillTableData = [
            {
                description: 'more text here',
                name: 'Han Solo',
                namePill: 'Pill Left',
                namePillColor: 'var(--c_secondaryMain)',
            },
            {
                description: 'more text here',
                name: 'Obi-Wan Kenobi',
                namePill: 'Pill Right',
                namePillColor: 'var(--c_subFourMain)',
                namePillRight: true,
            },
        ];

        this.actionTableCols = [
            {
                colAction: () => this.testModal(),
                colHeadName: 'delete',
                colHeadValue: 'Delete',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action'),
            },
            {
                colHeadName: 'link',
                colHeadValue: 'Link',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action'),
            },
            {
                colAction: () => this.testModal(),
                colHeadName: 'modal',
                colHeadValue: 'Modal',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-action/c-td-action'),
            },
        ];

        this.actionTableData = [
            {
                delete: 'Link Here',
                deleteIcon: 'bin',
                deleteIconAlign: '-0.3em',
                deleteIconSize: '1.3em',
                link: 'Go go Google',
                linkURL: 'http://google.com',
                modal: 'Launch a Modal',
            },
        ];

        this.tipTableCols = [
            {
                colHeadName: 'tipOne',
                colHeadValue: 'Tip One',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip'),
            },
            {
                colHeadName: 'tipTwo',
                colHeadValue: 'Tip Two',
                view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip.html'),
                viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-tip/c-td-tip'),
            },
        ];

        this.tipTableData = [
            {
                tipOneTipArrowPosition: 'leftEdge',
                tipOneTipSide: 'top',
                tipOneTipSize: 'large',
                tipOneTipTriggerText: 'Text here',
                tipOneTipViewModel: PLATFORM.moduleName('routes/components/tables/table/' +
                    'views-and-view-models/tip-text'),
                tipTwoTipArrowPosition: 'leftEdge',
                tipTwoTipSide: 'top',
                tipTwoTipSize: 'small',
                tipTwoTipTriggerIcon: 'actions',
                tipTwoTipTriggerIconAlign: '-0.3em',
                tipTwoTipTriggerIconSize: '1.3em',
                tipTwoTipViewModel: PLATFORM.moduleName('routes/components/tables/table/views-and-view-models/' +
                    'tip-actions'),
            },
        ];
    }

    public radioCols = [
        {
            _class: '',
            checkChanged: () => { return; },
            colClass: 't30',
            colHeadName: 'selected',
            radioName: 'hummingbirds',
            radioSelected: undefined,
            view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-radio/c-td-radio.html'),
            viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-radio/c-td-radio'),
        },
        {
            colHeadValue: 'Hummingbird',
            colHeadName: 'hummingbird',
            sort: true,
        },
        {
            colHeadValue: 'Species',
            colHeadName: 'species',
            sort: true,
        },
    ];

    public radioData = [
        {
            id: 'allens',
            hummingbird: 'Allen\'s Hummingbird',
            species: 'Selasphorus sasin',
        },
        {
            id: 'annas',
            hummingbird: 'Anna\'s Hummingbird',
            species: 'Calypte anna',
        },
        {
            id: 'rufous',
            hummingbird: 'Rufous Hummingbird',
            species: 'Selasphorus rufus',
        },
    ];

    public dropzoneActions = (row) => {
        const self = this;

        return {
            onDragEnter(event) {
                const target = self.findParentByType(event.target, 'TR');
                target.style.border = '2px dashed red';
            },
            onDragLeave(event) {
                const target = self.findParentByType(event.target, 'TR');
                target.style.border = '';
            },
            onDrop(event, data) {
                const target = self.findParentByType(event.target, 'TR');
                target.style.border = '';

                self.dragCheckData = sortDropData(data, row, self.dragCheckData, 'order');
            },
        };
    }

    public testModal() {
        this.dialogService.open({
            model: {
                bodyModel: {
                    stuff: 'here',
                },
                bodyViewModel: PLATFORM.moduleName('routes/components/modal/body'),
                footerEnable: true,
                footerModel: {
                    stuff: 'here',
                },
                footerText: 'footer',
                footerViewModel: PLATFORM.moduleName('routes/components/modal/footer'),
                size: 'large',
                title: 'Hi',
            },
            viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/modal/c-modal/c-modal'),
        });
    }

    private findParentByType(el, nodeType) {
        if (el.parentNode.nodeName === nodeType) {
            return el.parentElement;
        }

        if (el.parentElement) {
            return this.findParentByType(el.parentElement, nodeType);
        }

        return el;
    }
}
