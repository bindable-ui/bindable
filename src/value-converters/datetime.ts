/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/* tslint:disable:max-classes-per-file */
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
/*
Usage:
<span>${millisecondValue | msToHms}</span>
*/
export class MsToHmsValueConverter {
    // Adapted from http://stackoverflow.com/a/6313008/254603
    public static transform(value, nullValue) {
        if (value === null || value === undefined) {
            if (nullValue !== undefined) {
                return nullValue;
            }
            return '00:00:00';
        }

        const secNum = parseInt(value, 10) / 1000;

        const hours = Math.floor(secNum / 3600);
        const minutes = Math.floor((secNum - hours * 3600) / 60);
        const seconds = Math.floor(secNum - hours * 3600 - minutes * 60);

        let hoursDisplay = `${hours}`;
        let minutesDisplay = `${minutes}`;
        let secondsDisplay = `${seconds}`;

        if (hours < 10) {
            hoursDisplay = `0${hours}`;
        }
        if (minutes < 10) {
            minutesDisplay = `0${minutes}`;
        }
        if (seconds < 10) {
            secondsDisplay = `0${seconds}`;
        }
        const timeStr = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
        return timeStr;
    }

    public toView(value, nullValue) {
        return MsToHmsValueConverter.transform(value, nullValue);
    }
}

/*
Usage:
<span>${secondValue | secondsToHms}</span>
*/

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
export class SecondsToHmsValueConverter {
    // Adapted from http://stackoverflow.com/a/6313008/254603
    public static transform(timeInSeconds) {
        if (timeInSeconds === null || timeInSeconds === undefined) {
            return '00:00:00';
        }

        const isNegativeTime = timeInSeconds < 0;
        const time = Math.abs(parseInt(timeInSeconds, 10));

        const hours = Math.floor(time / SECONDS_IN_HOUR);
        const minutes = Math.floor((time % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
        const seconds = time - (hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE);

        let hoursDisplay = `${hours}`;
        let minutesDisplay = `${minutes}`;
        let secondsDisplay = `${seconds}`;

        if (hoursDisplay.length === 1) {
            hoursDisplay = `0${hours}`;
        } else if (hoursDisplay.length > 2) {
            hoursDisplay = '99';
        }

        if (minutesDisplay.length === 1) {
            minutesDisplay = `0${minutes}`;
        }

        if (secondsDisplay.length === 1) {
            secondsDisplay = `0${seconds}`;
        }

        return `${isNegativeTime ? '-' : ''}${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
    }

    public toView(value) {
        return SecondsToHmsValueConverter.transform(value);
    }
}

/*
Usage:
In the viewmodel:
this.curDateTime = new Date();
In the html:
${curDateTime | standardDate}
 */
export class StandardDateValueConverter {
    public toView(value) {
        return moment(value).format('ddd MMM D, YYYY');
    }
}

/*
 Usage:
 In the viewmodel:
 this.curDateTime = new Date();
 In the html:
 ${curDateTime | standardTime}
 */
export class StandardTimeValueConverter {
    public toView(value) {
        return moment(value).format('h:mm a');
    }
}

/*
Convert data string to time in ms:
Sun, 20 Jan 2019 01:56:21 GMT -> ms timestamp
*/
export class DateToMsValueConverter {
    public static transform(value) {
        return moment(value).format('x');
    }

    public toView(value) {
        return DateToMsValueConverter.transform(value);
    }
}

/*
Convert ISO string to -> Mon 04
*/
export class IsoToDayWeekValueConverter {
    public static transform(value) {
        return moment(value).format('ddd DD');
    }

    public toView(value) {
        return IsoToDayWeekValueConverter.transform(value);
    }
}

/*
 Usage: Convert a server-side timestamp, return MMM Do YYYY (Example: Jan 23 2018)
 *Note* If Invalid Date is provided, it just returns value.
 In the viewmodel: Do nothing!
 In the html: ${timeStamp | timestampToDMY}
*/
export class TimestampToDMYValueConverter {
    public toView(value) {
        return moment(value, 'x').format('MMM Do YYYY');
    }
}

/*
 Usage: Convert a server-side timestamp, return MMM Do YYYY (Example: Jan 23 2018)
 *Note* If Invalid Date is provided, it just returns 'None'.
 In the viewmodel: Do nothing!
 In the html: ${timestamp | altTimestampToDMY}
*/
export class AltTimestampToDMYValueConverter {
    public toView(value) {
        if (value) {
            return moment(value, 'x').format('MMM Do YYYY');
        }

        return 'None';
    }
}

/*
 Usage: Convert a server-side timestamp, return format specified
 *Note* If Invalid Date is provided, it just returns value.
 In the viewmodel: Do nothing!
 In the html: ${timeStamp | msToFormattedMoment:'MMM Do YYY at h:mm a'}
*/
export class MsToFormattedMomentValueConverter {
    public toView(value, format) {
        return moment(value, 'x').format(format);
    }
}

/*
 Usage: Convert a hyperion server-side timestamp, return format specified
 *Note* If Invalid Date is provided, it just returns value.
 In the viewmodel: Do nothing!
 In the html: ${timeStamp | isoToFormattedMoment:'MMM Do YYY at h:mm a'}
*/
export class IsoToFormattedMomentValueConverter {
    public toView(value, format) {
        return moment(value).format(format);
    }
}

/*
Usage:
In the viewmodel:
this.curDateTime = new Date();
In the html:
${curDateTime | monthYear}
Return Example: January 2017)
 */
export class MonthYearValueConverter {
    public toView(value) {
        return moment(value).format('MMMM YYYY');
    }
}

/*
 Usage: Convert a ISO time with timezone, return format specified
 *Note* If Invalid Date is provided, it just returns value.
 In the viewmodel: Do nothing!
 In the html: ${timeStamp | timezoneTimeToStandardDateTimeMS'}
*/

// tslint:disable-next-line: max-classes-per-file
export class TimezoneTimeToStandardDateTimeMSValueConverter {
    public toView(value, format?) {
        return value !== null
            ? momentTimezone(parseInt(value, 10)).format(format ? format : 'MMM D, YYYY @ h:mm:ss.SSS A')
            : null;
    }
}
