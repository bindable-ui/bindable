// import {instance, mock} from 'ts-mockito/lib/ts-mockito';
import {BooleanYesNoValueConverter} from './boolean-yes-no';
import {CapitalizeValueConverter} from './capitalize';
import {CountValueConverter} from './count';
import {
    AltTimestampToDMYValueConverter,
    IsoToFormattedMomentValueConverter,
    MsToHmsValueConverter,
    SecondsToHmsValueConverter,
    TimezoneTimeToStandardDateTimeMSValueConverter,
} from './datetime';
import {DefaultValueValueConverter} from './default-value';
import {MetaValueConverter} from './meta';
import {MoneyFormatValueConverter} from './money-format';
import {NotApplicableValueConverter} from './not-applicable';

describe('Meta', () => {
    let component: MetaValueConverter;
    const altTimestampToDMY: AltTimestampToDMYValueConverter = new AltTimestampToDMYValueConverter();
    const booleanYesNo: BooleanYesNoValueConverter = new BooleanYesNoValueConverter();
    const capitalize: CapitalizeValueConverter = new CapitalizeValueConverter();
    const count: CountValueConverter = new CountValueConverter();
    const defaultValue: DefaultValueValueConverter = new DefaultValueValueConverter();
    const isoToFormattedMoment: IsoToFormattedMomentValueConverter = new IsoToFormattedMomentValueConverter();
    const moneyFormat: MoneyFormatValueConverter = new MoneyFormatValueConverter();
    const secondsToHms: SecondsToHmsValueConverter = new SecondsToHmsValueConverter();
    const msToHms: MsToHmsValueConverter = new MsToHmsValueConverter();
    // tslint:disable-next-line:max-line-length
    const timezoneTimeToStandardDateTimeMS: TimezoneTimeToStandardDateTimeMSValueConverter = new TimezoneTimeToStandardDateTimeMSValueConverter();
    const notApplicable: NotApplicableValueConverter = new NotApplicableValueConverter();

    describe('Unit', () => {
        beforeEach(() => {
            component = new MetaValueConverter(
                altTimestampToDMY,
                booleanYesNo,
                capitalize,
                count,
                defaultValue,
                isoToFormattedMoment,
                moneyFormat,
                secondsToHms,
                msToHms,
                timezoneTimeToStandardDateTimeMS,
                notApplicable,
            );
        });

        describe('Timestamp to DateTime conversion', () => {
            it('should return valid time for zero', () => {
                expect(component.toView(0, 'timezoneTimeToStandardDateTimeMS', '')).toEqual(
                    'Jan 1, 1970 @ 12:00:00.000 AM',
                );
            });

            it('should return valid time for non zero value', () => {
                expect(component.toView(584078400000, 'timezoneTimeToStandardDateTimeMS', '')).toEqual(
                    'Jul 5, 1988 @ 4:00:00.000 AM',
                );
            });

            it('should return valid formatted time when format is passed ', () => {
                expect(
                    component.toView(584078400000, 'timezoneTimeToStandardDateTimeMS:YYYY-MM-DD hh:mm:ss', ''),
                ).toEqual('1988-07-05 04:00:00');
                expect(
                    component.toView(584078400000, 'timezoneTimeToStandardDateTimeMS: "YYYY-MM-DD hh:mm:ss"', ''),
                ).toEqual('"1988-07-05 04:00:00"');
                expect(
                    component.toView(584078400000, 'timezoneTimeToStandardDateTimeMS', 'YYYY-MM-DD hh:mm:ss'),
                ).toEqual('1988-07-05 04:00:00');
            });

            it('should return null when passed null value', () => {
                expect(component.toView(null, 'timezoneTimeToStandardDateTimeMS', '')).toEqual(null);
                expect(component.toView(null, 'timezoneTimeToStandardDateTimeMS', 'YYYY-MM-DD')).toEqual(null);
            });
        });

        describe('Chained Value converters', () => {
            it('should return correct values when multiple value converters are used', () => {
                expect(component.toView(null, 'timezoneTimeToStandardDateTimeMS | notApplicable', '')).toEqual('N/A');
                expect(component.toView(null, 'emptyNumberNull | defaultValue:some value', '')).toEqual('some value');
                expect(component.toView(null, 'emptyNumberNull | defaultValue:"value one"', '')).toEqual('value one');
                expect(component.toView(null, "emptyNumberNull | defaultValue:'value one'", '')).toEqual('value one');
                expect(component.toView(123, 'emptyNumberNull | defaultValue:some value', '')).toEqual(123);
                expect(component.toView(null, 'timezoneTimeToStandardDateTimeMS:Y-m-d | notApplicable', '')).toEqual(
                    'N/A',
                );
                expect(
                    component.toView(
                        null,
                        'defaultValue: 584078400000 | timezoneTimeToStandardDateTimeMS: a | capitalize',
                        '',
                    ),
                ).toEqual('Am');
                expect(component.toView(null, 'timezoneTimeToStandardDateTimeMS: a | defaultValue: 123', '')).toEqual(
                    '123',
                );
            });
        });

        describe('Default value conversion', () => {
            it('should return default', () => {
                expect(component.toView(0, 'defaultValue:some value', '')).toEqual('some value');
                expect(component.toView(0, 'defaultValue:"some value"', '')).toEqual('some value');
                expect(component.toView(0, "defaultValue:'some value'", '')).toEqual('some value');
            });
        });
    });
});
