/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-p component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Check Booleans', () => {
            it('boolean: bold', async done => {
                component = StageComponent.withResources()
                    .inView('<c-p bold.bind="customBold"></c-p>')
                    .boundTo({
                        customBold: false,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.bold).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('boolean: truncate', async done => {
                component = StageComponent.withResources()
                    .inView('<c-p truncate.bind="customTruncate"></c-p>')
                    .boundTo({
                        customTruncate: false,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.truncate).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('boolean: flush-top', async done => {
                component = StageComponent.withResources()
                    .inView('<c-p flush-top.bind="customFlushTop"></c-p>')
                    .boundTo({
                        customFlushTop: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.flushTop).toBe(true);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-p></c-p>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSizeClasses = ['large', 'medium', 'small'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-p size.bind="customSize"></c-p>')
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

            it('css class: truncate', async done => {
                component = StageComponent.withResources().inView('<c-p></c-p>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.truncate).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
