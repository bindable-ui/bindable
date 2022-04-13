/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

declare const $: any;

describe('l-grid component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Enable Booleans', () => {
            it('testing isLoading enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<l-grid is-loading.bind="customIsLoading"></l-grid>')
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

            it('testing scrollToLoad enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<l-grid scrollToLoad.bind="customScrollToLoad"></l-grid>')
                    .boundTo({
                        customScrollToLoad: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.scrollToLoad).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('#detached', () => {
            test('removes scroll event listener', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                            <div data-value="cover">
                                <l-grid scroll-to-load.bind="customScrollToLoad"></l-grid>
                            </div>
                        `,
                    )
                    .boundTo({
                        customScrollToLoad: true,
                    });

                try {
                    await bootStrapEnvironment(component);

                    const {parentElem} = component.viewModel;
                    component.viewModel.detached();

                    expect($._data(parentElem).events || {}).not.toHaveProperty('scroll');
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('#onScroll', () => {
            test('removes scroll event listener', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                            <div data-value="cover">
                        <l-grid scroll-to-load.bind="customScrollToLoad"></l-grid>
                    </div>
                `,
                    )
                    .boundTo({
                        customScrollToLoad: true,
                    });

                try {
                    await bootStrapEnvironment(component);

                    component.viewModel.actions = {
                        onScrollBottom: jest.fn(),
                    };

                    await component.viewModel.onScroll();

                    expect(component.viewModel.actions.onScrollBottom).toBeCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: grid', async done => {
                component = StageComponent.withResources().inView('<l-grid></l-grid>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.grid).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: loader', async done => {
                component = StageComponent.withResources().inView('<l-grid></l-grid>');

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
