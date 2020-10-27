/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import multiIndexSplicer from '../../../../helpers/multi-index-splicer';

jest.mock('../../../../helpers/multi-index-splicer');

describe('c-form-select component', () => {
    let component;
    let mockFn;
    const searchOptions = [
        {
            text: 'Value 1',
            value: 'value1',
        },
        {
            text: 'Value 2',
            value: 'Value2',
        },
    ];
    const searchSimpleOptions = ['Value 1', 'Value 2', 'Value 3'];

    beforeEach(() => {
        mockFn = jest.fn();
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing multiple', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select multiple.bind="customMultiple"></c-form-select>')
                .boundTo({
                    customMultiple: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.multiple).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if search is enabled
        it('testing search', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select search.bind="customsearch"></c-form-select>')
                .boundTo({
                    customSearch: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.search).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if simple is enabled
        it('testing simple', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select simple.bind="customSimple"></c-form-select>')
                .boundTo({
                    customSimple: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.simple).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if isLoading is enabled
        it('testing isLoading', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select is-loading.bind="customIsLoading"></c-form-select>')
                .boundTo({
                    customIsLoading: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isLoading).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if isLoadingMore is enabled
        it('testing isLoadingMore', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select is-loading-more.bind="customIsLoadingMore"></c-form-select>')
                .boundTo({
                    customIsLoadingMore: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isLoadingMore).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if reorder is enabled
        it('testing reorder', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select reorder.bind="customReorder"></c-form-select>')
                .boundTo({
                    customReorder: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.reorder).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test search button with no action
        it('tests when searching when no action handler defined', async done => {
            const queryStr = 'c-button';
            component = StageComponent.withResources()
                .inView('<c-form-select options.bind="searchOptions" search.bind="true"></c-form-select>')
                .boundTo({
                    searchOptions,
                });

            try {
                await bootStrapEnvironment(component);
                const spyOn = jest.spyOn(component.viewModel, 'searchSelect');
                (document.querySelector(queryStr) as any).click();
                expect(spyOn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test simple search button with action handler
        it('tests simple searching with action handler', async done => {
            const template = `
            <c-form-select
                simple.bind="true"
                options.bind="searchSimpleOptions"
                search.bind="true"
                actions.bind="callbacks">
            </c-form-select>
        `;
            const queryStr = 'c-button';
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    searchSimpleOptions,
                    callbacks: {
                        onSearch: mockFn,
                    },
                });

            try {
                await bootStrapEnvironment(component);
                const spyOn = jest.spyOn(component.viewModel, 'searchSelect');
                (document.querySelector(queryStr) as any).click();
                component.viewModel.filterSearch('val');
                expect(spyOn).toHaveBeenCalled();
                expect(mockFn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test select value changed and executes on change event.
        it('calls selectValueChanged with action handler', async done => {
            const template = `
            <c-form-select
                simple.bind="true"
                options.bind="searchSimpleOptions"
                search.bind="true"
                value.bind="selectValue"
                actions.bind="callbacks">
            </c-form-select>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    searchSimpleOptions,
                    callbacks: {
                        onChange: mockFn,
                    },
                });

            try {
                await bootStrapEnvironment(component);
                component.viewModel.selectValueChanged('Value 2', 'Value 1');
                expect(mockFn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('#moveItems', () => {
            describe('simple list', () => {
                test('when dir is 1', async done => {
                    const template = `
                    <c-form-select
                        simple.bind="true"
                        options.bind="searchSimpleOptions"
                        search.bind="true"
                        actions.bind="callbacks"
                        select-value.bind="selectedValues"
                    >
                    </c-form-select>
                `;
                    component = StageComponent.withResources()
                        .inView(template)
                        .boundTo({
                            searchSimpleOptions,
                            callbacks: {
                                onChange: mockFn,
                            },
                            selectedValues: ['Value 2'],
                        });

                    try {
                        await bootStrapEnvironment(component);
                        component.viewModel.moveItems(1);
                        expect(multiIndexSplicer).toHaveBeenCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });

                test('when dir is -1', async done => {
                    const template = `
                    <c-form-select
                        simple.bind="true"
                        options.bind="searchSimpleOptions"
                        search.bind="true"
                        actions.bind="callbacks"
                        select-value.bind="selectedValues"
                    >
                    </c-form-select>
                `;
                    component = StageComponent.withResources()
                        .inView(template)
                        .boundTo({
                            searchSimpleOptions,
                            callbacks: {
                                onChange: mockFn,
                            },
                            selectedValues: ['Value 2'],
                        });

                    try {
                        await bootStrapEnvironment(component);
                        component.viewModel.moveItems(-1);
                        expect(multiIndexSplicer).toHaveBeenCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            describe('non-simple list', () => {
                test('when dir is 1', async done => {
                    const template = `
                    <c-form-select
                        options.bind="searchOptions"
                        search.bind="true"
                        actions.bind="callbacks"
                        select-value.bind="selectedValues"
                    >
                    </c-form-select>
                `;
                    component = StageComponent.withResources()
                        .inView(template)
                        .boundTo({
                            searchOptions,
                            callbacks: {
                                onChange: mockFn,
                            },
                            selectedValues: ['Value 2'],
                        });

                    try {
                        await bootStrapEnvironment(component);
                        component.viewModel.moveItems(1);
                        expect(multiIndexSplicer).toHaveBeenCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });

                test('when dir is -1', async done => {
                    const template = `
                    <c-form-select
                        options.bind="searchOptions"
                        search.bind="true"
                        actions.bind="callbacks"
                        select-value.bind="selectedValues"
                    >
                    </c-form-select>
                `;
                    component = StageComponent.withResources()
                        .inView(template)
                        .boundTo({
                            searchOptions,
                            callbacks: {
                                onChange: mockFn,
                            },
                            selectedValues: ['Value 2'],
                        });

                    try {
                        await bootStrapEnvironment(component);
                        component.viewModel.moveItems(-1);
                        expect(multiIndexSplicer).toHaveBeenCalled();
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });

        describe('c-form-select component scrolling', () => {
            let viewModel;
            const template = `
                <c-form-select
                    simple.bind="true"
                    options.bind="searchSimpleOptions"
                    search.bind="true"
                    actions.bind="callbacks">
                </c-form-select>
            `;

            beforeEach(async done => {
                mockFn = jest.fn();
                component = StageComponent.withResources()
                    .inView(template)
                    .boundTo({
                        searchSimpleOptions,
                        callbacks: {
                            onSearch: mockFn,
                        },
                    });
                await bootStrapEnvironment(component);
                viewModel = component.viewModel;
                done();
            });

            it('Call onScrollBottom if checkLoadMore is true and onScrollBottom is not defined', () => {
                const spy = jest.spyOn(viewModel, 'onScroll');
                viewModel.onScroll();
                viewModel.scrollToLoad = {
                    onSearch: mockFn,
                };
                viewModel.onScroll();
                expect(spy).toHaveBeenCalled();
            });

            it('Call onScrollBottom and onScrollBottom', () => {
                const spy = jest.spyOn(viewModel, 'onScroll');
                const mockOnScrollBottom = jest.fn();
                // viewModel.onScroll();
                viewModel.scrollToLoad = {
                    onSearch: mockFn,
                };
                viewModel.actions.onScrollBottom = mockOnScrollBottom;
                viewModel.onScroll();
                expect(spy).toHaveBeenCalled();
                expect(mockOnScrollBottom).toHaveBeenCalled();
            });
        });

        describe('CSS Classes', () => {
            it('css class: select', async done => {
                component = StageComponent.withResources().inView('<c-form-select></c-form-select>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.select).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: error', async done => {
                component = StageComponent.withResources().inView('<c-form-select></c-form-select>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.error).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-form-select></c-form-select>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: multiple', async done => {
                component = StageComponent.withResources().inView('<c-form-select></c-form-select>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.multiple).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class loader', async done => {
                component = StageComponent.withResources().inView('<c-form-select></c-form-select>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.loader).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
