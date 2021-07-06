/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-h4.css.json';

export class CH4 {
    @bindable
    public color = 'inherit';

    @bindable
    public truncate;

    public styles = styles;
}
