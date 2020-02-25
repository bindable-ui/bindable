/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import {IDragOptions, IDropzoneActions} from 'index';
import {authState} from '../../../../../decorators/auth-state';
import * as styles from './c-form-checkbox.css.json';

@authState
@containerless
export class CFormCheckbox {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checkedValue;
    @bindable
    public draggable = false;
    @bindable
    public dragOptions: IDragOptions;
    @bindable
    public dropOptions: IDropzoneActions;
    @bindable
    public id;
    @bindable
    public onChange;
    @bindable
    public state;

    public styles = styles;

    public attached() {
        if (typeof this.draggable !== 'boolean') {
            this.draggable = false;
        }
    }

    public valueChanged(val) {
        if (this.onChange) {
            this.onChange({val});
        }
    }
}
