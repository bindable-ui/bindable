/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-timeline-month-item.css.json';

export class CTimelineMonthItem {
    @bindable
    public dayDate;
    @bindable
    public activeMonth = true;
    @bindable
    public today = false;

    public styles = styles;

    public attached() {
        if (typeof this.activeMonth !== 'boolean') {
            this.activeMonth = true;
        }

        if (typeof this.today !== 'boolean') {
            this.today = false;
        }
    }
}
