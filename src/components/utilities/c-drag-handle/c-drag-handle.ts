/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {IDragOptions} from 'index.js';
import * as styles from './c-drag-handle.css.json';

export class CDragHandle {
    @bindable
    public size = '0.75em';
    @bindable
    public dragOptions: IDragOptions;

    public styles = styles;
}
