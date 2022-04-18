/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import * as styles from './c-slider.css.json';

@authState
export class CSlider {
    @bindable
    public id;
    @bindable
    public increments = 4;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public sliderValue = 0;
    @bindable
    public state;
    @bindable
    public onChange;
    @bindable
    public debounceTime: number = 0;

    public styles = styles;

    public valueChanged() {
        if (this.onChange && _.isFunction(this.onChange)) {
            this.onChange({val: this.sliderValue});
        }
    }
}
