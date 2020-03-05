import workerize from 'workerize';

import {ITimeEntry} from './c-timeline-interfaces';

export interface ITimelineWorkers {
    mapEntries(
        sortedEntries: any[],
        pxPerMinute: number,
        startTime: string,
        endTime: string,
        timeView: string,
        editEntryViewModel: string,
        date: string,
    ): ITimeEntry[];

    filterEntriesDay(sortedEntries: any[], startTime: string, endTime: string);

    expose?(fn: string): any;
}

export const workerFns: ITimelineWorkers = workerize((exports: ITimelineWorkers) => {
    exports.mapEntries = (
        sortedEntries: any[],
        pxPerMinute: number,
        startTime: string,
        endTime: string,
        timeView: string,
        editEntryViewModel: string,
        date: string,
    ) => {
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

        const width = timeView === 'week' ? 30 : 60;

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

                entry.top = (diff / SECONDS_IN_MINUTE) * pxPerMinute + 1;
                entry.height = (entry.duration / SECONDS_IN_MINUTE) * pxPerMinute;

                if (editEntryViewModel) {
                    entry.contentViewModel = editEntryViewModel;
                }

                const nextEntries = sortedEntries.slice(index + 1);

                const sameTimeEntries = nextEntries.filter(filterEntry => {
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

                const nestedEntries = nextEntries.filter(filterEntry => {
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

                const nestedEntry = nestedEntries[0]; // We only care about the first one

                if (!entry.widthCalc && sameTimeEntries.length) {
                    const totalSameTime = sameTimeEntries.length + 1;
                    const entryWidth = 100 / totalSameTime;

                    // We don't want to use these props if we are showing multiple things at the same time
                    entry.sizeDay = null;
                    entry.sizeWeek = null;

                    entry.widthCalc = `calc(${entryWidth}% - ${width / totalSameTime}px - 5px)`;

                    sameTimeEntries.reverse().forEach((sameTimeEntry, sameTimeIndex) => {
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
    };
    exports.filterEntriesDay = (sortedEntries: any[], startTime: string, endTime: string) => {
        return sortedEntries.filter(entry => {
            const entryStart = new Date(entry.start);
            const entryEnd = new Date(new Date(entryStart).getTime() + entry.duration * 1000);
            const startDate = new Date(startTime);
            const endDate = new Date(endTime);

            const startIn = entryStart.getTime() > startDate.getTime() && entryStart.getTime() < endDate.getTime();
            const endIn = entryEnd.getTime() > startDate.getTime() && entryStart.getTime() < endDate.getTime();

            return startIn || endIn;
        });
    };
});

workerFns.expose('mapEntries');
workerFns.expose('filterEntriesDay');
