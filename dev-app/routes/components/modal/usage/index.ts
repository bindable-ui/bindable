/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';

import {DialogService} from 'aurelia-dialog';
import {PLATFORM} from 'aurelia-pal';

@autoinject()
export class Modal {
    public modalCols = [
        {
            _class: 'code',
            colClass: 't150',
            colHeadName: 'option',
            colHeadValue: 'Option',
        },
        {
            colClass: 't215',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public modalProperties = [
        {
            description:
            'If your template has a form or other things that you want to pass back out you can use this.',
            option: 'bodyModel',
        },

        {
            description: 'If you just need text in your modal you can place it here in a string.',
            option: 'bodyText',
            value: 'string',
        },
        {
            description:
            'If you need a more complex modal you can make a new view andthen pass in the path to' +
                ' that view here. It will put that template in the body of the modal.',
            option: 'bodyViewModel',
        },
        {
            description: 'Do you want a footer on your modal? Set to true or false.',
            option: 'footerEnable',
        },
        {
            description: 'If you only need text in your footer you can put it here in a string.',
            option: 'footerText',
            value: 'string',
        },
        {
            description: 'If you need to pass anything out of your template you can add it here.',
            option: 'footerModel',
        },
        {
            description:
            'If your footer is more complex you can create a template and add the path to that template here.',
            option: 'footerViewModel',
        },
        {
            description:
            'Set the size of the modal. Medium will set a width. Full will take up all the vertical space.' +
            ' Auto will take up the space needed.',
            option: 'size',
            value: 'medium | large | full | auto',
        },
        {
            description: 'Set what will be displayed as the title of the modal.',
            option: 'title',
            value: 'string',
        },
        {
            description: 'Set if you need a help tip next to the title of the modal',
            option: 'titleHelp',
            value: 'string',
        },
    ];

    constructor(public dialogService: DialogService) {}

    public testMediumModal() {
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
                size: 'medium',
                title: 'Hi',
            },
            viewModel: PLATFORM.moduleName('resources/components/modal/c-modal/c-modal'),
        });
    }

    public testLargeModal() {
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
            viewModel: PLATFORM.moduleName('resources/components/modal/c-modal/c-modal'),
        });
    }

    public testFullModal() {
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
                size: 'full',
                title: 'Hi',
            },
            viewModel: PLATFORM.moduleName('resources/components/modal/c-modal/c-modal'),
        });
    }

    public testModal() {
        this.dialogService.open({
            model: {
                bodyModel: {
                    stuff: 'here',
                },
                bodyText: 'Modal Body',
                bodyViewModel: PLATFORM.moduleName('routes/components/modal/body'),
                footerEnable: true,
                footerModel: {
                    stuff: 'here',
                },
                footerText: 'footer',
                footerViewModel: PLATFORM.moduleName('routes/components/modal/footer'),
                size: 'auto',
                title: 'Hi',
                titleHelp: 'Help text here.',
            },
            viewModel: PLATFORM.moduleName('resources/components/modal/c-modal/c-modal'),
        });
    }
}
