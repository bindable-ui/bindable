/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-toggle-label.css.json';

@containerless
export class CToggleLabel {
    @bindable
    public id;
    @bindable
    public state;

    public styles = styles;
}
