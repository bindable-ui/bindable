/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-spinner.css.json';

@containerless
export class CSpinner {
    @bindable
    public size = 'medium';

    public styles = styles;
}
