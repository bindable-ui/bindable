/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class DateTime {
    public curDateTime;

    public secondsToHmsCols = [
        {
            colClass: 't150',
            colHeadName: 'secondsToHms',
            colHeadValue: 'Convert to Seconds',
            valueConverter: 'secondsToHms',
        },
    ];

    public secondsToHmsRows = [
        {
            secondsToHms: 872323,
        },
    ];

    public altTimeStampCols = [
        {
            colClass: 't150',
            colHeadName: 'altTimeStamp',
            colHeadValue: 'Alt Time Stamp',
            valueConverter: 'altTimestampToDMY',
        },
    ];

    public altTimeStampRows = [
        {
            altTimeStamp: 1547949381000,
        },
    ];

    public timezoneTimeToStandardCols = [
        {
            colClass: 't150',
            colHeadName: 'timezoneTimeToStandard',
            colHeadValue: 'Timezone Time To Standard',
            valueConverter: 'timezoneTimeToStandardDateTimeMS',
        },
    ];

    public timezoneTimeToStandardRows = [
        {
            timezoneTimeToStandard: 1547949381034,
        },
    ];

    public attached() {
        this.curDateTime = new Date();
    }
}
