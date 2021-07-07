/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {BooleanYesNoValueConverter} from './boolean-yes-no';
import {CapitalizeValueConverter} from './capitalize';
import {CountValueConverter} from './count';
import {
    AltTimestampToDMYValueConverter,
    IsoToFormattedMomentValueConverter,
    SecondsToHmsValueConverter,
    TimezoneTimeToStandardDateTimeMSValueConverter,
} from './datetime';
import {DefaultValueValueConverter} from './default-value';
import {MoneyFormatValueConverter} from './money-format';
import {NotApplicableValueConverter} from './not-applicable';

@autoinject()
export class MetaValueConverter {
    constructor(
        public altTimestampToDMY: AltTimestampToDMYValueConverter,
        public booleanYesNo: BooleanYesNoValueConverter,
        public capitalize: CapitalizeValueConverter,
        public count: CountValueConverter,
        public defaultValue: DefaultValueValueConverter,
        public isoToFormattedMoment: IsoToFormattedMomentValueConverter,
        public moneyFormat: MoneyFormatValueConverter,
        public secondsToHms: SecondsToHmsValueConverter,
        public timezoneTimeToStandardDateTimeMS: TimezoneTimeToStandardDateTimeMSValueConverter,
        public notApplicable: NotApplicableValueConverter,
    ) {}

    public toView(value, valueConverter, format) {
        let v = value;
        if (valueConverter) {
            // Separate out pipe delimited multiple value converters (and optional format)
            const valueConverters = valueConverter.split('|').map(c => c.trim());
            for (const converter of valueConverters) {
                // Separate colon delimited converter and its format/default
                // Regex ensures colons within the format are kept and not included into the split array
                const [c, f] = converter.split(/:(.+)/);
                v =
                    this[c] && this[c].toView
                        ? // The replace regex ensures we remove quotes around the format
                          this[c].toView(
                              v,
                              f
                                  ? f
                                        .replace(/^"(.*)"$/, '$1')
                                        .replace(/^'(.*)'$/, '$1')
                                        .trim()
                                  : format,
                          )
                        : v;
            }
        }
        return v;
    }

    public fromView(value, valueConverter, format) {
        if (this[valueConverter] && this[valueConverter].fromView) {
            return this[valueConverter].fromView(value, format);
        }

        return value;
    }
}
