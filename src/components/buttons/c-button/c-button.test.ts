/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CButton} from './c-button';

describe('c-button component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CButton();
        });

        describe('#actionFunction', () => {
            test('without action callback', () => {
                expect(component.actionFunction).toBeDefined();
                expect(component.action).toBeFalsy();

                jest.spyOn(component, 'actionFunction');

                component.actionFunction();

                expect(component.actionFunction).toHaveBeenCalled();
            });

            test('with action callback', () => {
                component.action = jest.fn();

                expect(component.actionFunction).toBeDefined();
                expect(component.action).toBeDefined();

                component.actionFunction();

                expect(component.action).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Enable Booleans', () => {
            it('testing iconOnly enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<c-button icon-only.bind="customIconLoading"></l-icon>')
                    .boundTo({
                        customIconOnly: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.iconOnly).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('testing targetnew enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<c-button target-new.bind="customTargetNew"></l-icon>')
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
        });

        describe('CSS Classes', () => {
            it('css class: button', async done => {
                component = StageComponent.withResources().inView('<c-button></c-button>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.button).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingColorClasses = ['primary', 'secondary', 'subOne', 'neutral', 'danger'];
            existingColorClasses.forEach(color => {
                it(`css class: ${color}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-button color.bind="customColor"></c-button>')
                        .boundTo({
                            customColor: `${color}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.color]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            const existingSizeClasses = ['medium', 'small'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-button size.bind="customSize"></c-button>')
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

            const existingStateClasses = ['disabled', 'thinking'];
            existingStateClasses.forEach(state => {
                it(`css class: ${state}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-button state.bind="customState"></c-button>')
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

            it('css class: targetNew', async done => {
                component = StageComponent.withResources()
                    .inView('<c-button target-new.bind="customTargetNew"></c-button>')
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
        });
    });
});
