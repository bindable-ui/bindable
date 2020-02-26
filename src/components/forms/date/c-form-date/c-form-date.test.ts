/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import * as moment from 'moment';

describe('c-form-date component', () => {
    let component;

    describe('Integration', () => {
        it('testing inline', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-date inline.bind="customInline"></c-form-date>')
                .boundTo({
                    customInline: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.inline).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('tests for datetimepicker in component', () => {
            let viewModel;
            let mockFn;
            const time = '1499990310488';

            beforeEach(async done => {
                mockFn = jest.fn();
                const template = `
            <c-form-date id="c-form-date-id" timestamp.bind="time" callbacks.bind="callbacks">
            </c-form-date>
        `;
                component = StageComponent.withResources()
                    .inView(template)
                    .boundTo({
                        time,
                        callbacks: {
                            onChange: mockFn,
                        },
                    });
                // if you don't do this, then the datetimepicker won't be fully instantiated
                // and you'll get errors about .date undefined
                await bootStrapEnvironment(component).then(() => {
                    viewModel = component.viewModel;
                    done();
                });
            });

            it('MUST render datetimepicker component.', () => {
                expect(document.getElementById('date-time-picker-id')).toBeDefined();
                const setTime = moment(viewModel.datetimepicker.data('DateTimePicker').date()).format('x');
                expect(setTime).toBe(time);
            });

            it('MUST render default datetime if timestamp is not provided.', () => {
                viewModel.timestamp = null;
                viewModel.datetimepicker.trigger({type: 'dp.show'});
                const setTime = moment(viewModel.datetimepicker.data('DateTimePicker').date()).format('x');
                expect(setTime).toBe('Invalid date');
            });

            it('calcViewDate: Should return approviate date.', () => {
                let viewDate = viewModel.calcViewDate();
                expect(viewDate.diff(moment())).toBeLessThan(100);
                viewModel.timeofday = 'start';
                viewDate = viewModel.calcViewDate();
                expect(moment().startOf('day')).toEqual(viewDate);
                viewModel.timeofday = 'end';
                viewDate = viewModel.calcViewDate();
                expect(moment().endOf('day')).toEqual(viewDate);
            });

            it('updateDate: Should update date.', () => {
                viewModel.timestamp = moment().format('x');
                viewModel.updateDate();
                expect(mockFn).toHaveBeenCalled();
            });

            it('timestampChanged: Should call setTimestamp.', () => {
                spyOn(viewModel, 'setTimestamp');
                viewModel.timestampChanged({});
                expect(viewModel.setTimestamp).toHaveBeenCalledWith({});
            });

            it('checks updateDate gets rid of relative seconds in minute.', () => {
                const timestamp = 1539098347476;
                const shouldGet = '1539098340000';
                viewModel.timestampChanged(timestamp);
                viewModel.updateDate();

                expect(viewModel.timestamp).toBe(shouldGet);
            });

            it('setTimestamp: Should set datetime component datetime.', () => {
                viewModel.setTimestamp(time);
                const timeFromComponent = moment(viewModel.datetimepicker.data('DateTimePicker').date()).format('x');
                expect(timeFromComponent).toBe(time);
            });

            afterEach(() => {
                try {
                    component.dispose();
                } catch (e) {
                    // pass, catching runtime error due to a bug in eonasdan-boostrap-datetimepicker
                }
            });
        });

        describe('tests for datetimepicker in component with no onChange', () => {
            let viewModel;
            let mockFn;
            const time = undefined;

            beforeEach(async done => {
                mockFn = jest.fn();
                const template = `
            <c-form-date id="c-form-date-id" timestamp.bind="time">
            </c-form-date>
        `;
                component = StageComponent.withResources()
                    .inView(template)
                    .boundTo({
                        time,
                    });
                // if you don't do this, then the datetimepicker won't be fully instantiated
                // and you'll get errors about .date undefined
                await bootStrapEnvironment(component).then(() => {
                    viewModel = component.viewModel;
                    done();
                });
            });

            // it('MUST render datetimepicker component.', () => {
            //     expect(document.getElementById('date-time-picker-id')).toBeDefined();
            //     const setTime = moment(viewModel.datetimepicker.data('DateTimePicker').date()).format('x');
            //     expect(setTime).toBeDefined();
            // });

            it('updateDate: Should update date, but not not handler executed', () => {
                viewModel.timestamp = moment().format('x');
                viewModel.updateDate();
                expect(mockFn).toHaveBeenCalledTimes(0);
            });

            it('MUST render default datetime if timestamp is valid', () => {
                const timeStamp = '1499990310488';
                viewModel.timestamp = timeStamp;
                viewModel.datetimepicker.trigger({type: 'dp.show'});
                const setTime = moment(viewModel.datetimepicker.data('DateTimePicker').date()).format('x');
                expect(setTime).toBe('Invalid date');
            });

            afterEach(() => {
                try {
                    component.dispose();
                } catch (e) {
                    // pass, catching runtime error due to a bug in eonasdan-boostrap-datetimepicker
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: icon', async done => {
                component = StageComponent.withResources().inView('<c-form-date></c-form-date>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.icon).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: container', async done => {
                component = StageComponent.withResources().inView('<c-form-date></c-form-date>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-form-date></c-form-date>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
