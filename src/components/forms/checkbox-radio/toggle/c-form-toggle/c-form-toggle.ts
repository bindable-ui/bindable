/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import {authState} from '../../../../../decorators/auth-state';
import * as styles from './c-form-toggle.css.json';

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

    public styles = styles;

    public valueChanged(val) {
        if (this.onChange) {
            this.onChange({val});
        }
    }
}
