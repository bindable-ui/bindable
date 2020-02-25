/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-status component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing targetNew enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-status target-new.bind="customTargetNew"></c-status>')
                .boundTo({
                    customTargetNew: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.targetNew).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: container', async done => {
                component = StageComponent.withResources().inView('<c-status></c-status>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: status', async done => {
                component = StageComponent.withResources().inView('<c-status></c-status>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.status).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingColorClasses = ['healthy', 'warning', 'critical', 'info'];
            existingColorClasses.forEach(state => {
                it(`css class: ${state}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-status state.bind="customState"></c-status>')
                        .boundTo({
                            customState: `${state}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.state]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });
});
