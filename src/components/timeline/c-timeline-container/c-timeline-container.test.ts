/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CTimelineContainer} from './c-timeline-container';

describe('c-timeline-container element', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CTimelineContainer();
        });

        test('it initializes', () => {
            expect(component.currentTimeTop).toBe(-1);
            expect(component.halfHourSize).toBe('medium');
            expect(component.loadingTop).toBeFalsy();
            expect(component.loadingBottom).toBeFalsy();
            expect(component.attached).toBeDefined();
            expect(component.loadingChanged).toBeDefined();
            expect(component.scrollCheck).toBeDefined();
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        // Base Test
        it('testing timeline', async done => {
            component = StageComponent.withResources().inView('<c-timeline-container></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.timeline).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Current Time Test
        it('testing current time', async done => {
            component = StageComponent.withResources().inView('<c-timeline-container></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['current-time']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Spinner Test
        it('testing spinner', async done => {
            component = StageComponent.withResources().inView('<c-timeline-containter></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.spinner).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Spinner Load Bottom Test
        it('testing spinner loading bottom', async done => {
            component = StageComponent.withResources().inView('<c-timeline-container></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['spinner-loading-bottom']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Size Test
        const existingSizeClasses = ['medium'];
        existingSizeClasses.forEach(halfHourSize => {
            it(`testing ${halfHourSize}`, async done => {
                component = StageComponent.withResources()
                    .inView('<c-timeline-container halfHourSize.bind="customSize"></c-timeline-container>')
                    .boundTo({
                        customSize: `${halfHourSize}`,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles[component.viewModel.halfHourSize]).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        // Test if loadingTop is enabled
        it('testing loadingTop', async done => {
            component = StageComponent.withResources()
                .inView('<c-timeline-container loading-top.bind="customLoadingTop"></c-timeline-container>')
                .boundTo({
                    customLoadingTop: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.loadingTop).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if loadingBottom is enabled
        it('testing loadingBottom', async done => {
            component = StageComponent.withResources()
                .inView('<c-timeline-container loading-bottom.bind="customLoadingBottom"></c-timeline-container>')
                .boundTo({
                    customLoadingBottom: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.loadingBottom).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if loading is enabled
        it('testing loading', async done => {
            component = StageComponent.withResources()
                .inView('<c-timeline-container loading.bind="customLoading"></c-timeline-container>')
                .boundTo({
                    customLoading: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.loading).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('#loadingChanged', () => {
            afterEach(() => {
                jest.useRealTimers();
            });

            test('when loading is false', async done => {
                component = StageComponent.withResources().inView(
                    '<c-timeline-container id="test-el" current-time-top="40"></c-timeline-container>',
                );

                try {
                    await bootStrapEnvironment(component);
                    component.viewModel.scrollToTodayLine = jest.fn();
                    jest.useFakeTimers();
                    await component.viewModel.loadingChanged();
                    jest.runAllTimers();
                    jest.useRealTimers();
                    expect(component.viewModel.scrollToTodayLine).toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('when no id', async done => {
                component = StageComponent.withResources().inView(
                    '<c-timeline-container current-time-top="40"></c-timeline-container>',
                );

                try {
                    await bootStrapEnvironment(component);
                    component.viewModel.scrollToTodayLine = jest.fn();
                    jest.useFakeTimers();
                    await component.viewModel.loadingChanged();
                    jest.runAllTimers();
                    jest.useRealTimers();
                    expect(component.viewModel.scrollToTodayLine).toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('when loading is not false', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                        <c-timeline-container
                            id="test-el"
                            current-time-top="40"
                            loading.bind="customLoading"
                        >
                        </c-timeline-container>
                    `,
                    )
                    .boundTo({
                        customLoading: true,
                    });

                try {
                    await bootStrapEnvironment(component);
                    component.viewModel.scrollToTodayLine = jest.fn();
                    await component.viewModel.loadingChanged();
                    expect(component.viewModel.scrollToTodayLine).not.toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('#scrollCheck', () => {
            let loadNext;
            let loadPrev;

            beforeEach(() => {
                loadNext = jest.fn(() => Promise.resolve(1));
                loadPrev = jest.fn(() => Promise.resolve(1));
            });

            afterEach(() => {
                jest.useRealTimers();
            });

            test('without element id', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                        <c-timeline-container
                            load-next.bind="loadNext"
                            load-prev.bind="loadPrev"
                        >
                        </c-timeline-container>
                    `,
                    )
                    .boundTo({
                        loadNext,
                        loadPrev,
                    });

                try {
                    await bootStrapEnvironment(component);
                    await component.viewModel.scrollCheck();

                    expect(loadPrev).not.toBeCalled();
                    expect(loadNext).not.toBeCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            describe('loadPrev callback', () => {
                test('with return value', async done => {
                    component = StageComponent.withResources()
                        .inView(
                            `
                            <c-timeline-container
                                id.bind="elName"
                                load-next.bind="loadNext"
                                load-prev.bind="loadPrev"
                            >
                            </c-timeline-container>
                        `,
                        )
                        .boundTo({
                            loadNext,
                            loadPrev,
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);

                        jest.useFakeTimers();

                        component.viewModel.scrollCheck();

                        jest.runOnlyPendingTimers();
                        jest.runOnlyPendingTimers();

                        jest.useRealTimers();
                        expect(loadPrev).toBeCalled();
                        expect(loadNext).not.toBeCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });

                test('without return value', async done => {
                    loadPrev = jest.fn(() => Promise.resolve());

                    component = StageComponent.withResources()
                        .inView(
                            `
                            <c-timeline-container
                                id.bind="elName"
                                load-next.bind="loadNext"
                                load-prev.bind="loadPrev"
                            >
                            </c-timeline-container>
                        `,
                        )
                        .boundTo({
                            loadNext,
                            loadPrev,
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        await component.viewModel.scrollCheck();

                        expect(loadPrev).toBeCalled();
                        expect(loadNext).not.toBeCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            describe('loadNext callback', () => {
                test('when bound', async done => {
                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-timeline-container
                            id.bind="elName"
                            load-next.bind="loadNext"
                        >
                        </c-timeline-container>
                    `,
                        )
                        .boundTo({
                            loadNext,
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        await component.viewModel.scrollCheck();

                        expect(loadPrev).not.toBeCalled();
                        expect(loadNext).toBeCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });

                test('when not bound', async done => {
                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-timeline-container
                            id.bind="elName"
                        >
                        </c-timeline-container>
                    `,
                        )
                        .boundTo({
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        await component.viewModel.scrollCheck();

                        expect(loadPrev).not.toBeCalled();
                        expect(loadNext).not.toBeCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            describe('setDate callback', () => {
                test('when bound', async done => {
                    const setDate = jest.fn(fn => fn);

                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-timeline-container
                            id.bind="elName"
                            set-date.call="setDate(midPoint)"
                        >
                        </c-timeline-container>
                    `,
                        )
                        .boundTo({
                            setDate,
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        await component.viewModel.scrollCheck();

                        expect(setDate).toBeCalledWith(0);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });

                test('when not bound', async done => {
                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-timeline-container
                            id.bind="elName"
                        >
                        </c-timeline-container>
                    `,
                        )
                        .boundTo({
                            elName: 'test-el',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        await component.viewModel.scrollCheck();

                        expect(loadPrev).not.toBeCalled();
                        expect(loadNext).not.toBeCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            test('when loading', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                        <c-timeline-container
                            id.bind="elName"
                            loading.bind="isLoading"
                            load-next.bind="loadNext"
                            load-prev.bind="loadPrev"
                        >
                        </c-timeline-container>
                    `,
                    )
                    .boundTo({
                        loadNext,
                        loadPrev,
                        elName: 'test-el',
                        isLoading: true,
                    });

                try {
                    await bootStrapEnvironment(component);
                    await component.viewModel.scrollCheck();

                    expect(loadPrev).not.toBeCalled();
                    expect(loadNext).not.toBeCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
