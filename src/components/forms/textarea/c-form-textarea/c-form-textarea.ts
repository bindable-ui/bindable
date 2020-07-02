/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';
import * as styles from './c-form-textarea.css.json';

@authState
export class CFormTextarea {
    @bindable
    public errorMsg;
    @bindable
    public id = generateRandom();
    @bindable
    public label;
    @bindable
    public placeholder;
    @bindable
    public state;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textareaValue;

    public styles = styles;
}
