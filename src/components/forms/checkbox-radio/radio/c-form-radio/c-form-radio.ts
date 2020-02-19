/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import {authState} from '../../../../../decorators/auth-state';
@authState
@containerless
export class CFormRadio {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checked;
    @bindable
    public id;
    @bindable
    public name;
    @bindable
    public state;
}
