/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject, bindable, bindingMode, containerless, TaskQueue} from 'aurelia-framework';
import * as moment from 'moment';

import {ITimeBlock, ITimeDay, ITimeEntry, ITimeEntryBasic, ITimelineActions} from './c-timeline-interfaces';

import {authState} from '../../../decorators/auth-state';
import {generateRandom} from '../../../helpers/generate-random';

type Moment = moment.Moment;

/**
 * Data about each available zoom level
 */
export const ZOOM_LEVELS: any = [
    {
        defaultTimeBlocks: 12,
        minutes: 120,
    },
    {
        defaultTimeBlocks: 24,
        minutes: 60,
    },
    {
        defaultTimeBlocks: 48,
        minutes: 30,
    },
    {
        defaultTimeBlocks: 96,
        minutes: 15,
    },
    {
        defaultTimeBlocks: 288,
        minutes: 5,
    },
    {
        defaultTimeBlocks: 1440,
        minutes: 1,
    },
];

const DEFAULT_ZOOM = 2;
const MINUTES_IN_DAY = 1440;
const HOURS_IN_DAY = 24;
const TIME_REGEX = /^[0-9]{1,4}$/;
const BLOCK_HEIGHT = 50;
const SECONDS_IN_MINUTE = 60;

/**
 * Create arrays that show the times allowed for blocks to appear at each zoom level
 */
const mapAllowedTimes = () => {
    _.forEach(ZOOM_LEVELS, (level, index: number) => {
        level.allowedMinutes = [0];
        level.allowedHours = Array(HOURS_IN_DAY)
            .fill(null)
            .map((_num, idx) => idx);

        switch (index) {
            case 0:
                _.remove(level.allowedHours, (num: number) => num % 2 === 1);
            case 1:
                break;
            case 2:
                level.allowedMinutes.push(30);
                break;
            case 3:
                _.times(3, num => level.allowedMinutes.push((num + 1) * 15));
                break;
            case 4:
                _.times(11, num => level.allowedMinutes.push((num + 1) * 5));
                break;
            case 5:
                _.times(59, num => level.allowedMinutes.push(num + 1));
                break;
            default:
                break;
        }
    });
};

@containerless
@authState
@autoinject
export class CTimeline {
    @bindable
    public isLoading: boolean = false;

    @bindable
    public isLoadingTop: boolean = false;

    @bindable
    public isLoadingBottom: boolean = false;

    @bindable({defaultBindingMode: bindingMode.twoWay})
    public date: string;

    @bindable
    public days: number = 1;

    @bindable({defaultBindingMode: bindingMode.twoWay})
    public timeView: string = 'day';

    @bindable
    public zoomLevel: number = DEFAULT_ZOOM;

    @bindable
    public entries: ITimeEntryBasic[] = [];

    @bindable
    public actions: ITimelineActions = {};

    @bindable
    public startTime: string = null;

    @bindable
    public endTime: string = null;

    @bindable
    public offsetTime: string = null;

    @bindable
    public scrollDays: number = 1;

    @bindable
    public snapAdd: boolean = false;

    @bindable
    public preventCreate;

    @bindable
    public editEntryViewModel: string = null;

    @bindable
    public newEntryViewModel: string = null;

    public transformedEntries: ITimeEntry[] = [];
    public blocks: ITimeBlock[] = [];
    public displayDays: ITimeDay[] = [];
    public today = moment();
    public currentTimeLine: number = -1;
    public currentTimeLineTracker = null;
    public isRendering: boolean = false;
    public scrollCurrentTime: boolean = true;
    public parentScrollElem: JQuery<HTMLElement> = null;
    public id = generateRandom();

    /**
     * Build out the timeline. Put in a throttle so it doesn't bind up
     */
    public buildTimeline = _.debounce(
        () => {
            this.buildBlocks();
            this.transformEntries();
            this.calculateCurrentTimeLine();

            this.taskQueue.queueMicroTask(() => {
                this.isRendering = false;

                // Could potentially be 250ms behind with the throttle
                _.delay(() => {
                    this.scrollToSpot();
                }, 300);
            });
        },
        200,
        {trailing: false, leading: true},
    );

    /**
     * Take entries that are input and transform them into entries the calendar can use
     */
    public transformEntries = _.throttle(() => {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const pxPerMinute = BLOCK_HEIGHT / zoomLevelData.minutes;
        const [startTime, endTime] = this.getDayStartEndTimes();

        const sortedEntries = _.sortBy(this.entries, entry => {
            if (this.date) {
                return entry.start;
            }

            return moment(entry.start, 'hmm').toISOString();
        });

        if (this.timeView === 'day') {
            this.transformedEntries = this.mapEntries(sortedEntries, pxPerMinute, startTime, endTime);
            return;
        }

        if (this.timeView === 'week') {
            _.forEach(this.displayDays, day => {
                const clonedSort = _.cloneDeep(sortedEntries);

                const dayEntries = _.filter(clonedSort, entry => {
                    const entryStart = this.date ? entry.start : moment(entry.start, 'hmm').toISOString();
                    const entryEnd = moment(entryStart)
                        .add(entry.duration, 'seconds')
                        .toISOString();

                    const startIn = moment(entryStart).isBetween(startTime, endTime, null, '[]');
                    const endIn = moment(entryEnd).isBetween(startTime, endTime, null, '[]');

                    return startIn || endIn;
                });

                day.entries = this.mapEntries(dayEntries, pxPerMinute, startTime, endTime);

                startTime.add(1, 'day');
                endTime.add(1, 'day');
            });

            return;
        }
    }, 100);

    private calculateCurrentTimeLine = _.throttle(
        () => {
            if (this.timeView === 'month') {
                return;
            }

            const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
            const pxPerMinute = BLOCK_HEIGHT / zoomLevelData.minutes;

            const [startTime, endTime] = this.getDayStartEndTimes();
            const now = moment();

            if (this.timeView === 'day') {
                if (now.isBetween(startTime, endTime, null, '()')) {
                    const diff = now.diff(startTime, 'seconds');
                    this.currentTimeLine = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
                } else {
                    this.currentTimeLine = -1;
                }
            } else {
                _.forEach(this.displayDays, day => {
                    if (now.isBetween(startTime, endTime, null, '()')) {
                        const diff = now.diff(startTime, 'seconds');
                        day.currentTimeLine = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
                    } else {
                        day.currentTimeLine = -1;
                    }

                    startTime.add(1, 'day');
                    endTime.add(1, 'day');
                });
            }
        },
        250,
        {trailing: true, leading: false},
    );

    constructor(
        private taskQueue: TaskQueue,
    ) {
        // Generate allowed times at each level
        mapAllowedTimes();
    }

    public attached() {
        this.buildTimeline();

        this.currentTimeLineTracker = setInterval(() => {
            this.calculateCurrentTimeLine();
        }, SECONDS_IN_MINUTE * 1000);
    }

    public detatched() {
        if (this.currentTimeLineTracker) {
            clearInterval(this.currentTimeLineTracker);
        }
    }

    // Observable properties
    // Listen to rebuild data
    public zoomLevelChanged() {
        this.isRendering = true;

        // If there is no delay, the browser chokes up and doesn't
        // display the loading indicator until the very end
        // 50ms wait seems to be a good middle ground
        _.delay(() => this.buildTimeline(), 50);
    }

    public daysChanged() {
        if (this.timeView !== 'day') {
            this.buildTimeline();
        }
    }

    public timeViewChanged() {
        this.isRendering = true;
        this.scrollCurrentTime = true;

        // If there is no delay, the browser chokes up and doesn't
        // display the loading indicator until the very end
        // 50ms wait seems to be a good middle ground
        _.delay(() => this.buildTimeline(), 50);
    }

    public scrollDaysChanged() {
        this.buildTimeline();
    }

    public entriesChanged() {
        // Don't update unless there are blocks displaying
        if (this.blocks.length) {
            this.transformEntries();
        }
    }

    public dateChanged() {
        _.defer(() => this.buildTimeline());
    }

    /**
     * Passed into `c-time-block` elements. Allows you to set spot for placeholder
     * new time entry while popover is showing.
     *
     * @param isoTime ISO Date string
     * @param mouseOffset How many pixels down the mouse was clicked
     */
    public calculatePlaceholder(isoTime: string, mouseOffset: number): [string, number] {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const pxPerMinute = BLOCK_HEIGHT / zoomLevelData.minutes;
        const offsetMinutes = Math.floor(mouseOffset / pxPerMinute);

        // Buffer around clicked time to snap
        const clickedTime = moment(isoTime)
            .add(offsetMinutes, 'minutes')
            .startOf('minute');
        const startTime = moment(clickedTime).subtract(zoomLevelData.minutes, 'minutes');
        const endTime = moment(clickedTime).add(zoomLevelData.minutes, 'minutes');

        let matchingEntries: ITimeEntry[] = [];

        if (this.snapAdd) {
            if (this.timeView === 'day') {
                matchingEntries = _.filter(this.transformedEntries, entry => {
                    return moment(entry.end).isBetween(startTime, endTime, null, '[)');
                });
            } else {
                _.forEach(this.displayDays, day => {
                    const dayMatches = _.filter(day.entries, entry => {
                        return moment(entry.end).isBetween(startTime, endTime, null, '[)');
                    });

                    matchingEntries = [...matchingEntries, ...dayMatches];
                });
            }
        }

        let offset = 0;

        if (!matchingEntries.length) {
            const isoTimeMoment = moment(isoTime);
            const halfBlock = Math.floor(BLOCK_HEIGHT / 2);

            if (mouseOffset >= halfBlock) {
                offset = halfBlock;
                isoTimeMoment.add(Math.floor(halfBlock / pxPerMinute), 'minutes');
            }

            return [isoTimeMoment.toISOString(), offset];
        }

        const sortedEntries = _.sortBy(matchingEntries, entry =>
            Math.abs(moment(entry.end).diff(clickedTime, 'minutes')),
        );
        const firstEntry = _.first(sortedEntries);
        const diff = Math.ceil(moment(isoTime).diff(firstEntry.end, 'minutes')) * -1;
        offset = Math.floor(diff * pxPerMinute) - 1;

        return [firstEntry.end, offset];
    }

    /**
     * Passed into `c-time-block` elements. Allows you to check if clicking in a block
     * will allow you to create a new entry.
     *
     * @param isoTime ISO Date string
     */
    public checkPreventAdd(isoTime) {
        if (!_.isFunction(this.preventCreate)) {
            return false;
        }

        return this.preventCreate({isoTime});
    }

    /**
     * Changes week view to day view and navigates to that date
     *
     * @param day ISO Date string of date clicked on in week view
     */
    public dayClick(day) {
        this.date = moment(day).toISOString();
        this.timeView = 'day';
    }

    // Private methods

    /**
     * If zoom goes out of bounds, fix it here
     */
    private fixZoomBounds() {
        if (this.timeView !== 'day' && this.timeView !== 'week') {
            return;
        }

        if (this.zoomLevel > 5) {
            this.zoomLevel = 5;
        } else if (this.zoomLevel < 0) {
            this.zoomLevel = 0;
        }
    }

    /**
     * Scroll to a designated spot on the timeline
     */
    private scrollToSpot() {
        if (!this.parentScrollElem) {
            this.parentScrollElem = $(`#${this.id}`)
                .closest($(`#${this.id}`)
                .parents()
                .filter((_i, e) => $(e).css('overflow-y') === 'auto'));
        }

        if (this.scrollCurrentTime) {
            this.scrollCurrentTime = false;

            let currentTimeTop = -1;

            if (this.timeView === 'day') {
                currentTimeTop = this.currentTimeLine;
            } else {
                _.forEach(this.displayDays, day => {
                    if (day.currentTimeLine > -1) {
                        currentTimeTop = day.currentTimeLine;
                        return false;
                    }
                });
            }

            if (currentTimeTop > -1) {
                const scrollTop = currentTimeTop - (this.parentScrollElem.outerHeight() / 2);
                this.parentScrollElem.animate({scrollTop}, 500);
            }
        }
    }

    /**
     * Put together the time blocks needed for the different views
     */
    private buildBlocks() {
        this.fixZoomBounds();

        let date: any = this.date ? moment(this.date) : moment();
        date = date.startOf('day').toISOString();

        const [displayBlocksDay, startIndexes] = this.calculateBlocksNumStart();

        switch (this.timeView) {
            case 'day':
                this.blocks = this.buildDayBlocks(displayBlocksDay, startIndexes, date, this.scrollDays);
                break;
            case 'week':
                date = moment(date)
                    .startOf('week')
                    .toISOString();
                this.displayDays = [];

                this.blocks = this.buildDayBlocks(displayBlocksDay, startIndexes, date);

                _.times(this.days, () => {
                    const dayOfWeek: ITimeDay = {
                        date,
                        blocks: this.buildDayBlocks(displayBlocksDay, startIndexes, date),
                        entries: [],
                        today: moment().format('MMDDYYYY') === moment(date).format('MMDDYYYY'),
                    };

                    this.displayDays.push(dayOfWeek);
                    date = moment(date)
                        .add(1, 'days')
                        .toISOString();
                });
                break;
            case 'month':
                date = moment(date)
                    .startOf('month')
                    .toISOString();
            default:
                break;
        }
    }

    /**
     * Generate blocks for the 'day' view
     *
     * @param blocksPerDay Number: How many blocks per day being generated
     * @param startIndexes Number[]: When to start each day
     * @param isoDate ISO Date string: Start of the day
     * @param numOfDays Number: Number of days to show data (scrolling with lazyloaded data)
     */
    private buildDayBlocks(blocksPerDay, startIndexes, isoDate: string, numOfDays = 1): ITimeBlock[] {
        const blocks: ITimeBlock[] = [];
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const [startHourIndex, startMinuteIndex] = startIndexes;
        const startHour = zoomLevelData.allowedHours[startHourIndex];
        const startMinute = zoomLevelData.allowedMinutes[startMinuteIndex];

        _.times(numOfDays, index => {
            const currentTime = isoDate ? moment(isoDate) : moment();

            currentTime
                .startOf('day')
                .add(index, 'days')
                .add(startHour, 'hours')
                .add(startMinute, 'minutes');

            _.times(blocksPerDay, () => {
                blocks.push({
                    isoTime: currentTime.toISOString(),
                    time: currentTime.format('HH:mm'),
                });

                currentTime.add(zoomLevelData.minutes, 'minutes');
            });
        });

        return blocks;
    }

    /**
     * Calculate how many blocks to display per day & what indexes to start at
     */
    private calculateBlocksNumStart(): [number, number[]] {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const displayBlocksDay = zoomLevelData.defaultTimeBlocks;
        let startIndexes = [0, 0];

        if (!this.startTime && !this.endTime && !this.offsetTime) {
            return [displayBlocksDay, startIndexes];
        }

        if (this.offsetTime) {
            const [offsetHour, offsetMinute] = this.getHoursMinutes(this.offsetTime);
            return [displayBlocksDay, [offsetHour, offsetMinute]];
        }

        const [startHour, startMinute] = this.getHoursMinutes(this.startTime);
        const [endHour, endMinute] = this.getHoursMinutes(this.endTime, true);

        if (moment(`${endHour}:${endMinute}`, 'h:mm').isSameOrBefore(moment(`${startHour}:${startMinute}`, 'h:mm'))) {
            return [displayBlocksDay, startIndexes];
        }

        let skippingBlocks = 0;

        if (startHour > 0 || startMinute > 0) {
            const startHourIndex = _.findIndex(zoomLevelData.allowedHours, allowedHour => allowedHour === startHour);
            const startMinuteIndex = _.findIndex(
                zoomLevelData.allowedMinutes,
                allowedMinute => allowedMinute === startMinute,
            );

            if (startHourIndex) {
                skippingBlocks += startHourIndex * zoomLevelData.allowedMinutes.length;
            }
            if (startMinuteIndex) {
                skippingBlocks += startMinuteIndex;
            }

            startIndexes = [startHourIndex, startMinuteIndex];
        }

        if (endHour > 0 || endMinute > 0) {
            const endHourIndex = _.findIndex(zoomLevelData.allowedHours, allowedHour => allowedHour === endHour) + 1;
            const endMinuteIndex =
                _.findIndex(zoomLevelData.allowedMinutes, allowedMinute => allowedMinute === endMinute) + 1;

            if (endHourIndex < zoomLevelData.allowedHours.length) {
                skippingBlocks +=
                    (zoomLevelData.allowedHours.length - endHourIndex) * zoomLevelData.allowedMinutes.length;
            }
            if (endMinuteIndex < zoomLevelData.allowedMinutes.length) {
                skippingBlocks += zoomLevelData.allowedMinutes.length - endMinuteIndex;
            }
        }

        return [displayBlocksDay - skippingBlocks, startIndexes];
    }

    /**
     * Parse out the hours and minutes passed in
     *
     * @param time String: Time shown in the following format ('0700', '07', '7', '0730', '730', ect.)
     * @param end Boolean: If the time is for the tail end of the display
     */
    private getHoursMinutes(time: string = '', end?: boolean): [number, number] {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        let timeClone = time;

        if (!_.isString(timeClone)) {
            timeClone = _.toString(timeClone);
        }

        if (!timeClone.match(TIME_REGEX)) {
            if (!end) {
                return [0, 0];
            }

            return [_.last(zoomLevelData.allowedHours), _.last(zoomLevelData.allowedMinutes)];
        }

        let hour = 0;
        let minute = 0;

        switch (timeClone.length) {
            case 4:
                hour = parseInt(timeClone.slice(0, 2), 10);
                minute = parseInt(timeClone.slice(2), 10);
                break;
            case 3:
                hour = parseInt(timeClone.slice(0, 1), 10);
                minute = parseInt(timeClone.slice(1), 10);
                break;
            case 2:
            case 1:
            default:
                hour = parseInt(timeClone, 10);
                break;
        }

        if (zoomLevelData.allowedMinutes.indexOf(minute) === -1) {
            if (minute > _.last(zoomLevelData.allowedMinutes)) {
                minute = _.last(zoomLevelData.allowedMinutes);
            } else {
                for (let a = 0; a < zoomLevelData.allowedMinutes.length - 1; a += 1) {
                    if (minute > zoomLevelData.allowedMinutes[a] && minute < zoomLevelData.allowedMinutes[a + 1]) {
                        if (end) {
                            minute = zoomLevelData.allowedMinutes[a + 1];
                        } else {
                            minute = zoomLevelData.allowedMinutes[a];
                        }
                        break;
                    }
                }
            }
        }

        if (zoomLevelData.allowedHours.indexOf(hour) === -1) {
            if (hour > _.last(zoomLevelData.allowedHours)) {
                hour = _.last(zoomLevelData.allowedHours);
            } else {
                for (let a = 0; a < zoomLevelData.allowedHours.length - 1; a += 1) {
                    if (hour > zoomLevelData.allowedHours[a] && hour < zoomLevelData.allowedHours[a + 1]) {
                        if (end) {
                            hour = zoomLevelData.allowedHours[a + 1];
                        } else {
                            hour = zoomLevelData.allowedHours[a];
                        }
                        break;
                    }
                }
            }
        }

        return [hour, minute];
    }

    /**
     * Calculate the times for when the day starts
     */
    private getDayStartEndTimes(): [Moment, Moment] {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];

        let startTime;
        let endTime;
        let addHours;
        let addMinutes;

        if (this.timeView === 'day') {
            if (this.date) {
                startTime = moment(this.date).startOf('day');
            } else {
                startTime = moment().startOf('day');
            }
        }

        if (this.timeView === 'week') {
            if (this.date) {
                startTime = moment(this.date).startOf('week');
            } else {
                startTime = moment().startOf('week');
            }
        }

        const blockTime = this.blocks[0].time;
        const numOfBlocks = this.blocks.length;
        addHours = moment(blockTime, 'HH:mm').format('H');
        addMinutes = moment(blockTime, 'HH:mm').format('m');

        startTime.add(addHours, 'hours').add(addMinutes, 'minutes');
        endTime = moment(startTime).add(numOfBlocks * zoomLevelData.minutes, 'minutes');

        return [startTime, endTime];
    }

    /**
     * Map a day of sorted entries to the ITimeEntry type
     *
     * @param sortedEntries any[]: Array of entries sorted by start time
     * @param pxPerMinute number: The number of pixels it takes to display a minute
     * @param startTime Moment: start time of the day
     * @param endTime Moment: end time of the day
     */
    private mapEntries(sortedEntries: any[], pxPerMinute: number, startTime, endTime): ITimeEntry[] {
        let nestedEntryWidth = 80;

        return _.map(
            sortedEntries,
            (entry: ITimeEntry, index: number): ITimeEntry => {
                if (!this.date) {
                    entry.start = moment(entry.start, 'hmm').toISOString();
                }

                entry.startTime = moment(entry.start).format('HH:mm');

                if (!entry.end) {
                    entry.end = moment(entry.start)
                        .add(entry.duration, 'seconds')
                        .toISOString();
                }

                entry.endTime = moment(entry.end).format('HH:mm');

                let diff = moment(entry.start).diff(startTime, 'seconds');
                const diffEnd = moment(endTime).diff(entry.end, 'seconds');

                // If entry starts before the day make sure it only displays what it needs
                if (diff < 0) {
                    entry.start = moment(startTime).toISOString();
                    entry.duration += diff;
                    diff = 0;
                }

                // If entry ends after the day make sure it only displays what it needs
                if (diffEnd < 0) {
                    entry.duration += diffEnd;
                }

                entry.top = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
                entry.height = (entry.duration / SECONDS_IN_MINUTE) * pxPerMinute;

                if (this.editEntryViewModel) {
                    entry.contentViewModel = this.editEntryViewModel;
                }

                const width = this.timeView === 'week' ? 30 : 60;
                const nextEntries = sortedEntries.slice(index + 1);

                const sameTimeEntries = _.filter(nextEntries, filterEntry => {
                    if (!filterEntry.end) {
                        filterEntry.end = moment(filterEntry.start)
                            .add(filterEntry.duration, 'seconds')
                            .toISOString();
                    }

                    // Not the same time if it's later in the minute. Gives a buffer
                    return (
                        moment(entry.start).isSame(filterEntry.start, 'minute') &&
                        !moment(filterEntry.start).isAfter(entry.end, 'second')
                    );
                });

                const nestedEntries = _.filter(nextEntries, filterEntry => {
                    if (!filterEntry.end) {
                        filterEntry.end = moment(filterEntry.start)
                            .add(filterEntry.duration, 'seconds')
                            .toISOString();
                    }

                    // 10 second buffer
                    return moment(filterEntry.start).isBetween(
                        entry.start,
                        moment(entry.end).subtract(10, 'seconds'),
                        null,
                        '()',
                    );
                });

                const nestedEntry = _.first(nestedEntries); // We only care about the first one

                if (!entry.widthCalc && sameTimeEntries.length) {
                    const totalSameTime = sameTimeEntries.length + 1;
                    const entryWidth = 100 / totalSameTime;

                    // We don't want to use these props if we are showing multiple things at the same time
                    entry.sizeDay = null;
                    entry.sizeWeek = null;

                    entry.widthCalc = `calc(${entryWidth}% - ${width / totalSameTime}px - 5px)`;

                    _.forEachRight(sameTimeEntries, (sameTimeEntry, sameTimeIndex) => {
                        const offsetIndex = sameTimeIndex + 1;

                        // We don't want to use these props if we are showing multiple things at the same time
                        sameTimeEntry.small = null;
                        sameTimeEntry.expandable = null;

                        sameTimeEntry.widthCalc = `calc(${entryWidth}% - ${width / totalSameTime}px - 5px)`;
                        sameTimeEntry.rightCalc = `calc(${offsetIndex * entryWidth}% - ${(width / totalSameTime) *
                            offsetIndex}px)`;
                    });
                } else if (nestedEntry) {
                    if (nestedEntryWidth >= 40) {
                        nestedEntry.widthCalc = `calc(${nestedEntryWidth}% - ${width}px)`;
                        nestedEntryWidth -= 20;
                    } else {
                        nestedEntryWidth = 80; // Reset
                    }
                }

                return entry;
            },
        );
    }
}
