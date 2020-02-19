/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-form-error.css.json';

export class CFormError {
    @bindable
    public state;

    public styles = styles;
}
