/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {TaskQueue} from 'aurelia-framework';
import * as moment from 'moment';
import {instance, mock} from 'ts-mockito';

import {CTimeline, ZOOM_LEVELS} from './c-timeline';

import {CToastsService} from '../../toasts/c-toasts/c-toasts-service';

const taskQueue = mock(TaskQueue);
const toastsService = mock(CToastsService);

// Mock _.debounce and _.throttle
// @ts-ignore
jest.spyOn(_, 'debounce').mockImplementation(fn => fn);
// @ts-ignore
jest.spyOn(_, 'throttle').mockImplementation(fn => fn);

$.fn.outerHeight = jest.fn().mockImplementation(() => 0);

const now = moment('12/12/2020', 'MM/DD/YYYY')
    .startOf('day')
    .add(12, 'hours');
const startDay = moment(now)
    .startOf('day')
    .toISOString();

const sortedEntries: any[] = [
    {
        duration: 240,
        start: now.toISOString(),
    },
    {
        duration: 120,
        start: moment(now)
            .add(1, 'hour')
            .toISOString(),
    },
    {
        duration: 120,
        start: moment(now)
            .add(1, 'hour')
            .toISOString(),
    },
    {
        duration: 120,
        start: moment(now)
            .add(1, 'day')
            .toISOString(),
    },
];

describe('c-timeline-block element', () => {
    let component;

    describe('Before constructor', () => {
        describe('#mapAllowedTimes', () => {
            test('number of allowedHours not set yet', () => {
                expect(ZOOM_LEVELS[0].allowedHours).toBeFalsy();
            });

            test('number of allowedMinutes not set yet', () => {
                expect(ZOOM_LEVELS[0].allowedMinutes).toBeFalsy();
            });
        });
    });

    describe('Unit', () => {
        beforeEach(() => {
            jest.useFakeTimers();
            component = new CTimeline(instance(taskQueue), instance(toastsService));

            component.date = startDay;
            component.timeView = 'day';
            component.entries = sortedEntries;

            component.attached();

            component.parentScrollElem = {
                offset: () => ({top: 0}),
                scrollTop: () => 0,
            };
        });

        afterEach(() => {
            jest.runOnlyPendingTimers();
            jest.useRealTimers();
        });

        describe('#mapAllowedTimes', () => {
            test('correct number of allowedHours', () => {
                expect(ZOOM_LEVELS[0].allowedHours.length).toBe(12);
                expect(ZOOM_LEVELS[1].allowedHours.length).toBe(24);
                expect(ZOOM_LEVELS[2].allowedHours.length).toBe(24);
                expect(ZOOM_LEVELS[3].allowedHours.length).toBe(24);
                expect(ZOOM_LEVELS[4].allowedHours.length).toBe(24);
                expect(ZOOM_LEVELS[5].allowedHours.length).toBe(24);
            });

            test('correct number of allowedMinutes', () => {
                expect(ZOOM_LEVELS[0].allowedMinutes.length).toBe(1);
                expect(ZOOM_LEVELS[1].allowedMinutes.length).toBe(1);
                expect(ZOOM_LEVELS[2].allowedMinutes.length).toBe(2);
                expect(ZOOM_LEVELS[3].allowedMinutes.length).toBe(4);
                expect(ZOOM_LEVELS[4].allowedMinutes.length).toBe(12);
                expect(ZOOM_LEVELS[5].allowedMinutes.length).toBe(60);
            });
        });

        describe('#fixZoomBounds', () => {
            test('fix zoomLevel too high', () => {
                component.zoomLevel = 7;
                component.fixZoomBounds();
                expect(component.zoomLevel).toBe(5);
            });

            test('fix zoomLevel too low', () => {
                component.zoomLevel = -2;
                component.fixZoomBounds();
                expect(component.zoomLevel).toBe(0);
            });

            test('fix zoomLevel just right', () => {
                component.zoomLevel = 4;
                component.fixZoomBounds();
                expect(component.zoomLevel).toBe(4);
            });
        });

        describe('#togglePopover', () => {
            test('regular interval positioning', () => {
                const ev = {
                    layerY: 10,
                    pageY: 10,
                };

                component.togglePopover(ev, component.displayDays[0]);
                expect(component.displayDays[0].newItem.title).toBe('00:00 (New Item)');

                ev.layerY = 30;
                component.togglePopover(ev, component.displayDays[0]);
                expect(component.displayDays[0].newItem.title).toBe('00:15 (New Item)');

                ev.pageY = 60;
                component.togglePopover(ev, component.displayDays[0]);
                expect(component.displayDays[0].newItem.title).toBe('00:45 (New Item)');
            });

            test('snap add positioning', () => {
                const ev = {
                    layerY: 10,
                    pageY: 1600,
                };

                component.snapAdd = true;

                // No snapping
                component.togglePopover(ev, component.displayDays[0]);
                expect(component.displayDays[0].newItem.title).toBe('16:00 (New Item)');

                // Snapping
                ev.pageY = 1200;
                component.togglePopover(ev, component.displayDays[0]);
                expect(component.displayDays[0].newItem.title).toBe('12:04 (New Item)');
            });

            test('opening popover', () => {
                const ev = {
                    layerY: 10,
                    pageY: 10,
                };

                component.displayDays[0].placeholderEntry = {
                    openPopover: jest.fn(),
                };

                component.togglePopover(ev, component.displayDays[0]);

                jest.runOnlyPendingTimers();

                expect(component.displayDays[0].placeholderEntry.openPopover).toHaveBeenCalled();
            });
        });

        describe('#getHoursMinutes', () => {
            let data;

            test('4 characters', () => {
                data = component.getHoursMinutes('0420', true);
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(30);

                data = component.getHoursMinutes('0420');
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(0);

                component.zoomLevel = 0;

                data = component.getHoursMinutes('0520', true);
                expect(data[0]).toBe(6);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('0520');
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(0);

                component.zoomLevel = 1;

                data = component.getHoursMinutes('0520', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('0520');
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(0);

                component.zoomLevel = 3;

                data = component.getHoursMinutes('0520', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(30);

                data = component.getHoursMinutes('0520');
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(15);

                data = component.getHoursMinutes('0580', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(45);

                data = component.getHoursMinutes('2580');
                expect(data[0]).toBe(23);
                expect(data[1]).toBe(45);
            });

            test('3 characters', () => {
                data = component.getHoursMinutes('420', true);
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(30);

                data = component.getHoursMinutes('420');
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(0);

                component.zoomLevel = 0;

                data = component.getHoursMinutes('520', true);
                expect(data[0]).toBe(6);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('520');
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(0);

                component.zoomLevel = 1;

                data = component.getHoursMinutes('520', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('520');
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(0);

                component.zoomLevel = 3;

                data = component.getHoursMinutes('520', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(30);

                data = component.getHoursMinutes('520');
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(15);

                data = component.getHoursMinutes('580', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(45);
            });

            test('1-2 characters', () => {
                data = component.getHoursMinutes('42', true);
                expect(data[0]).toBe(23);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes(42, true);
                expect(data[0]).toBe(23);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('20');
                expect(data[0]).toBe(20);
                expect(data[1]).toBe(0);

                component.zoomLevel = 0;

                data = component.getHoursMinutes('1', true);
                expect(data[0]).toBe(2);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('5');
                expect(data[0]).toBe(4);
                expect(data[1]).toBe(0);

                component.zoomLevel = 1;

                data = component.getHoursMinutes('5', true);
                expect(data[0]).toBe(5);
                expect(data[1]).toBe(0);
            });

            test('invalid data', () => {
                data = component.getHoursMinutes('12345');
                expect(data[0]).toBe(0);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes('abc');
                expect(data[0]).toBe(0);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes();
                expect(data[0]).toBe(0);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes(null);
                expect(data[0]).toBe(0);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes(12345);
                expect(data[0]).toBe(0);
                expect(data[1]).toBe(0);

                data = component.getHoursMinutes(12345, true);
                expect(data[0]).toBe(23);
                expect(data[1]).toBe(30);
            });
        });

        describe('#calculateBlocksNumStart', () => {
            let data;

            test('default data', () => {
                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);
            });

            test('end <= start', () => {
                component.startTime = '12345';
                component.endTime = 'test';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.startTime = null;
                component.endTime = 'test';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.startTime = 'test';
                component.endTime = null;

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.startTime = '4';
                component.endTime = '4';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.startTime = '4';
                component.endTime = '3';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);
            });

            test('Normal data', () => {
                component.endTime = '23';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(47);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.endTime = '22';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(45);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(0);

                component.startTime = '030';
                component.endTime = null;

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(47);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(1);

                component.startTime = '030';
                component.endTime = 22;

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(44);
                expect(data[1][0]).toBe(0);
                expect(data[1][1]).toBe(1);

                component.startTime = null;
                component.endTime = null;
                component.offsetTime = '12';

                data = component.calculateBlocksNumStart();
                expect(data[0]).toBe(48);
                expect(data[1][0]).toBe(12);
                expect(data[1][1]).toBe(0);
            });
        });

        describe('#buildDayBlocks', () => {
            let data;

            test('build day', () => {
                data = component.buildDayBlocks(48, [0, 0]);

                expect(data.length).toBe(48);
                expect(data[0].time).toBe('00:00');

                data = component.buildDayBlocks(10, [1, 1]);

                expect(data.length).toBe(10);
                expect(data[0].time).toBe('01:30');

                data = component.buildDayBlocks(10, [1, 1], null, 3);

                expect(data.length).toBe(30);
                expect(data[0].time).toBe('01:30');
            });
        });
    });
});
