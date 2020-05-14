import {filterEntriesDay, mapEntries, sortEntries} from './workers';

// export class SortFilterEntriesValueConverter {
//     async toView(entries, day) {

//     }
// }

export class TransformEntriesValueConverter {
    public async toView(entries, day, pxPerMinute, timeView, tzOffset, zoomLevel) {
        if (!entries) {
            return [];
        }

        const filteredEntries = await filterEntriesDay(entries, day.startTime, day.endTime);
        const sortedEntries = await sortEntries(filteredEntries);

        return await mapEntries(
            sortedEntries,
            pxPerMinute,
            day.startTime,
            day.endTime,
            timeView,
            day.editEntryViewModel,
            day.date,
            tzOffset,
            zoomLevel,
        );
    }
}
