/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as moment from 'moment';

import {authState} from '../../../decorators/auth-state';
import * as styles from './c-timeline-block.css.json';

@authState
export class CTimelineBlock {
    @bindable
    public time: string;
    @bindable
    public isoTime: string;
    @bindable
    public addEntryOffset: ({isoTime, mouseOffset}: {isoTime: string; mouseOffset: number}) => [string, number];
    @bindable
    public newEntryViewModel: string;

    public styles = styles;

    private newItem: any = null;
    private placeholderEntry;
    @bindable
    public preventCreate: ({isoTime}?: {isoTime: string}) => boolean = _isoTime => false

    public togglePopoverFunction($event) {
        if (!this.isoTime || this.preventCreate({isoTime: this.isoTime}) || !_.isFunction(this.addEntryOffset)) {
            return;
        }

        if (!this.newItem) {
            const mouseOffset = $event && $event.layerY ? $event.layerY : 0;
            let top;
            let isoTime;

            [isoTime, top] = this.addEntryOffset({isoTime: this.isoTime, mouseOffset});

            if (!_.isNumber(top)) {
                top = mouseOffset;
            }

            if (!moment(isoTime).isValid()) {
                isoTime = this.isoTime;
            }

            this.newItem = {
                isoTime,
                top,
                color: 'secondary',
                height: 50,
                placeholder: true,
                title: '(New Item)',
            };

            if (this.newEntryViewModel) {
                this.newItem.contentViewModel = this.newEntryViewModel;
            }
        }

        _.defer(() => {
            this.placeholderEntry.openPopover();
        });
    }
}
