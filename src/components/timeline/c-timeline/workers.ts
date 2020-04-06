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
) {
    const SECONDS_IN_MINUTE = 60;

    const appendLeadingZeroes = n => {
        if (n <= 9) {
            return `0${n}`;
        }

        return n;
    };

    const formatHHmm = isoString => {
        const dateObj = new Date(isoString);
        return `${appendLeadingZeroes(dateObj.getHours())}:${appendLeadingZeroes(dateObj.getMinutes())}`;
    };

    const upToMm = isoString => {
        const dateObj = new Date(isoString);
        const year = dateObj.getFullYear();
        const month = appendLeadingZeroes(dateObj.getMonth());
        const day = appendLeadingZeroes(dateObj.getDate());
        return `${year}-${month}-${day} ${formatHHmm(isoString)}`;
    };

    const checkSmallEntry = timeEntry => {
        return (
            timeEntry.sizeWeek === 'expandable' ||
            timeEntry.sizeWeek === 'small' ||
            timeEntry.sizeDay === 'expandable' ||
            timeEntry.sizeDay === 'small'
        );
    };

    const width = timeView === 'week' || timeView === 'three-day' ? 30 : 60;

    let nestedEntryWidth = 80;

    return sortedEntries.map(
        (entry: ITimeEntry, index: number): ITimeEntry => {
            if (!date) {
                entry.start = startTime;
            }

            entry.startTime = formatHHmm(entry.start);

            if (!entry.end) {
                entry.end = new Date(new Date(entry.start).getTime() + entry.duration * 1000).toISOString();
            }

            entry.endTime = formatHHmm(entry.end);

            const entryStartDate: any = new Date(entry.start);
            const startTimeDate: any = new Date(startTime);
            const entryEndDate: any = new Date(entry.end);
            const endTimeDate: any = new Date(endTime);

            let diff = (entryStartDate - startTimeDate) / 1000;
            const diffEnd = (endTimeDate - entryEndDate) / 1000;

            // If entry starts before the day make sure it only displays what it needs
            if (diff < 0) {
                entry.start = startTime;
                entry.duration += diff;
                diff = 0;
            }

            // If entry ends after the day make sure it only displays what it needs
            if (diffEnd < 0) {
                entry.duration += diffEnd;
            }

            entry.top = (diff / SECONDS_IN_MINUTE) * pxPerMinute;
            entry.height = (entry.duration / SECONDS_IN_MINUTE) * pxPerMinute;

            if (editEntryViewModel) {
                entry.contentViewModel = editEntryViewModel;
            }

            let sameTimeEntries = [];
            let nestedEntries = [];

            if (!checkSmallEntry(entry)) {
                const nextEntries = sortedEntries.slice(index + 1);

                sameTimeEntries = nextEntries.filter(filterEntry => {
                    if (!filterEntry.end) {
                        filterEntry.end = new Date(
                            new Date(filterEntry.start).getTime() + filterEntry.duration * 1000,
                        ).toISOString();
                    }

                    // Not the same time if it's just a really short entry
                    return (
                        upToMm(entry.start) === upToMm(filterEntry.start) &&
                        new Date(filterEntry.start).getTime() < new Date(entry.end).getTime()
                    );
                });

                nestedEntries = nextEntries.filter(filterEntry => {
                    if (!filterEntry.end) {
                        filterEntry.end = new Date(
                            new Date(filterEntry.start).getTime() + filterEntry.duration * 1000,
                        ).toISOString();
                    }

                    const filterEntryStart = new Date(filterEntry.start);

                    // 10 second buffer
                    return (
                        filterEntryStart.getTime() > new Date(entry.start).getTime() &&
                        filterEntryStart.getTime() < new Date(new Date(entry.end).getTime() - 10 * 1000).getTime()
                    );
                });

                // Check if we need to shift icons over
                if (entry.icons && entry.icons.length) {
                    const iconHeight = entry.icons.length > 1 ? 42 : 26;
                    const diffWindow = iconHeight / pxPerMinute;

                    if (sameTimeEntries.length) {
                        entry.shiftIcons = true;
                    }

                    if (!entry.shiftIcons) {
                        nestedEntries.forEach(filterEntry => {
                            const startDiff =
                                (new Date(filterEntry.start).getTime() - entryStartDate.getTime()) /
                                1000 /
                                SECONDS_IN_MINUTE;
                            if (startDiff <= diffWindow) {
                                entry.shiftIcons = true;
                                return false;
                            }
                        });
                    }
                }

                // Filter out items that would be considered 'small'
                sameTimeEntries = sameTimeEntries.filter(filterEntry => !checkSmallEntry(filterEntry));
                nestedEntries = nestedEntries.filter(filterEntry => !checkSmallEntry(filterEntry));
            }

            const nestedEntry = nestedEntries[0]; // We only care about the first one

            if (!entry.widthCalc && sameTimeEntries.length) {
                const totalSameTime = sameTimeEntries.length + 1;
                const entryWidth = 100 / totalSameTime;

                entry.widthCalc = `calc(${entryWidth}% - ${width / totalSameTime}px - 5px)`;

                sameTimeEntries.reverse().forEach((sameTimeEntry, sameTimeIndex) => {
                    const offsetIndex = sameTimeIndex + 1;

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
        ]);
    }

    return mapEntriesFn(sortedEntries, pxPerMinute, startTime, endTime, timeView, editEntryViewModel, date);
};

export const filterEntriesDay = async (sortedEntries: any[], startTime: string, endTime: string): Promise<any[]> => {
    if (window.Worker) {
        return await worker.postMessage('filterEntriesDay', [sortedEntries, startTime, endTime]);
    }

    return filterEntriesDayFn(sortedEntries, startTime, endTime);
};
