/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-radio-label.css.json';

@containerless
export class CRadioLabel {
    @bindable
    public id;
    @bindable
    public name;
    @bindable
    public state;

    public styles = styles;
}
