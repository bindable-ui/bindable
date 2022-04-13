/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-stack component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is recursive endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-stack recursive.bind="isRecursive"></l-stack>')
                .boundTo({
                    isRecursive: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.recursive).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: stack', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.stack).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: not-recursive', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['not-recursive']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: recursive', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.recursive).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSplitAfterClasses = ['one', 'two', 'three', 'four', 'five'];
            existingSplitAfterClasses.forEach(splitAfter => {
                it(`css class: ${splitAfter}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<l-stack split-after.bind="customSplitAfter"></l-stack>')
                        .boundTo({
                            customSplitAfter: `${splitAfter}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.splitAfter]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            it('css class: list', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.list).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: ordered', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.ordered).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: un-ordered', async done => {
                component = StageComponent.withResources().inView('<l-stack></l-stack>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['un-ordered']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
