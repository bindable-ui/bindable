/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import {authState} from '../../../../../decorators/auth-state';

@authState
@containerless
export class CFormToggle {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checkedValue;
    @bindable
    public id;
    @bindable
    public onChange;
    @bindable
    public state;

    public valueChanged(val) {
        if (this.onChange) {
            this.onChange({val});
        }
    }
}
