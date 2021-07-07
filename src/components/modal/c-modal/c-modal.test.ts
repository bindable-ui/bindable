/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-modal component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing activate', async done => {
            component = StageComponent.withResources().inView('<c-modal></c-modal>');

            try {
                await bootStrapEnvironment(component);
                const vm = component.viewModel;
                vm.activate('test');
                expect(vm.model).toBe('test');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: dialog', async done => {
                component = StageComponent.withResources().inView('<c-modal></c-modal>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.dialog).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: header', async done => {
                component = StageComponent.withResources().inView('<c-modal></c-modal>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.header).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: close-button', async done => {
                component = StageComponent.withResources().inView('<c-modal></c-modal>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['close-button']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
