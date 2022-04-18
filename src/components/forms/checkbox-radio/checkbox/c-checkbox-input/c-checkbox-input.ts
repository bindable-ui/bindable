/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import * as styles from './c-checkbox-input.css.json';

@containerless
export class CCheckboxInput {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checkedValue;
    @bindable
    public id;
    @bindable
    public onChange;
    @bindable
    public state;

    public styles = styles;

    public valueChanged() {
        if (this.onChange) {
            this.onChange({val: this.checkedValue});
        }
    }
}
