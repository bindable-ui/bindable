/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import {authState} from '../../../../../decorators/auth-state';
@authState
@containerless
export class CFormRadio {
    @bindable
    public actions;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checked;
    @bindable
    public id;
    @bindable
    public name;
    @bindable
    public state;

    public checkedChanged() {
        if (this.actions && this.actions.onChange) {
            this.actions.onChange();
        }
    }
}
