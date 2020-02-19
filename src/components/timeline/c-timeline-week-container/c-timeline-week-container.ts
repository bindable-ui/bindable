/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-timeline-week-container.css.json';

export class CTimelineWeekContainer {
    @bindable
    public days;

    @bindable
    public dayClick;

    public styles = styles;

    public changeDate(date) {
        if (this.dayClick && _.isFunction(this.dayClick)) {
            this.dayClick({date});
        }
    }
}
