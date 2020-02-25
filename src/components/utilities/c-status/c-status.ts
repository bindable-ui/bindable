/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-status.css.json';

export class CStatus {
    @bindable
    public href;
    @bindable
    public maxWidth = 'auto';
    @bindable
    public state = 'healthy';
    @bindable
    public targetNew = false;
    @bindable
    public text;

    public styles = styles;

    public attached() {
        if (typeof this.targetNew !== 'boolean') {
            this.targetNew = false;
        }
    }
}
