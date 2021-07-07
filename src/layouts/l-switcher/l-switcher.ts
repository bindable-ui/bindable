/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-switcher.css.json';

export class LSwitcher {
    @bindable
    public doubleWidth;
    @bindable
    public limit;
    @bindable
    public spacing = 'var(--s3)';
    @bindable
    public threshold = '50rem';

    public styles = styles;

    public attached() {
        if (
            this.doubleWidth !== 'first' &&
            this.doubleWidth !== 'second' &&
            this.doubleWidth !== 'third' &&
            this.doubleWidth !== 'fourth' &&
            this.doubleWidth !== 'fifth'
        ) {
            this.doubleWidth = false;
        }

        if (this.limit !== 'two' && this.limit !== 'three' && this.limit !== 'four' && this.limit !== 'five') {
            this.limit = false;
        }
    }
}
