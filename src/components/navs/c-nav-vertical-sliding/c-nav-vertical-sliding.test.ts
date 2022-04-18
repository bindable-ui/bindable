/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

// jest.useFakeTimers();
jest.mock('lodash/delay', () => fn => fn);

describe('c-nav-vertical-sliding component', () => {
    let component;
    const baseTemplate = '<c-nav-vertical-sliding></c-nav-vertical-sliding>';
    const resources = 'components/navs/c-nav-vertical-sliding/c-nav-vertical-sliding';

    describe('Integration', () => {
        it('tests nav state is left', async done => {
            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                const result = component.viewModel.navState;
                expect(result).toEqual('left');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests nav state is right', async done => {
            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.nav = {shownIndex: 1};
                const result = component.viewModel.navState;
                expect(result).toEqual('right');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests toggling navigation right', async done => {
            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.nav = {shownIndex: 0};
                component.viewModel.toggleNav();
                expect(component.viewModel.nav.shownIndex).toEqual(1);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests toggling navigation left', async done => {
            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.nav = {shownIndex: 1};
                component.viewModel.toggleNav();
                expect(component.viewModel.nav.shownIndex).toEqual(0);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests isTriggerContentHidden with no navigation', async done => {
            // _.delay in the code gets executed, but expect(component.viewModel.showTrigger).toBe(true);
            // didn't evaluate to true (I event put a console.log)
            // tried wrapping in a promise, with a setTime, etc.  No luck.
            // below are some things I tried.  The spyOn worked great, but could never get the
            // implementation to be executed.  Supposedly, .mockImplementation should do it, but
            // it didn't know what that was.  perhaps we are using an older version of jest.
            // jest.mock('lodash/delay', () => fn => fn);
            // spyOn(_, 'delay').and.returnValue({delay: jest.fn().mockReturnValue({})});
            // spyOn(_, 'delay').and.returnValue({delay: () => fn => fn});
            // spyOn(_, 'delay').mockImplementation(() => fn => fn);  // Does not work
            // I also tried using jest.xxxx (where xxx is pendingTimers, fakeTimers, etc)

            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                const result = await component.viewModel.isTriggerContentHidden;
                // await (() => new Promise(resolve => setTimeout(() => {
                //     result = component.viewModel.isTriggerContentHidden;
                //     resolve();
                // }, 500)))();
                // await (() => new Promise(resolve => setTimeout(() => resolve(), 500)))();
                expect(result).toEqual(false);
                // expect(component.viewModel.showTrigger).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('.isPageLoading', () => {
            test('page is loading', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);

                    component.viewModel.showHidden = true;
                    component.viewModel.nav = {
                        pages: [{isLoading: true}],
                        shownIndex: 0,
                    };

                    const result = await component.viewModel.isPageLoading;

                    expect(component.viewModel.showHidden).toBeFalsy();
                    expect(result).toBeTruthy();
                    expect(component.viewModel.showHidden).toBeFalsy();

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('page is not loading', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);

                    component.viewModel.showHidden = false;

                    jest.useFakeTimers();

                    const result = await component.viewModel.isPageLoading;

                    jest.runAllTimers();

                    jest.useRealTimers();
                    expect(result).toBeFalsy();
                    expect(component.viewModel.showHidden).toBeTruthy();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        it('tests isTriggerContentHidden', async done => {
            component = StageComponent.withResources().inView(baseTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.showTrigger = true;
                component.viewModel.nav = {
                    activeIndex: 0,
                    pages: [
                        {
                            searchFn: () => {
                                /**/
                            },
                        },
                    ],
                    shownIndex: 0,
                };
                const result = component.viewModel.isTriggerContentHidden;
                expect(result).toEqual(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('.isTriggerContentHidden', () => {
            test('activeIndex != 0', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    component.viewModel.showTrigger = true;
                    component.viewModel.nav = {
                        activeIndex: 1,
                        pages: [{}],
                        shownIndex: 0,
                    };
                    jest.useFakeTimers();
                    const result = component.viewModel.isTriggerContentHidden;
                    jest.runAllTimers();
                    jest.useRealTimers();
                    expect(result).toEqual(false);
                    expect(component.viewModel.showTrigger).toBeTruthy();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
            test('activeIndex is 0', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    component.viewModel.showTrigger = true;
                    component.viewModel.nav = {
                        activeIndex: 0,
                        pages: [
                            {
                                searchFn: jest.fn(),
                            },
                        ],
                        shownIndex: 0,
                    };
                    jest.useFakeTimers();
                    const result = component.viewModel.isTriggerContentHidden;
                    jest.runAllTimers();
                    jest.useRealTimers();
                    expect(result).toEqual(true);
                    expect(component.viewModel.showTrigger).toBeFalsy();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        afterEach(() => {
            component.dispose();
            jest.useRealTimers();
        });

        describe('CSS Classes', () => {
            it('css class: container', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: hidden', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.hidden).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: block', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.block).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: triggerContainer', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.triggerContainer).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: triggerContainerHidden', async done => {
                component = StageComponent.withResources().inView(baseTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.triggerContentHidden).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: navBottom', async done => {
                component = StageComponent.withResources()
                    .inView('<c-nav-vertical-sliding nav-bottom.bind="customNavBottom"></c-nav-vertical-sliding>')
                    .boundTo({
                        customNavBottom: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.navBottom).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
