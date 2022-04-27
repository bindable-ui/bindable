import {
    IVNavSliderNavDropzone,
    IVNavSliderObj,
} from './../../../navs/c-nav-vertical-sliding/c-nav-vertical-sliding-interfaces';
/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {instance, mock} from 'ts-mockito';

import multiIndexSplicer from '../../../../helpers/multi-index-splicer';

import {CFormSelect} from './c-form-select';

jest.mock('../../../../helpers/multi-index-splicer');

describe('c-form-select component', () => {
    let component: any;
    let cFormSelect: any;
    let mockFn: any;
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

    beforeAll(() => {
        // mock select2
        const select2Response = {
            on: jest.fn().mockImplementation(() => select2Response),
        };
        const mockSelect2 = jest.fn().mockImplementation(options => select2Response);
        // @ts-ignore
        $.fn.select2 = mockSelect2;

        // Mock throttle
        // @ts-ignore
        jest.spyOn(_, 'throttle').mockImplementation(func => func);
    });

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

        // Test if virtual is enabled
        it('testing virtual', async done => {
            // @ts-ignore
            global.innerHeight = 100;
            component = StageComponent.withResources()
                .inView('<c-form-select virtual.bind="customVirtual"></c-form-select>')
                .boundTo({
                    customVirtual: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.virtual).toBe(false);
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

        it('should set default placeholder text', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select placeholder.bind="customPlaceholder"></c-form-select>')
                .boundTo({
                    customPlaceholder: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.placeholder).toBe('Select an Option');
                component = StageComponent.withResources()
                    .inView('<c-form-select placeholder.bind="customPlaceholder" multiple.bind="true"></c-form-select>')
                    .boundTo({
                        customPlaceholder: 1,
                    });
                await bootStrapEnvironment(component);
                expect(component.viewModel.placeholder).toBe('Select Multiple Options');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('should set placeholder text', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-select placeholder.bind="customPlaceholder"></c-form-select>')
                .boundTo({
                    customPlaceholder: 'placeholder test',
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.placeholder).toBe('placeholder test');
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

        it('should highlight all with cmd+a or ctrl+a on a virtual select', async done => {
            const template = `
            <c-form-select
                options.bind="searchOptions"
                virtual.bind="true"
            >
            </c-form-select>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    searchOptions,
                });

            try {
                await bootStrapEnvironment(component);
                document.getElementById(component.viewModel.id).focus();
                document.dispatchEvent(
                    new window.KeyboardEvent('keydown', {
                        key: 'a',
                        metaKey: true,
                    }),
                );
                const expected = [
                    {value: 'value1', text: 'Value 1', selected: true},
                    {value: 'Value2', text: 'Value 2', selected: true},
                ];
                expect(component.viewModel.virtualOptions).toEqual(expected);

                await bootStrapEnvironment(component);
                expect(component.viewModel.virtualOptions[0].selected).toBeFalsy();
                document.getElementById(component.viewModel.id).focus();
                document.dispatchEvent(
                    new window.KeyboardEvent('keydown', {
                        ctrlKey: true,
                        key: 'a',
                    }),
                );
                expect(component.viewModel.virtualOptions).toEqual(expected);
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

                component.viewModel.selectValue = 'Value 2';
                component.viewModel.selectValueChanged('Value 2', 'Value 1');
                expect(component.viewModel.disableDisplay).toEqual('Value 2');

                component.viewModel.simple = false;
                component.viewModel.options = searchOptions;
                component.viewModel.enableSelect2 = true;
                component.viewModel.selectValue = 'Value2';
                component.viewModel.selectValueChanged('value2', 'value1');
                expect(component.viewModel.disableDisplay).toEqual('Value 2');

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

    describe('Non UI', () => {
        beforeEach(() => {
            const element = mock(instance(Element));
            cFormSelect = new CFormSelect(element);
        });

        describe('.setupVirtualSelect', () => {
            beforeEach(() => {
                cFormSelect.isLoading = false;
                cFormSelect.virtual = true;
            });
            it('should clear virtualOptions', () => {
                cFormSelect.virtualOptions = [1, 2, 3];
                cFormSelect.setupVirtualSelect();
                expect(cFormSelect.virtualOptions).toEqual([]);
            });
            it('should set virtual options for list of objects', () => {
                cFormSelect.options = searchOptions;
                cFormSelect.setupVirtualSelect();
                const expected = [
                    {value: 'value1', text: 'Value 1', selected: false},
                    {value: 'Value2', text: 'Value 2', selected: false},
                ];
                expect(cFormSelect.virtualOptions).toEqual(expected);
            });
            it('should set virtual options for simple list', () => {
                cFormSelect.options = searchSimpleOptions;
                cFormSelect.setupVirtualSelect();
                const expected = [
                    {value: 'Value 1', text: 'Value 1', selected: false},
                    {value: 'Value 2', text: 'Value 2', selected: false},
                    {value: 'Value 3', text: 'Value 3', selected: false},
                ];
                expect(cFormSelect.virtualOptions).toEqual(expected);
            });
            it('should set the selected value', () => {
                cFormSelect.options = searchOptions;
                cFormSelect.selectValue = 'value1';
                cFormSelect.setupVirtualSelect();
                const expected = [
                    {value: 'value1', text: 'Value 1', selected: true},
                    {value: 'Value2', text: 'Value 2', selected: false},
                ];
                expect(cFormSelect.virtualOptions).toEqual(expected);
            });
            it('should select none', () => {
                cFormSelect.options = searchOptions;
                cFormSelect.selectValue = 'value1';
                cFormSelect.setupVirtualSelect();
                cFormSelect.selectNone();
                expect(cFormSelect.virtualOptions[0].selected).toBeFalsy();
            });
            it('should select virtual option', () => {
                cFormSelect.options = searchOptions;
                cFormSelect.selectValue = 'value1';
                cFormSelect.setupVirtualSelect();
                cFormSelect.selectVirtualOption(jest.fn(), cFormSelect.virtualOptions[0], 0);
                expect(cFormSelect.virtualOptions[0].selected).toBeFalsy();
            });
        });

        describe('.selectVirtualOption', () => {
            beforeEach(() => {
                cFormSelect.isLoading = false;
                cFormSelect.virtual = true;
                cFormSelect.options = searchSimpleOptions;
                cFormSelect.selectValue = 'Value 1';
                cFormSelect.setupVirtualSelect();
            });
            it("should change the selected option's value", () => {
                cFormSelect.selectVirtualOption(jest.fn(), cFormSelect.virtualOptions[0], 0);
                expect(cFormSelect.virtualOptions[0].selected).toBeFalsy();
            });
            it('should not change the value if the component is disabled', () => {
                cFormSelect.state = 'disabled';
                cFormSelect.selectVirtualOption(jest.fn(), cFormSelect.virtualOptions[0], 0);
                expect(cFormSelect.virtualOptions[0].selected).toBeTruthy();
            });
            it('should select multiple if shift key is held', () => {
                cFormSelect.multiple = true;
                cFormSelect.selectVirtualOption(jest.fn(), cFormSelect.virtualOptions[0], 0);
                expect(cFormSelect.lastClicked).toEqual(0);
                cFormSelect.selectVirtualOption({shiftKey: true}, cFormSelect.virtualOptions[2], 2);
                expect(cFormSelect.virtualOptions[1].selected).toBeTruthy();
                cFormSelect.virtualOptions.forEach(o => {
                    o.selected = false;
                });
                cFormSelect.selectVirtualOption({shiftKey: false}, cFormSelect.virtualOptions[2], 2);
                cFormSelect.selectVirtualOption({shiftKey: true}, cFormSelect.virtualOptions[0], 0);
                expect(cFormSelect.virtualOptions[1].selected).toBeTruthy();
            });
        });
    });
});
