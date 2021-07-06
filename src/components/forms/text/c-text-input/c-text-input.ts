/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';

import {eventListeners} from '../../../../decorators/event-listeners';
import {IFormEventListener} from '../../../../interfaces/event-listeners';

import * as styles from './c-text-input.css.json';

@eventListeners
@inject(Element)
export class CTextInput {
    @bindable
    public button;
    @bindable
    public buttonText;
    @bindable
    public buttonColor;
    @bindable
    public buttonAction;
    @bindable
    public clearable = false;
    @bindable
    public hasFocus;
    @bindable
    public icon;
    @bindable
    public iconPosition;
    @bindable
    public id;
    @bindable
    public placeholder;
    @bindable
    public state;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textValue;
    @bindable
    public title = '';
    @bindable
    public type = 'text';
    @bindable
    public pattern;
    @bindable
    public eventListeners: IFormEventListener = {};

    public styles = styles;

    private valid_types = ['email', 'number', 'tel', 'text', 'url', 'password'];

    private defaultEvents: IFormEventListener = {
        keyup: event => {
            if (event.which === 13) {
                this.buttonFn();
            }
            event.preventDefault();
        },
    };

    constructor(public element) {}

    public attached() {
        if (typeof this.clearable !== 'boolean') {
            this.clearable = false;
        }

        if (!this.valid_types.includes(this.type)) {
            this.type = 'text';
        }

        this.eventListeners = Object.assign({}, this.defaultEvents, this.eventListeners);

        this.updatePattern();
        this.updatePlaceholder();
    }

    public clearText() {
        this.textValue = '';
        this.buttonFn();
    }

    public buttonFn() {
        if (_.isFunction(this.buttonAction)) {
            this.buttonAction({textValue: this.textValue});
        }
    }

    public patternChanged() {
        this.updatePattern();
    }

    public placeholderChanged() {
        this.updatePlaceholder();
    }

    private updatePattern() {
        if (this.pattern && this.pattern.length) {
            $(`#${this.id}`).attr('pattern', this.pattern);
            return;
        }
        $(`#${this.id}`).removeAttr('pattern');
    }

    private updatePlaceholder() {
        if (this.placeholder && this.placeholder.length) {
            $(`#${this.id}`).attr('placeholder', this.placeholder);
            return;
        }
        $(`#${this.id}`).removeAttr('placeholder');
    }
}
