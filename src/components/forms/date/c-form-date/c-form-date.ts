/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import * as moment from 'moment';
import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';

import * as styles from './c-form-date.css.json';

declare let $: any;

/**
 * @param id {String} - Element ID.
 * @param timestamp {Number} - Unix timestamp.
 * @param isoDate {String} - ISO Date string.
 * @param callbacks {Object} - Dictionary of callbacks. Currently supported cbs:
 *        onChange(timestamp) - Hook that executes on value change with new timestamp.
 */
@authState
@containerless
export class CFormDate {
    @bindable
    public callbacks;
    @bindable
    public dateFormat = false;
    @bindable
    public disabledText;
    @bindable
    public errorMsg;
    @bindable
    public warningMsg;
    @bindable
    public iconPosition = 'right';
    @bindable
    public id = generateRandom();
    @bindable
    public inline = false;
    @bindable
    public isoDate;
    @bindable
    public label;
    @bindable
    public labelIcon;
    @bindable
    public labelIconColor = 'var(--c_lightGray)';
    @bindable
    public placeholder;
    @bindable
    public startOf: moment.unitOfTime.StartOf = 'minute';
    @bindable
    public state;
    @bindable
    public watchState;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textValue;
    @bindable
    public timeofday;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public timestamp;

    public styles = styles;
    public datetimepicker;

    public attached() {
        if (typeof this.inline !== 'boolean') {
            this.inline = false;
        }

        this.attachDatepicker();
    }

    public isoDateChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }

        if (newValue) {
            this.timestamp = moment(newValue)
                .startOf(this.startOf)
                .format('x');
            this.setTimestamp(this.timestamp);
        } else {
            this.setTimestamp(newValue);
        }
    }

    public watchStateChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }

        if (oldValue === 'disabled') {
            setTimeout(() => {
                this.attachDatepicker();
            }, 500);
        }
    }

    public calcViewDate() {
        if (this.timeofday === 'start') {
            return moment().startOf('day');
        }
        if (this.timeofday === 'end') {
            return moment().endOf('day');
        }

        return moment();
    }

    public updateDate() {
        // UP-10723 : Timestamps should be at the beginning of a minute to avoid issues with relative time
        let newTimestamp = moment(this.datetimepicker.data('DateTimePicker').date())
            .startOf(this.startOf)
            .format('x');
        if (newTimestamp === 'Invalid date') {
            newTimestamp = '';
        }

        this.timestamp = newTimestamp;
        this.isoDate = moment(newTimestamp, 'x').toISOString();

        if (this.callbacks && _.isFunction(this.callbacks.onChange)) {
            this.callbacks.onChange(newTimestamp);
        }
    }

    public timestampChanged(newValue) {
        this.setTimestamp(newValue);
    }

    public setTimestamp(newValue) {
        if (this.datetimepicker && this.datetimepicker.data('DateTimePicker')) {
            if (newValue) {
                this.datetimepicker.data('DateTimePicker').date(moment(newValue, 'x'));
            } else {
                this.datetimepicker.data('DateTimePicker').clear();
            }
        }
    }

    public detached() {
        if (this.datetimepicker) {
            this.datetimepicker.off('dp.show');
            this.datetimepicker.off('dp.change');

            if (this.datetimepicker.data('DateTimePicker')) {
                this.datetimepicker.data('DateTimePicker').destroy();
            }

            this.datetimepicker = null;
        }

        this.timestamp = null;
        this.isoDate = null;
    }

    private attachDatepicker() {
        if (this.state === 'disabled') {
            return;
        }

        this.datetimepicker = $(`#${this.id}`).datetimepicker({
            format: this.dateFormat,
            inline: this.inline,
            minDate: moment('2016-01-01'),
            showClose: true,
            showTodayButton: true,
            sideBySide: true,
            useCurrent: false,
        });

        if (this.isoDate) {
            this.timestamp = moment(this.isoDate).format('x');
        }
        this.setTimestamp(this.timestamp);

        // This resets the time picker when it is opened and a time isn't already set.
        // There is a bug in the picker, otherwise .viewDate(this.calcViewDate()) should work instead.
        this.datetimepicker.on('dp.show', () => {
            if (!this.timestamp && !this.isoDate) {
                this.datetimepicker.data('DateTimePicker').date(this.calcViewDate());
                this.datetimepicker.data('DateTimePicker').clear();
            }
        });

        this.datetimepicker.on('dp.change', () => {
            this.updateDate();
        });
    }
}
