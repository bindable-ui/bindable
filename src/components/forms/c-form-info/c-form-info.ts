/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-form-info.css.json';

export class CFormInfo {
    @bindable
    public state;

    public styles = styles;
}
