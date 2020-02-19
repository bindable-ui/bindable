/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './l-stack.css.json';

@containerless
export class LStack {
    @bindable
    public list;
    @bindable
    public recursive = false;
    @bindable
    public spacing = 'var(--s3)';
    @bindable
    public splitAfter;

    public styles = styles;

    public attached() {
        if (typeof this.recursive !== 'boolean') {
            this.recursive = false;
        }

        if (this.list !== 'ordered' && this.list !== 'unordered') {
            this.list = false;
        }
    }
}
