/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {IFormEventListener} from 'interfaces/event-listeners';
import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';
import * as styles from './c-form-text.css.json';

@authState
export class CFormText {
    @bindable
    public alignInput = false;
    @bindable
    public buttonAction;
    @bindable
    public button;
    @bindable
    public buttonText;
    @bindable
    public buttonColor = 'neutral';
    @bindable
    public clearable;
    @bindable
    public errorMsg;
    @bindable
    public warningMsg;
    @bindable
    public infoMsg;
    @bindable
    public hasFocus = false;
    @bindable
    public icon;
    @bindable
    public iconColor;
    @bindable
    public iconPosition;
    @bindable
    public id = generateRandom();
    @bindable
    public label;
    @bindable
    public labelIcon;
    @bindable
    public labelIconColor = 'var(--c_lightGray)';
    @bindable
    public placeholder;
    @bindable
    public state;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textValue = '';
    @bindable
    public title = '';
    @bindable
    public type = 'text';
    @bindable
    public pattern = '';
    @bindable
    public eventListeners: IFormEventListener;

    public styles = styles;

    public attached() {
        if (typeof this.alignInput !== 'boolean') {
            this.alignInput = false;
        }

        if (typeof this.hasFocus !== 'boolean') {
            this.hasFocus = false;
        }
    }

    public onButtonAction(textValue) {
        if (_.isFunction(this.buttonAction)) {
            this.buttonAction({textValue});
        }
    }
}
