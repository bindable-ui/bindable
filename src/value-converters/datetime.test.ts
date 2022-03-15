import {SecondsToHmsValueConverter, TimezoneTimeToStandardDateTimeMSValueConverter} from './datetime';

describe('Datetime Value Converter', () => {
    let component;

    describe('TimezoneTimeToStandardDateTimeMSValueConverter', () => {
        beforeEach(() => {
            component = new TimezoneTimeToStandardDateTimeMSValueConverter();
        });

        describe('Timezone check', () => {
            it('should be UTC', () => {
                expect(process.env.TZ).toBe('UTC');
            });
        });

        describe('Timestamp to DateTime conversion', () => {
            test('without format', () => {
                expect(component.toView(0)).toEqual('Jan 1, 1970 @ 12:00:00.000 AM');
            });
            test('with format', () => {
                expect(component.toView(0, 'MMM D, YYYY')).toEqual('Jan 1, 1970');
            });
            test('with Hms format', () => {
                expect(component.toView(0, 'HH:mm:ss')).toEqual('00:00:00');
            });
        });

        describe('String to DateTime conversion', () => {
            test('string input', () => {
                expect(component.toView('2020-07-29T15:28:42.049303Z', 'MMM D, YYYY')).toEqual('Jul 29, 2020');
            });
        });
    });

    describe('SecondsToHmsValueConverter', () => {
        beforeEach(() => {
            component = new SecondsToHmsValueConverter();
        });

        it('should round decimal values', () => {
            expect(component.toView(3.1)).toEqual('00:00:03');
            expect(component.toView(36.8494)).toEqual('00:00:37');
        });

        it('should calculate minutes', () => {
            expect(component.toView(55 * 60)).toEqual('00:55:00');
        });

        it('should calculate hours', () => {
            expect(component.toView(33 * 60 * 60)).toEqual('33:00:00');
        });

        it('should not exceed 99 hours', () => {
            expect(component.toView(100 * 60 * 60)).toEqual('99:00:00');
        });

        it('should account for null or undefined', () => {
            expect(component.toView(null)).toEqual('00:00:00');
            expect(component.toView(undefined)).toEqual('00:00:00');
        });

        it('should account for negative numbers', () => {
            expect(component.toView(-33)).toEqual('-00:00:33');
        });
    });
});
