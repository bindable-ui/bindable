/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import * as styles from './c-form-slider.css.json';

@authState
export class CFormSlider {
    @bindable
    public errorMsg;
    @bindable
    public increments = 4;
    @bindable
    public inline = false;
    @bindable
    public label;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public sliderValue = 0;
    @bindable
    public state;
    @bindable
    public onChange;
    @bindable
    public debounceTime: number = 0;

    public styles = styles;

    public valueChanged(val) {
        if (this.onChange && _.isFunction(this.onChange)) {
            this.onChange({val});
        }
    }
}
