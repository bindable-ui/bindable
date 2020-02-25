/*
Copyright 2020, Verizon Media
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
import {MoneyFormatValueConverter} from './money-format';

@autoinject()
export class MetaValueConverter {
    constructor(
        public altTimestampToDMY: AltTimestampToDMYValueConverter,
        public booleanYesNo: BooleanYesNoValueConverter,
        public capitalize: CapitalizeValueConverter,
        public count: CountValueConverter,
        public isoToFormattedMoment: IsoToFormattedMomentValueConverter,
        public moneyFormat: MoneyFormatValueConverter,
        public secondsToHms: SecondsToHmsValueConverter,
        public timezoneTimeToStandardDateTimeMS: TimezoneTimeToStandardDateTimeMSValueConverter,
    ) {}

    public toView(value, valueConverter, format) {
        if (this[valueConverter] && this[valueConverter].toView) {
            return this[valueConverter].toView(value, format);
        }

        return value;
    }

    public fromView(value, valueConverter, format) {
        if (this[valueConverter] && this[valueConverter].fromView) {
            return this[valueConverter].fromView(value, format);
        }

        return value;
    }
}
