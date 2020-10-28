/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-h2.css.json';

@containerless
export class CH2 {
    @bindable
    public flushTop = true;
    @bindable
    public truncate = false;
    @bindable
    public lineHeight = 'inherit';

    public styles = styles;

    public attached() {
        if (typeof this.truncate !== 'boolean') {
            this.truncate = false;
        }

        if (typeof this.flushTop !== 'boolean') {
            this.flushTop = true;
        }
    }
}
