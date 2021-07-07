/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, computedFrom} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';

@authState
export class EDeleteConfirm {
    @bindable
    public tipSide: string = 'top';
    @bindable
    public tipArrowPosition: string = 'rightEdge';
    @bindable
    public tipSize: string = 'large';
    @bindable
    public title: string = 'Channel';
    @bindable
    public action: () => Promise<void>;
    @bindable
    public match: string;
    @bindable
    public deleteMessage: string = '';
    @bindable
    public deleteErrorMessage: string = null;
    @bindable
    public triggerButtonState: string = '';
    @bindable
    public hasFocus: boolean = false;

    public matchCheck: string = '';
    public error: string = '';
    public isDeleting: boolean = false;
    public deleteConf: any;
    public authState: any;

    public tipActions = {
        onHide: () => {
            this.hasFocus = false;
        },
        onShow: () => {
            this.matchCheck = '';
            this.error = '';
            this.hasFocus = true;
        },
    };

    public async delete() {
        if (this.isDeleting) {
            return;
        }

        this.error = '';

        if (this.matchCheck !== this.match) {
            this.error = this.deleteErrorMessage || `${this.title} name does not match`;
            return;
        }

        if (_.isFunction(this.action)) {
            try {
                this.isDeleting = true;

                await this.action();

                this.matchCheck = '';
                this.deleteConf.toggleVisible();
            } catch (e) {
                this.error = 'There was an error. Try again.';
            }
            this.isDeleting = false;
        }
    }

    @computedFrom('isDeleting', 'matchCheck', 'match')
    get buttonState() {
        if (this.isDeleting) {
            return 'thinking';
        }

        if (this.matchCheck === this.match && this.matchCheck.length) {
            return '';
        }

        return 'disabled';
    }

    @computedFrom('isDeleting', 'triggerButtonState', '_state')
    get mainButtonState() {
        // @ts-ignore
        if (this._state === 'disabled') {
            return 'disabled';
        }

        if (this.isDeleting) {
            return 'thinking';
        }

        return this.triggerButtonState;
    }

    @computedFrom('deleteMessage')
    get showDeleteMessage() {
        return this.deleteMessage.length > 0;
    }

    @computedFrom('showDeleteMessage', 'title')
    get textLabel() {
        return this.showDeleteMessage ? '' : `${this.title} Name`;
    }
}
