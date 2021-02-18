import {filterEntriesDay, mapEntries, sortEntries} from './workers';

export class TransformEntriesValueConverter {
    public async toView(entries, day, pxPerMinute, timeView, tzOffset, zoomLevel) {
        const allEntries = entries ? entries : [];
        let mappedEntries = [];

        try {
            const filteredEntries = await filterEntriesDay(allEntries, day.startTime, day.endTime);
            const sortedEntries = await sortEntries(filteredEntries);
            mappedEntries = await mapEntries(
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
        } catch (e) {
            // console.error(e);
        } finally {
            day.isLoading = false;
        }

        return mappedEntries;
    }
}

export class VisibleDaysValueConverter {
    public toView(days) {
        return _.filter(days, day => !day.hidden);
    }
}
