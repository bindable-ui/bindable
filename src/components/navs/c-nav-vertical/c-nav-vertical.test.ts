/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {lazyLoadCheck} from 'index';
// import { lazyLoadCheck } from 'helpers/lazy-load-check';
// jest.mock('helpers/lazy-load-check');

describe('c-nav-vertical component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('#onScroll', () => {
            let loadMore;
            const event = {target: null};

            beforeEach(() => {
                loadMore = jest.fn();

                component = StageComponent.withResources().inView(`
                    <c-nav-vertical
                        load-more.bind="loadMore"
                    >
                    </c-nav-vertical>
                `);
            });

            test('will trigger loadMore', async done => {
                component.boundTo({
                    loadMore,
                });

                try {
                    jest.mock('helpers/lazy-load-check', () => {
                        return {
                            lazyLoadCheck: () => true,
                        };
                    });

                    await bootStrapEnvironment(component);

                    await component.viewModel.onScroll(event);

                    expect(loadMore).toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('will not trigger loadMore', async done => {
                try {
                    jest.mock('helpers/lazy-load-check', () => {
                        return {
                            lazyLoadCheck: () => false,
                        };
                    });

                    await bootStrapEnvironment(component);

                    await component.viewModel.onScroll(event);

                    expect(loadMore).not.toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: nav-vertical', async done => {
                component = StageComponent.withResources().inView('<c-nav-vertical></c-nav-vertical>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['nav-vertical']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: navBottom', async done => {
                component = StageComponent.withResources()
                    .inView('<c-nav-vertical nav-bottom.bind="customNavBottom"></c-nav-vertical>')
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
