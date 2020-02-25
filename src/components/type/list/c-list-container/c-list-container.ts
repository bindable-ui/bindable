/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-list-container.css.json';

export class CListContainer {
    @bindable
    public dividers = false;
    @bindable
    public size = 'medium';
    @bindable
    public color = 'dark';

    public styles = styles;

    public attached() {
        if (typeof this.dividers !== 'boolean') {
            this.dividers = false;
        }
    }
}
