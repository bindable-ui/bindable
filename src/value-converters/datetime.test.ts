import {TimezoneTimeToStandardDateTimeMSValueConverter} from './datetime';
describe('Datetime Value Converter', () => {
    let component;

    describe('TimezoneTimeToStandardDateTimeMSValueConverter', () => {
        beforeEach(() => {
            component = new TimezoneTimeToStandardDateTimeMSValueConverter();
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
});
