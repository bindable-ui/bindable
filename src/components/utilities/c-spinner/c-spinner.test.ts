/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CSpinner} from './c-spinner';

describe('c-spinner component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-spinner></c-spinner>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('allows name binding', async done => {
                const customName = 'default-spinner';

                component = StageComponent.withResources()
                    .inView('<c-spinner name.bind="customName"></c-size>')
                    .boundTo({
                        customName,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.name).toBe(customName);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSizeClasses = ['small'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-spinner size.bind="customSize"></c-size>')
                        .boundTo({
                            customSize: `${size}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.size]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });

    describe('Unit', () => {
        beforeEach(() => {
            component = new CSpinner();
        });

        it('Sets up component', () => {
            expect(component.name).toBeUndefined();
            expect(component.size).toBe('medium');
            expect(component.styles).toBeDefined();
        });
    });
});
