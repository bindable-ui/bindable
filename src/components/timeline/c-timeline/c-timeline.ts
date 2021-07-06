/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject, bindable, bindingMode, containerless, TaskQueue} from 'aurelia-framework';
import * as moment from 'moment-timezone';

import {ITimeBlock, ITimeDay, ITimeEntry, ITimeEntryBasic, ITimelineActions} from './c-timeline-interfaces';
import {cleanupWorkers, filterMapEntries, mapEntries} from './workers';

import {authState} from '../../../decorators/auth-state';
import {generateRandom} from '../../../helpers/generate-random';
import {sleep} from '../../../helpers/sleep';
import {CToastsService} from '../../toasts/c-toasts/c-toasts-service';

import * as CTimelineWeekContainerStyles from '../c-timeline-week-container/c-timeline-week-container.css.json';

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

export const BLOCK_HEIGHT = 50;

const DEFAULT_ZOOM = 2;
const MINUTES_IN_DAY = 1440;
const HOURS_IN_DAY = 24;
const TIME_REGEX = /^[0-9]{1,4}$/;
const SECONDS_IN_MINUTE = 60;
const MILLIS_IN_SECOND = 1000;
const DATE_FORMAT = 'MMDDYYYY';

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
    public snapAdd: boolean = false;

    @bindable
    public preventCreate;

    @bindable
    public editEntryViewModel: string = null;

    @bindable
    public newEntryViewModel: string = null;

    @bindable
    public timezone: string = null;

    @bindable
    public scrollTime: string = null;

    @bindable
    public forceUpdate: string = null;

    @bindable
    public forcePoll: string = null;

    @bindable
    public pollingInterval: number = MILLIS_IN_SECOND * SECONDS_IN_MINUTE;

    public blocks: ITimeBlock[] = [];
    public displayDays: ITimeDay[] = [];
    public currentTimeLineTracker = null;
    public pollingTracker = null;
    public scrollCurrentTime: boolean = true;
    public scrollLastSpot: boolean = false;
    public parentScrollElem: JQuery<HTMLElement> = null;
    public id = generateRandom();
    public currentScroll: number = 0;
    public preventScrollCheck: boolean = true;
    public placeholderEntry: any;
    public pxPerMinute: number;
    public tzOffset: number;

    /**
     * Function that fires when you click on the timeline
     */
    public togglePopover = _.debounce(
        ($event, day: ITimeDay) => {
            if (
                // @ts-ignore
                this._state === 'disabled' ||
                (_.isBoolean(this.preventCreate) && this.preventCreate)
            ) {
                return;
            }

            let isoTime;

            const dayWeek = day;
            const dayDate = dayWeek.date;
            const [zoomLevelData, pxPerMinute] = this.getZoomLevelData();
            const [blockStart] = this.getDayStartEndTimes(dayDate);

            const relativeY = $event.pageY - this.parentScrollElem.offset().top;
            // On week view, get the height of the date names so we can offset
            const elemDiff = $(`.${CTimelineWeekContainerStyles.dates}`).outerHeight();
            const pxDown = relativeY + this.parentScrollElem.scrollTop() - elemDiff;
            const blockIndex = Math.floor(pxDown / BLOCK_HEIGHT);

            dayWeek.newItem = null;
            isoTime = dayWeek.blocks[blockIndex].isoTime;

            _.forEach(this.displayDays, weekDay => (weekDay.newItem = null));

            const minutesFromTop = pxDown / pxPerMinute;

            const clickedTime = moment(blockStart)
                .add(minutesFromTop, 'minutes')
                .startOf(this.zoomLevel < 5 ? 'minute' : 'second');
            const startTime: Moment = moment(clickedTime).subtract(zoomLevelData.minutes / 2, 'minutes');
            const endTime: Moment = moment(clickedTime).add(zoomLevelData.minutes / 2, 'minutes');

            const matchingEntries: ITimeEntry[] = [];

            const entries = dayWeek.entries;

            if (this.snapAdd) {
                (matchingEntries as any[]) = _.filter(
                    entries,
                    entry =>
                        !entry.noSnap &&
                        moment(entry.start)
                            .add(entry.duration, 'seconds')
                            .isBetween(startTime, endTime, null, '[)'),
                );
            }

            let top = blockIndex * BLOCK_HEIGHT;
            let startIso = null;

            if (!matchingEntries.length) {
                const isoTimeMoment = moment(isoTime);
                const halfBlock = BLOCK_HEIGHT / 2;

                if ($event.layerY >= halfBlock) {
                    top += halfBlock;
                    isoTimeMoment.add((halfBlock / pxPerMinute) * SECONDS_IN_MINUTE, 'seconds');
                }

                startIso = isoTimeMoment.toISOString();
            } else {
                const sortedEntries = _.sortBy(matchingEntries, entry =>
                    Math.abs(
                        moment(entry.start)
                            .add(entry.duration, 'seconds')
                            .diff(clickedTime, 'seconds'),
                    ),
                );
                const firstEntry = _.first(sortedEntries);
                const diff =
                    Math.ceil(
                        moment(isoTime).diff(moment(firstEntry.start).add(firstEntry.duration, 'seconds'), 'seconds'),
                    ) * -1;

                top += Math.floor((diff / SECONDS_IN_MINUTE) * pxPerMinute);
                startIso = moment(firstEntry.start)
                    .add(firstEntry.duration, 'seconds')
                    .add(1, 'ms')
                    .toISOString();
            }

            if (_.isFunction(this.preventCreate) && this.preventCreate({isoTime: startIso})) {
                return;
            }

            const newItem: any = {
                top,
                color: 'secondary',
                height: 50,
                isoTime: startIso,
                placeholder: true,
                title: `${moment(startIso).format(this.zoomLevel < 5 ? 'HH:mm' : 'HH:mm:ss')} (New Item)`,
                zoomLevel: this.zoomLevel,
            };

            if (this.newEntryViewModel) {
                newItem.contentViewModel = this.newEntryViewModel;
            }

            dayWeek.newItem = _.cloneDeep(newItem);

            _.defer(() => {
                if (dayWeek.placeholderEntry) {
                    dayWeek.placeholderEntry.openPopover();
                }
            });
        },
        500,
        {leading: true, trailing: false},
    );

    /**
     * Render the timeline on a delay
     */
    private renderTimeline = _.throttle(
        () => {
            // If there is no delay, the browser can choke up and doesn't
            // display the loading indicator until the very end
            // 50ms wait seems to be a good middle ground
            this.buildTimeline();
        },
        50,
        {trailing: true, leading: false},
    );

    /**
     * Track scrolling position
     */
    private trackPosistion = _.debounce(
        () => {
            if (this.isLoading || this.preventScrollCheck) {
                return;
            }

            const [, pxPerMinute] = this.getZoomLevelData();
            const parentHeight = this.parentScrollElem.outerHeight();
            const currentPos = this.parentScrollElem.scrollTop() + parentHeight / 2;

            if (parentHeight >= $(`#${this.id}`).outerHeight()) {
                return;
            }

            this.currentScroll = currentPos / pxPerMinute; // Minutes from the middle of the timeline view
        },
        1000,
        {trailing: true, leading: false},
    );

    constructor(private taskQueue: TaskQueue, private notification: CToastsService) {
        // Generate allowed times at each level
        mapAllowedTimes();
    }

    public attached() {
        // Trigger the default TZ stuff
        if (!this.timezone) {
            this.setupTimezone();
        }

        this.getParentScrollElem();
        this.renderTimeline();

        // Wait for blocks to be built
        _.delay(() => {
            this.currentTimeLineTracker = setInterval(() => {
                this.calculateCurrentTimeLine();
            }, (SECONDS_IN_MINUTE / 2) * 1000);
        }, 100);

        $(this.parentScrollElem).on('scroll', this.trackPosistion);
    }

    public detached() {
        if (this.currentTimeLineTracker) {
            clearInterval(this.currentTimeLineTracker);
        }

        if (this.pollingTracker) {
            clearInterval(this.pollingTracker);
        }

        if (this.parentScrollElem) {
            $(this.parentScrollElem).off('scroll', this.trackPosistion);
        }

        cleanupWorkers();
    }

    // Observable properties
    // Listen to rebuild data
    public zoomLevelChanged(_new, old) {
        [, this.pxPerMinute] = this.getZoomLevelData();

        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        this.scrollLastSpot = true;
        this.renderTimeline();
    }

    public timeViewChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        this.renderTimeline();
    }

    public daysChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        if (this.timeView === 'week') {
            this.renderTimeline();
        }
    }

    public entriesChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        // Don't update unless there are blocks displaying
        if (this.blocks.length) {
            this.transformEntries();
        }
    }

    public dateChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        this.renderTimeline();
    }

    public timezoneChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        this.setupTimezone(true);
    }

    public scrollTimeChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        const scrollTime = moment(this.scrollTime, 'HH:mm');

        if (this.scrollTime && (!scrollTime.isValid() || this.isLoading)) {
            return;
        }

        // Wait until the throttle has hit for building the blocks
        _.delay(() => this.scrollToSpot(this.scrollTime), 50);
    }

    public forcePollChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        // Start interval over again
        this.setupPolling();
        this.pollDays();
    }

    public forceUpdateChanged(_new, old) {
        // Doesn't need to run on init
        if (_.isUndefined(old)) {
            return;
        }

        _.forEach(this.displayDays, day => (day.entries = null));
        _.delay(() => this.renderTimeline(), 50);
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
     * Return the offset in minutes from the selected timezone to the browser timezone
     */
    private getTzOffset(): number {
        const browserOffset = moment.tz.zone(moment.tz.guess()).utcOffset(moment());
        const offset = moment().utcOffset();

        return browserOffset + offset;
    }

    /**
     * Sets up the timezone data
     *
     * @param updateDate Boolean value to determine whether or not to update `this.date`
     */
    private setupTimezone(updateDate?: boolean) {
        const tzNames = moment.tz.names();
        const tzIndex = tzNames.findIndex(name => name === this.timezone);

        if (tzIndex > -1) {
            moment.tz.setDefault(this.timezone);
        } else {
            moment.tz.setDefault();
        }

        this.tzOffset = this.getTzOffset();

        if (updateDate) {
            // This prevents issues where the date will look in the past and throw off the three-day view
            this.date = moment(this.date)
                .add(this.tzOffset * -1, 'minutes')
                .toISOString();
        }
    }

    /**
     * Get the closest parent element that scrolls
     */
    private getParentScrollElem() {
        this.parentScrollElem = $(`#${this.id}`).closest(
            $(`#${this.id}`)
                .parents()
                .filter((_i, e) => $(e).css('overflow-y') === 'auto'),
        );
    }

    /**
     * If zoom goes out of bounds, fix it here
     */
    private fixZoomBounds() {
        if (this.timeView === 'month') {
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
    private scrollToSpot(time?) {
        _.defer(() => {
            const [, pxPerMinute] = this.getZoomLevelData();

            let scrollTop = 0;

            if (time) {
                const now = moment(time, 'HH:mm');

                let timeToScroll = -1;

                _.forEach(this.displayDays, day => {
                    if (now.isBetween(day.startTime, day.endTime, null, '()')) {
                        const diff = now.diff(day.startTime, 'seconds');
                        timeToScroll = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
                        return false;
                    }
                });

                if (timeToScroll > -1) {
                    scrollTop = timeToScroll - this.parentScrollElem.outerHeight() / 2;
                    this.currentScroll = timeToScroll / pxPerMinute;
                    this.parentScrollElem.animate({scrollTop}, 500);
                }
            } else if (this.scrollCurrentTime) {
                this.scrollCurrentTime = false;

                let currentTimeTop = -1;

                _.forEach(this.displayDays, day => {
                    if (day.currentTimeLine > -1 && moment(day.date).isSame(this.date, 'day')) {
                        currentTimeTop = day.currentTimeLine;
                        return false;
                    }
                });

                if (currentTimeTop > -1) {
                    scrollTop = currentTimeTop - this.parentScrollElem.outerHeight() / 2;
                    this.currentScroll = currentTimeTop / pxPerMinute;
                    this.parentScrollElem.animate({scrollTop}, 500);
                }
            } else if (this.scrollLastSpot) {
                this.scrollLastSpot = false;
                scrollTop = this.currentScroll * pxPerMinute - this.parentScrollElem.outerHeight() / 2;
                this.parentScrollElem.animate({scrollTop}, 500);
            }

            // To be after the scroll animation
            _.delay(() => {
                this.preventScrollCheck = false;
                this.trackPosistion.cancel();
            }, 501);
        });
    }

    /**
     * Go through each display day and process polling updates.
     * Only works if `actions.pollEntries` is a function
     */
    private pollDays() {
        if (!_.isFunction(this.actions.pollEntries)) {
            return;
        }

        _.forEach(this.displayDays, async day => {
            let entries;

            // If the zoom changed or something let that finish rendering first
            while (day.isLoading) {
                await sleep(100);
            }

            try {
                entries = await this.actions.pollEntries(day.startTime, day.endTime, day.entries);
            } catch (e) {
                entries = [];
            }

            if (_.isEqual(entries, day.entries) || _.isNull(entries)) {
                return;
            }

            day.entries = await filterMapEntries(
                entries,
                this.pxPerMinute,
                day.startTime,
                day.endTime,
                this.timeView,
                this.editEntryViewModel,
                day.date,
                this.tzOffset,
                this.zoomLevel,
            );
        });
    }

    /**
     * Put together the time blocks needed for the different views
     */
    private async buildBlocks() {
        this.fixZoomBounds();

        let date: any = this.date ? moment(this.date) : moment();
        date = date.startOf('day');

        let startTime;
        let endTime;
        let dayOfWeek: ITimeDay;

        const [displayBlocksDay, startIndexes] = this.calculateBlocksNumStart();

        switch (this.timeView) {
            case 'day':
                this.blocks = this.buildDayBlocks(displayBlocksDay, startIndexes, date);
                [startTime, endTime] = this.getDayStartEndTimes();

                dayOfWeek = {
                    blocks: this.buildDayBlocks(displayBlocksDay, startIndexes, date),
                    date: date.toISOString(),
                    displayDate: date.format(DATE_FORMAT),
                    endTime: endTime.toISOString(),
                    entries: null,
                    hidden: false,
                    startTime: startTime.toISOString(),
                    today: moment().format(DATE_FORMAT) === moment(date).format(DATE_FORMAT),
                };

                this.updateDisplayDays(dayOfWeek);

                break;
            case 'week':
                date = moment(date).startOf('week');

                this.blocks = this.buildDayBlocks(displayBlocksDay, startIndexes, date);
                [startTime, endTime] = this.getDayStartEndTimes();

                for (let index = 0; index < this.days; index += 1) {
                    dayOfWeek = {
                        blocks: this.buildDayBlocks(displayBlocksDay, startIndexes, date),
                        date: date.toISOString(),
                        displayDate: date.format(DATE_FORMAT),
                        endTime: endTime.toISOString(),
                        entries: null,
                        hidden: false,
                        startTime: startTime.toISOString(),
                        today: moment().format(DATE_FORMAT) === moment(date).format(DATE_FORMAT),
                    };

                    this.updateDisplayDays(dayOfWeek, true);

                    startTime.add(1, 'day');
                    endTime.add(1, 'day');
                    date.add(1, 'day');
                }
                break;
            case 'three-day':
                date = moment(date)
                    .subtract(1, 'day')
                    .startOf('day');

                this.blocks = this.buildDayBlocks(displayBlocksDay, startIndexes, date);
                [startTime, endTime] = this.getDayStartEndTimes();

                for (let index = 0; index < 3; index += 1) {
                    dayOfWeek = {
                        blocks: this.buildDayBlocks(displayBlocksDay, startIndexes, date),
                        date: date.toISOString(),
                        displayDate: date.format(DATE_FORMAT),
                        endTime: endTime.toISOString(),
                        entries: null,
                        hidden: false,
                        startTime: startTime.toISOString(),
                        today: moment().format(DATE_FORMAT) === moment(date).format(DATE_FORMAT),
                    };

                    this.updateDisplayDays(dayOfWeek, true);

                    startTime.add(1, 'day');
                    endTime.add(1, 'day');
                    date.add(1, 'day');
                }
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
     * Inserts a day into the proper chronilogical order in the displayDays array
     *
     * @param dayOfWeek Current ITimeDay object
     */
    private insertDayIntoWeek(dayOfWeek: ITimeDay) {
        if (!this.displayDays.length) {
            this.displayDays.push(dayOfWeek);
            return;
        }

        let a;

        for (a = 0; a < this.displayDays.length; a += 1) {
            if (
                moment(dayOfWeek.displayDate, DATE_FORMAT).isBefore(
                    moment(this.displayDays[a].displayDate, DATE_FORMAT),
                )
            ) {
                break;
            }
        }

        // Using splice for Aurelia to detect a change
        this.displayDays.splice(a, 0, dayOfWeek);
    }

    /**
     * Sets up the polling for individual days
     */
    private setupPolling() {
        if (this.entries.length) {
            return;
        }

        if (!this.pollingTracker) {
            this.pollingTracker = setInterval(() => this.pollDays(), this.pollingInterval);
        }
    }

    /**
     * Send in a ITimeDay and it will update the existing displayDays array to properly add it or update other items
     * in the array to hide them.
     *
     * @param dayOfWeek Current ITimeDay object
     * @param weekDay Is part of 3-Day or Week view
     */
    private updateDisplayDays(dayOfWeek: ITimeDay, weekDay?: boolean) {
        let existingDateIndex = _.findIndex(this.displayDays, day => day.displayDate === dayOfWeek.displayDate);

        if (existingDateIndex === -1) {
            this.insertDayIntoWeek(dayOfWeek);
        }

        // Get this again now that it is inserted into the displayDays array
        existingDateIndex = _.findIndex(this.displayDays, day => day.displayDate === dayOfWeek.displayDate);

        const newDay = _.cloneDeep(dayOfWeek);
        newDay.entries = _.cloneDeep(this.displayDays[existingDateIndex].entries);

        let minDay;
        let maxDay;

        if (this.timeView === 'week') {
            minDay = moment(this.date)
                .startOf('week')
                .format(DATE_FORMAT);
            maxDay = moment(minDay, DATE_FORMAT)
                .add(this.days, 'days')
                .format(DATE_FORMAT);
        } else if (this.timeView === 'three-day') {
            minDay = moment(this.date)
                .subtract(1, 'day')
                .format(DATE_FORMAT);
            maxDay = moment(this.date)
                .add(1, 'day')
                .format(DATE_FORMAT);
        }

        for (let a = 0; a < this.displayDays.length; a += 1) {
            if (!weekDay) {
                // Single day view
                if (a !== existingDateIndex) {
                    this.displayDays[a].hidden = true;
                }
            } else {
                // 3-day or Week view
                if (
                    moment(this.displayDays[a].displayDate, DATE_FORMAT).isAfter(moment(maxDay, DATE_FORMAT)) ||
                    moment(this.displayDays[a].displayDate, DATE_FORMAT).isBefore(moment(minDay, DATE_FORMAT))
                ) {
                    this.displayDays[a].hidden = true;
                }
            }

            // Using splice for Aurelia to detect a change
            if (a === existingDateIndex) {
                this.displayDays.splice(a, 1, newDay);
            } else {
                this.displayDays.splice(a, 1, this.displayDays[a]);
            }
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
    private getDayStartEndTimes(date?): [Moment, Moment] {
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

        if (this.timeView === 'three-day') {
            if (this.date) {
                startTime = moment(this.date)
                    .subtract(1, 'day')
                    .startOf('day');
            } else {
                startTime = moment()
                    .subtract(1, 'day')
                    .startOf('day');
            }
        }

        if (date) {
            startTime = moment(date).startOf('day');
        }

        const blockTime = this.blocks[0].time;
        const numOfBlocks = this.blocks.length;
        addHours = moment(blockTime, 'HH:mm').format('H');
        addMinutes = moment(blockTime, 'HH:mm').format('m');

        startTime.add(addHours, 'hours').add(addMinutes, 'minutes');
        endTime = moment(startTime).add(numOfBlocks * zoomLevelData.minutes, 'minutes');

        return [moment(startTime), moment(endTime)];
    }

    /**
     * Returns the data for the current zoom level
     */
    private getZoomLevelData() {
        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const pxPerMinute = BLOCK_HEIGHT / zoomLevelData.minutes;

        return [zoomLevelData, pxPerMinute];
    }

    /**
     * Figure out where to put the current time indicator
     */
    private calculateCurrentTimeLine() {
        if (this.timeView === 'month') {
            return;
        }

        const zoomLevelData = ZOOM_LEVELS[this.zoomLevel];
        const pxPerMinute = BLOCK_HEIGHT / zoomLevelData.minutes;

        const now = moment();

        _.forEach(this.displayDays, day => {
            if (now.isBetween(day.startTime, day.endTime, null, '()')) {
                const diff = now.diff(day.startTime, 'seconds');
                day.currentTimeLine = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
            } else {
                day.currentTimeLine = -1;
            }
        });
    }

    /**
     * Build out the timeline.
     */
    private buildTimeline() {
        this.buildBlocks();
        this.calculateCurrentTimeLine();

        this.getAndTransformEntries();
        this.setupPolling();

        this.taskQueue.queueMicroTask(() => {
            this.trackPosistion.cancel();
            this.preventScrollCheck = true;

            _.defer(() => {
                this.trackPosistion.cancel();

                if (!this.scrollLastSpot) {
                    this.scrollCurrentTime = true;
                }
                this.scrollToSpot();
            });
        });
    }

    /**
     * Take entries that are input and transform them into entries the calendar can use
     */
    private transformEntries() {
        if (this.actions.getEntries || !this.entries.length) {
            return;
        }

        try {
            if (this.timeView !== 'month') {
                _.forEach(this.displayDays, async day => {
                    if (day.isLoading) {
                        return;
                    }

                    if (!day.entries) {
                        day.isLoading = true;
                    }

                    day.entries = await filterMapEntries(
                        this.entries,
                        this.pxPerMinute,
                        day.startTime,
                        day.endTime,
                        this.timeView,
                        this.editEntryViewModel,
                        day.date,
                        this.tzOffset,
                        this.zoomLevel,
                    );

                    this.taskQueue.queueMicroTask(() => {
                        day.isLoading = false;
                    });
                });
            }
        } catch (e) {
            this.notification.error('There was an error parsing the entries. Please try again.');
        }
    }

    /**
     * Will get entries per day if `actions.getEntries` is a function.
     * Otherwise will just process the `entries` that were passed in.
     */
    private getAndTransformEntries() {
        // If they just hand in a bucket of entries, handle that
        if (this.entries.length) {
            this.transformEntries();
            return;
        }

        if (!_.isFunction(this.actions.getEntries)) {
            return;
        }

        // Get data for every single date
        _.forEach(this.displayDays, async day => {
            if (day.isLoading) {
                return;
            }

            day.isLoading = true;

            // Just get the data once. Re-render the rest of the time
            if (_.isNull(day.entries)) {
                // Get the data
                let entries;

                try {
                    entries = await this.actions.getEntries(day.startTime, day.endTime);
                } catch (e) {
                    entries = [];
                }

                day.entries = await filterMapEntries(
                    entries,
                    this.pxPerMinute,
                    day.startTime,
                    day.endTime,
                    this.timeView,
                    this.editEntryViewModel,
                    day.date,
                    this.tzOffset,
                    this.zoomLevel,
                );
            } else if (day.entries.length) {
                // Update existing data
                day.entries = await mapEntries(
                    day.entries,
                    this.pxPerMinute,
                    day.startTime,
                    day.endTime,
                    this.timeView,
                    this.editEntryViewModel,
                    day.date,
                    this.tzOffset,
                    this.zoomLevel,
                );
            }

            this.taskQueue.queueMicroTask(() => {
                day.isLoading = false;
            });
        });
    }
}
