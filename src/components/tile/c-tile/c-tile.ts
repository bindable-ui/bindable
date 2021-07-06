/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';
import {generateRandom} from '../../../helpers/generate-random';
import {highlightSearchText} from '../../../helpers/highlight-text';

import * as styles from './c-tile.css.json';

@authState
export class CTile {
    @bindable
    public action;
    @bindable
    public checkAction;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checkedValue;
    @bindable
    public dragOptions;
    @bindable
    public hover = true;
    @bindable
    public id = generateRandom();
    @bindable
    public imageContainerHeight = 70;
    @bindable
    public imageUrl;
    @bindable
    public message;
    @bindable
    public noImageMessage = 'No Image';
    @bindable
    public pillColor = 'var(--c_subOneMain)';
    @bindable
    public pillText;
    @bindable
    public searchMatch = null;
    @bindable
    public showCheckbox = true;
    @bindable
    public showDrag = false;
    @bindable
    public state;
    @bindable
    public status;
    @bindable
    public color;
    @bindable
    public alwaysShowTipLeft = false;
    @bindable
    public tipIconLeft;
    @bindable
    public tipIconColorLeft;
    @bindable
    public alwaysShowTipRight = false;
    @bindable
    public tipIconRight;
    @bindable
    public tipIconColorRight;
    @bindable
    public title;
    @bindable
    public titleIcon;

    public searchHighlight: string = null;
    public styles = styles;
    public _state;

    public attached() {
        if (typeof this.hover !== 'boolean') {
            this.hover = true;
        }

        if (typeof this.showCheckbox !== 'boolean') {
            this.showCheckbox = true;
        }

        if (typeof this.showDrag !== 'boolean') {
            this.showDrag = false;
        }

        if (typeof this.alwaysShowTipRight !== 'boolean') {
            this.alwaysShowTipRight = false;
        }

        if (typeof this.alwaysShowTipLeft !== 'boolean') {
            this.alwaysShowTipLeft = false;
        }

        if (typeof this.imageContainerHeight !== 'number') {
            this.imageContainerHeight = 70;
        }

        if (this.state && this.state === 'disabled') {
            this.hover = false;
        }

        if (this.searchMatch) {
            this.searchHighlight = highlightSearchText(this.searchMatch, this.title);
        }
    }

    public checkedValueChanged() {
        if (this._state !== 'disabled' && this.checkAction && _.isFunction(this.checkAction)) {
            _.defer(() => this.checkAction());
        }
    }

    public tileClick() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }
    }
}
