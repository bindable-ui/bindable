/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-h5.css.json';

export class CH5 {
    @bindable
    public color;

    public styles = styles;
}
