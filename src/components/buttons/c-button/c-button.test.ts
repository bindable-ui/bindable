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

        describe('#showRightOrCenterIcon', () => {
            test('without icon', () => {
                expect(component.showRightOrCenterIcon()).toBeFalsy();
            });

            describe('with icon', () => {
                beforeEach(() => {
                    component.icon = 'icon--test';
                });

                test('when iconPosition is right', () => {
                    component.iconPosition = 'right';

                    expect(component.showRightOrCenterIcon()).toBeTruthy();
                });

                test('when iconPosition is center', () => {
                    component.iconPosition = 'center';

                    expect(component.showRightOrCenterIcon()).toBeTruthy();
                });

                test('when iconPosition is left', () => {
                    component.iconPosition = 'left';

                    expect(component.showRightOrCenterIcon()).toBeFalsy();
                });
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
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

            const existingColorClasses = ['primary', 'secondary', 'neutral', 'danger'];
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

            const existingIconPositionClasses = ['right', 'left', 'center'];
            existingIconPositionClasses.forEach(iconPosition => {
                it(`css class: ${iconPosition}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-button icon-position.bind="customIconPosition"></c-button>')
                        .boundTo({
                            customIconPosition: `${iconPosition}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.iconPosition]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            existingIconPositionClasses.forEach(iconPosition => {
                it(`css class: ${iconPosition}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-button icon.bind="icon" icon-position.bind="left"></c-button>')
                        .boundTo({
                            icon: 'bin',
                            left: 'left',
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.iconPosition]).not.toBe(undefined);
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
