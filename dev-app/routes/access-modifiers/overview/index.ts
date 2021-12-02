/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {observable} from 'aurelia-framework';

export class Overview {
    public accessModifiersCols = [
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
    ];

    public accessModifiersProperties = [
        {
            description: 'authState is used to set initial access type. This is derived from user permission.',
            name: 'authState',
            value: 'enabled | disabled | hidden',
        },
        {
            description: 'state is used to show various application states such as: disable a button when a form' +
            ' is pristine, showing a spinner, or to disable a submit button when a form is submitting.',
            name: 'state',
            value: 'enabled | disabled | hidden | thinking | error',
        },
    ];

    @observable
    public authStateVal: string = 'enabled';
    public stateVal: string = 'state-enabled';
    public buttonRef: any;

    public authStateValChanged() {
        if (this.buttonRef) {
            this.buttonRef.authState = this.authStateVal;
            // this is to force stateChanged inside component
            this.stateVal = `${Math.floor(Math.random() * 1000)}`;
        }
    }
}
