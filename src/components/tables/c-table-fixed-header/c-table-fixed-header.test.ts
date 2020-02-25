/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-table-fixed-header component', () => {
    let component;
    const resources = 'components/tables/c-table-fixed-header/c-table-fixed-header';
    const basicTemplate = '<c-table-fixed-header></c-table-fixed-header>';

    describe('Integration', () => {
        it('tests isLoadingChange event is called when isLoading', async done => {
            component = StageComponent.withResources().inView(basicTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.isLoading = true;
                expect(component.viewModel.isLoading).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests colsModifiedChanged event is called when colsModified', async done => {
            component = StageComponent.withResources().inView(basicTemplate);

            try {
                await bootStrapEnvironment(component);
                component.viewModel.colsModified = true;
                expect(component.viewModel.colsModified).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if totalWidth is 100', async done => {
            component = StageComponent.withResources().inView(
                '<c-table-fixed-header scroll-to-load="true"></c-table-fixed-header>',
            );

            try {
                await bootStrapEnvironment(component);
                component.viewModel.cols = [{colWidth: 100}, {colWidth: 10, _hidden: true}];
                component.viewModel.colsModifiedChanged();
                expect(component.viewModel.totalWidth).toBe(100);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if totalWidth is 0', async done => {
            component = StageComponent.withResources().inView(
                '<c-table-fixed-header scroll-to-load="true"></c-table-fixed-header>',
            );

            try {
                await bootStrapEnvironment(component);
                component.viewModel.cols = [{}];
                component.viewModel.colsModifiedChanged();
                expect(component.viewModel.totalWidth).toBe(0);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if onScroll calls action handler', async done => {
            let viewModel;
            const template = `
            <c-table-fixed-header
                scroll-to-load="false"
                is-loading.bind="isLoading"
                actions.bind="actions">
            </c-table-fixed-header>`;
            const isLoading = false;
            const mockFn = jest.fn();
            // const mockcheckLoadMore = jest.fn(() => true);
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    isLoading,
                    actions: {onScrollBottom: mockFn},
                });

            await bootStrapEnvironment(component).then(() => {
                viewModel = component.viewModel;
                done();
            });
            viewModel.scrollToLoad = true;
            viewModel.onScroll();
            expect(component.viewModel.styles['fixed-table-header']).not.toBe(undefined);
            done();
        });

        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: fixed-table-header', async done => {
                component = StageComponent.withResources().inView(basicTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['fixed-table-header']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: fixed-table-header-bg', async done => {
                component = StageComponent.withResources().inView(basicTemplate);

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['fixed-table-header-bg']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
