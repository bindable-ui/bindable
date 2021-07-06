/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-checkbox-label.css.json';

@containerless
export class CCheckboxLabel {
    @bindable
    public id;
    @bindable
    public state;

    public styles = styles;
}
