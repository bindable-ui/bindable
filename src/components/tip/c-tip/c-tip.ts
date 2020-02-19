/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-tip.css.json';

export class CTip {
    @bindable
    public actions;
    @bindable
    public arrowPosition;
    @bindable
    public triggerType = 'click';
    @bindable
    public color = 'subOne';
    @bindable
    public altColor;
    @bindable
    public forceClose = false;
    @bindable
    public fillWidthTrigger = false;
    @bindable
    public hoverDelay = 200;
    @bindable
    public iconTip = false;
    @bindable
    public positionTrigger;
    @bindable
    public side = 'right';
    @bindable
    public size = 'small';

    public styles = styles;
    public contentDisplay;
    public contentVisible;
    public onMouseEnter;

    constructor() {
        this.contentDisplay = false;
        this.contentVisible = false;
        this.assignOnMouseEnter();
    }

    public attached() {
        if (typeof this.forceClose !== 'boolean') {
            this.forceClose = false;
        }

        if (typeof this.iconTip !== 'boolean') {
            this.iconTip = false;
        }
    }

    public hoverDelayChanged() {
        this.assignOnMouseEnter();
    }

    public assignOnMouseEnter() {
        this.onMouseEnter = _.debounce(() => {
            if (this.triggerType === 'hover') {
                this.show();
            }
        }, this.hoverDelay);
    }

    public onMouseLeave() {
        if (this.triggerType === 'hover') {
            this.onMouseEnter.cancel();
            this.hide();
        }
    }

    public toggleVisible($event) {
        if ($event && $event.type === 'click') {
            $event.stopPropagation();
        }

        if (this.triggerType === 'click') {
            if (this.contentDisplay) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    public hide() {
        this.contentVisible = false;
        setTimeout(() => {
            this.contentDisplay = false;
            if (this.actions && this.actions.onHide) {
                this.actions.onHide();
            }
        }, 300);
    }

    public show() {
        this.contentDisplay = true;
        setTimeout(() => {
            this.contentVisible = true;
            if (this.actions && this.actions.onShow) {
                this.actions.onShow();
            }
        }, 100);
    }
}
