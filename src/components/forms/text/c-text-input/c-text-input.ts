/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';

import {eventListeners} from '../../../../decorators/event-listeners';
import {generateRandom} from '../../../../helpers/generate-random';
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
    public id = generateRandom();
    @bindable
    public placeholder;
    @bindable
    public state;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textValue;
    @bindable
    public type = 'text';
    @bindable
    public pattern = '';
    @bindable
    public eventListeners: IFormEventListener = {};

    public styles = styles;

    private valid_types = ['email', 'number', 'tel', 'text', 'url'];

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
}
