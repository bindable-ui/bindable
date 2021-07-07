/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-p.css.json';

export class CP {
    @bindable
    public bold = false;
    @bindable
    public color = 'var(--p-default-color)';
    @bindable
    public fontFamily = 'inherit';
    @bindable
    public flushTop = true;
    @bindable
    public maxWidth = 'unset';
    @bindable
    public size = 'medium';
    @bindable
    public truncate = false;

    public styles = styles;

    public attached() {
        if (typeof this.bold !== 'boolean') {
            this.bold = false;
        }

        if (typeof this.truncate !== 'boolean') {
            this.truncate = false;
        }

        if (typeof this.flushTop !== 'boolean') {
            this.flushTop = true;
        }
    }
}
