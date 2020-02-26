/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-toasts component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: warpper', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.wrapper).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: toaster', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.toaster).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: title-bar', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['title-bar']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: title', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.title).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: close', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.close).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: icon-container', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['icon-container']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: message', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.message).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: info', async done => {
                component = StageComponent.withResources().inView('<c-toasts></c-toasts>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.info).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
