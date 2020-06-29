/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-timeline-month-item component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Enable Booleans', () => {
            it('testing activeMonth enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<c-timeline-month-item active-month.bind="customActiveMonth"></l-icon>')
                    .boundTo({
                        customActiveMonth: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.activeMonth).toBe(true);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('testing today enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<c-timeline-month-item today.bind="customToday"></l-icon>')
                    .boundTo({
                        customToday: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.today).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: container', async done => {
                component = StageComponent.withResources().inView('<c-timeline-month-item></c-timeline-month-item>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: active-month', async done => {
                component = StageComponent.withResources().inView('<c-timeline-month-item></c-timeline-month-item>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['active-month']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: not-active-month', async done => {
                component = StageComponent.withResources().inView('<c-timeline-month-item></c-timeline-month-item>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['not-active-month']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
