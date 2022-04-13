/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-h3 component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing truncate enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-h3 truncate.bind="customTruncateNew"></c-h3>')
                .boundTo({
                    customTruncateNew: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.truncate).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing dark-back enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-h3 dark-back.bind="customDarkBack"></c-h3>')
                .boundTo({
                    customDarkBack: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.darkBack).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing flush', async done => {
            component = StageComponent.withResources()
                .inView('<c-h3 flush-top.bind="customFlushTop"></c-h3>')
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

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-h3></c-h3>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: truncate', async done => {
                component = StageComponent.withResources().inView('<c-h3></c-h3>');

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
