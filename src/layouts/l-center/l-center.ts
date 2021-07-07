/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-center.css.json';

export class LCenter {
    @bindable
    public intrinsic = false;
    @bindable
    public fillSpace = false;
    @bindable
    public maxWidth = 'none';
    @bindable
    public spacing = '0';
    @bindable
    public textCenter = false;

    public styles = styles;

    public attached() {
        if (typeof this.intrinsic !== 'boolean') {
            this.intrinsic = false;
        }

        if (typeof this.textCenter !== 'boolean') {
            this.textCenter = false;
        }

        if (typeof this.fillSpace !== 'boolean') {
            this.fillSpace = false;
        }
    }
}
