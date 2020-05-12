/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as SWorker from 'simple-web-worker';

import {ITimeEntry} from './c-timeline-interfaces';

const actions = [
    {
        func: filterEntriesDayFn,
        message: 'filterEntriesDay',
    },
    {
        func: mapEntriesFn,
        message: 'mapEntries',
    },
];

let worker: any = null;

if (window.Worker) {
    worker = SWorker.create(actions);
}

function mapEntriesFn(
    sortedEntries: any[],
    pxPerMinute: number,
    startTime: string,
    endTime: string,
    timeView: string,
    editEntryViewModel: string,
    date: string,
    tzOffset: number,
    zoomLevel: number,
) {
    const SECONDS_IN_MINUTE = 60;

    const appendLeadingZeroes = n => {
        if (n <= 9) {
            return `0${n}`;
        }

        return n;
    };

    const formatHHmm = isoString => {
        const dateObj = new Date(new Date(isoString).getTime() + tzOffset * 60 * 1000);
        return `${appendLeadingZeroes(dateObj.getHours())}:${appendLeadingZeroes(dateObj.getMinutes())}`;
    };

    const formatHHmmss = isoString => {
        const dateObj = new Date(new Date(isoString).getTime() + tzOffset * 60 * 1000);
        return `${appendLeadingZeroes(dateObj.getHours())}:${appendLeadingZeroes(
            dateObj.getMinutes(),
        )}:${appendLeadingZeroes(dateObj.getSeconds())}`;
    };

    const checkSmallEntry = timeEntry => {
        return (
            timeEntry.sizeWeek === 'expandable' ||
            timeEntry.sizeWeek === 'small' ||
            timeEntry.sizeDay === 'expandable' ||
            timeEntry.sizeDay === 'small'
        );
    };

    // Sometimes zoomLevel is passed as a string
    const zoom = parseInt(zoomLevel.toString(), 10);

    const width = timeView === 'week' || timeView === 'three-day' ? 30 : 60;

    const columns = Array(sortedEntries.length).fill(0); // The max number of columns you can have
    const pseudoColumns = Array(sortedEntries.length).fill(0); // The max number of columns you can have

    const entries = sortedEntries.map(
        (entry: ITimeEntry): ITimeEntry => {
            if (!date) {
                entry.start = startTime;
            }

            entry.startTime = zoom === 5 ? formatHHmmss(entry.start) : formatHHmm(entry.start);

            if (!entry.end) {
                entry.end = new Date(new Date(entry.start).getTime() + entry.duration * 1000).toISOString();
            }

            entry.endTime = zoom === 5 ? formatHHmmss(entry.end) : formatHHmm(entry.end);

            const entryStartDate: any = new Date(entry.start);
            const startTimeDate: any = new Date(startTime);
            const entryEndDate: any = new Date(entry.end);
            const endTimeDate: any = new Date(endTime);

            let diff = (entryStartDate - startTimeDate) / 1000;
            const diffEnd = (endTimeDate - entryEndDate) / 1000;

            // If entry starts before the day, make sure it only displays what it needs
            if (diff < 0) {
                entry.start = startTime;
                entry.duration += diff;
                diff = 0;
            }

            // If entry ends after the day, make sure it only displays what it needs
            if (diffEnd < 0) {
                entry.duration += diffEnd;
            }

            entry.top = (diff / SECONDS_IN_MINUTE) * pxPerMinute;
            entry.height = (entry.duration / SECONDS_IN_MINUTE) * pxPerMinute;

            if (editEntryViewModel) {
                entry.contentViewModel = editEntryViewModel;
            }

            // Check for columns on normal entries
            if (!checkSmallEntry(entry)) {
                let foundRealColumn = false;
                let foundPseudoColumn = false;

                const buffer = pxPerMinute * (10 / 60); // 10 second buffer
                const entryBottom = entry.top + entry.height - buffer;

                for (let idx = 0; idx < columns.length; idx += 1) {
                    if (columns[idx] <= entry.top && !foundRealColumn) {
                        entry.column = idx;
                        columns[idx] = entryBottom;

                        foundRealColumn = true;
                    }

                    if (pseudoColumns[idx] <= entry.top && !foundPseudoColumn) {
                        entry.virtualColumn = idx;

                        if (pseudoColumns[0] < entryBottom) {
                            for (let a = 0; a <= idx; a += 1) {
                                pseudoColumns[a] = entryBottom;
                            }
                        }

                        foundPseudoColumn = true;
                    }

                    if (foundRealColumn && foundPseudoColumn) {
                        break;
                    }
                }
            }

            return entry;
        },
    );

    let entriesIndex = 1;
    const normalEntries = entries.filter(entry => !checkSmallEntry(entry));

    while (entriesIndex < normalEntries.length) {
        if (normalEntries[entriesIndex].column > 0) {
            // This loop will shortcut to the highest column in a group
            let numOfEntries = 1;
            while (entriesIndex < normalEntries.length - 1) {
                if (normalEntries[entriesIndex + 1].virtualColumn === 0) {
                    break;
                }

                entriesIndex += 1;
                numOfEntries += 1;
            }

            const slicedEntries = normalEntries.slice(entriesIndex - numOfEntries, entriesIndex + 1);
            slicedEntries.sort((a, b) => b.column - a.column);
            const numOfColumns = slicedEntries[0].column + 1;

            for (let nestedIdx = 0; nestedIdx <= numOfEntries; nestedIdx += 1) {
                const columnIndex = numOfColumns - 1 - normalEntries[entriesIndex - nestedIdx].column;

                normalEntries[entriesIndex - nestedIdx].widthCalc = `calc(${100 / numOfColumns}% - ${width /
                    numOfColumns}px)`;
                normalEntries[entriesIndex - nestedIdx].rightCalc = `calc(
                    ${columnIndex * (100 / numOfColumns)}% -
                    ${columnIndex === 0 ? 0 : (width / numOfColumns) * columnIndex - 1}px)`;
            }
        }

        entriesIndex += 1;
    }

    return entries;
}

function filterEntriesDayFn(sortedEntries: any[], startTime: string, endTime: string) {
    return sortedEntries.filter(entry => {
        const entryStart = new Date(entry.start);
        const entryEnd = new Date(new Date(entryStart).getTime() + entry.duration * 1000);
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);

        const startIn = entryStart.getTime() > startDate.getTime() && entryStart.getTime() < endDate.getTime();
        const endIn = entryEnd.getTime() > startDate.getTime() && entryStart.getTime() < endDate.getTime();

        return startIn || endIn;
    });
}

export const mapEntries = async (
    sortedEntries: any[],
    pxPerMinute: number,
    startTime: string,
    endTime: string,
    timeView: string,
    editEntryViewModel: string,
    date: string,
    tzOffset: number,
    zoomLevel: number,
): Promise<ITimeEntry[]> => {
    if (window.Worker) {
        return await worker.postMessage('mapEntries', [
            sortedEntries,
            pxPerMinute,
            startTime,
            endTime,
            timeView,
            editEntryViewModel,
            date,
            tzOffset,
            zoomLevel,
        ]);
    }

    return mapEntriesFn(
        sortedEntries,
        pxPerMinute,
        startTime,
        endTime,
        timeView,
        editEntryViewModel,
        date,
        tzOffset,
        zoomLevel,
    );
};

export const filterEntriesDay = async (sortedEntries: any[], startTime: string, endTime: string): Promise<any[]> => {
    if (window.Worker) {
        return await worker.postMessage('filterEntriesDay', [sortedEntries, startTime, endTime]);
    }

    return filterEntriesDayFn(sortedEntries, startTime, endTime);
};
