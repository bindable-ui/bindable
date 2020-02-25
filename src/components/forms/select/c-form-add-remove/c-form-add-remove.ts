/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import * as styles from './c-form-add-remove.css.json';

@authState
export class CFormAddRemove {
    @bindable
    public actionsLeft;
    @bindable
    public actionsRight;
    @bindable
    public isLoadingMoreLeft = false;
    @bindable
    public isLoadingMoreRight = false;
    @bindable
    public isLoadingLeft = false;
    @bindable
    public isLoadingRight = false;
    @bindable
    public listLeft = [];
    @bindable
    public listRight = [];
    @bindable
    public reorder;
    @bindable
    public scrollToLoadLeft = false;
    @bindable
    public scrollToLoadRight = false;
    @bindable
    public searchTextLeft = '';
    @bindable
    public searchTextRight = '';
    @bindable
    public simple = false;
    @bindable
    public state;
    @bindable
    public tipLeftContent;
    @bindable
    public tipRightContent;
    @bindable
    public titleLeft = 'Left Title';
    @bindable
    public titleRight = 'Right Title';

    public styles = styles;
    public selectRight;
    public selectLeft;

    public attached() {
        if (typeof this.simple !== 'boolean') {
            this.simple = false;
        }

        if (typeof this.scrollToLoadLeft !== 'boolean') {
            this.scrollToLoadLeft = false;
        }

        if (typeof this.scrollToLoadRight !== 'boolean') {
            this.scrollToLoadRight = false;
        }

        if (typeof this.isLoadingRight !== 'boolean') {
            this.isLoadingRight = false;
        }

        if (typeof this.isLoadingLeft !== 'boolean') {
            this.isLoadingLeft = false;
        }

        if (typeof this.isLoadingMoreRight !== 'boolean') {
            this.isLoadingMoreRight = false;
        }

        if (typeof this.isLoadingMoreLeft !== 'boolean') {
            this.isLoadingMoreLeft = false;
        }

        if (typeof this.reorder !== 'boolean') {
            this.reorder = false;
        }
    }

    public moveLeft() {
        const sendOver = [];
        const indexes = [];

        _.forEach(this.selectRight, selectedVal => {
            const findIndex = _.findIndex(this.listRight, {value: selectedVal});

            if (findIndex > -1) {
                indexes.push(findIndex);
                sendOver.push(this.listRight[findIndex]);
            }
        });

        _.pullAt(this.listRight, indexes);
        this.listRight = _.cloneDeep(this.listRight); // Trigger change detection
        this.listLeft = _.uniqBy(_.concat(this.listLeft, sendOver), 'value');
        this.selectLeft = [];
        this.selectRight = [];
    }

    public moveRight() {
        const sendOver = [];
        const indexes = [];
        _.forEach(this.selectLeft, selectedVal => {
            const findIndex = _.findIndex(this.listLeft, {value: selectedVal});

            if (findIndex > -1) {
                indexes.push(findIndex);
                sendOver.push(this.listLeft[findIndex]);
            }
        });

        _.pullAt(this.listLeft, indexes);
        this.listLeft = _.cloneDeep(this.listLeft); // Trigger change detection
        this.listRight = _.uniqBy(_.concat(this.listRight, sendOver), 'value');
        this.selectLeft = [];
        this.selectRight = [];
    }
}
