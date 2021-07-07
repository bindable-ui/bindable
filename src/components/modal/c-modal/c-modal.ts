/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {DialogController} from 'aurelia-dialog';
import {bindable} from 'aurelia-framework';

import * as styles from './c-modal.css.json';

export class CModal {
    public static inject = [DialogController];
    @bindable
    public size;

    public styles = styles;
    public controller;
    public model;

    constructor(controller) {
        this.controller = controller;
    }

    public activate(model) {
        this.model = model;
    }

    public attached() {
        $('ux-dialog.js-full')
            .parent()
            .css('height', '100%');
        $('ux-dialog.js-full')
            .parent()
            .parent()
            .css('height', '100%');
        $('ux-dialog.js-full')
            .parent()
            .css('width', '100%');
        $('ux-dialog.js-full')
            .parent()
            .parent()
            .css('width', '100%');
        $('ux-dialog.js-large')
            .parent()
            .css('height', '100%');
        $('ux-dialog.js-large')
            .parent()
            .parent()
            .css('height', '80%');
        $('ux-dialog.js-large')
            .parent()
            .css('width', '100%');
        $('ux-dialog.js-large')
            .parent()
            .parent()
            .css('width', '80%');
    }
}
