import * as moment from 'moment';

import {filterEntriesDay, mapEntries} from './workers';

// Plop it right in the middle of the day
const now = moment('12/12/2020', 'MM/DD/YYYY')
    .startOf('day')
    .add(12, 'hours');
const startDay = moment(now)
    .startOf('day')
    .toISOString();
const endDay = moment(now)
    .endOf('day')
    .toISOString();

const sortedEntries: any[] = [
    {
        duration: 240,
        start: now.toISOString(),
    },
    {
        duration: 120,
        start: moment(now)
            .add(3, 'minutes')
            .toISOString(),
    },
    {
        duration: 120,
        priority: 10,
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

describe('Web worker functions', () => {
    describe('#filterEntriesDay', () => {
        it('tests filtering entries for a day', async () => {
            const data = await filterEntriesDay(sortedEntries, startDay, endDay);

            expect(data.length).toBe(4);
        });
    });

    describe('#mapEntries', () => {
        it('tests formatting', async () => {
            const data = await mapEntries(sortedEntries, 2, startDay, endDay, 'day', '', now.toISOString(), 0, 2);

            expect(data[0].startTime).toBe('12:00');
            expect(data[0].endTime).toBe('12:04');
        });

        it('tests positioning', async () => {
            const data = await mapEntries(sortedEntries, 2, startDay, endDay, 'day', '', now.toISOString(), 0, 2);

            expect(data[0].top).toBe(1440);
            expect(data[0].height).toBe(8);
        });

        it('tests same time entries', async () => {
            const data = await mapEntries(sortedEntries, 2, startDay, endDay, 'day', '', now.toISOString(), 0, 2);

            expect(data[0].widthCalc).toBeDefined();
            expect(data[2].widthCalc).toBe(data[3].widthCalc);
        });

        it('tests nested entries', async () => {
            const data = await mapEntries(sortedEntries, 2, startDay, endDay, 'day', '', now.toISOString(), 0, 2);

            expect(data[0].widthCalc).toBe(data[1].widthCalc);
        });

        it('tests same column priority', async () => {
            const data = await mapEntries(sortedEntries, 2, startDay, endDay, 'day', '', now.toISOString(), 0, 2);

            expect(data[2].column).toBe(0);
        });
    });
});
