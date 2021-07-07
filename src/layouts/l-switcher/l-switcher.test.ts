/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-switcher component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: switcher', async done => {
                component = StageComponent.withResources().inView('<l-switcher></l-switcher>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.switcher).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingLimitClasses = ['two', 'three', 'four', 'five'];
            existingLimitClasses.forEach(limit => {
                it(`css class: ${limit}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<l-switcher limit.bind="customLimit"></l-box>')
                        .boundTo({
                            customLimit: `${limit}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.limit]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            const existingDoubleWidthClasses = ['first', 'second', 'third', 'fourth', 'fifth'];
            existingDoubleWidthClasses.forEach(doubleWidth => {
                it(`css class: ${doubleWidth}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<l-switcher double-width.bind="customDoubleWidth"></l-box>')
                        .boundTo({
                            customDoubleWidth: `${doubleWidth}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.doubleWidth]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });
});
