/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CFormText} from './c-form-text';

describe('c-form-text component', () => {
    let component;

    describe('Unit', () => {
        describe('#onButtonAction', () => {
            test('without buttonAction defined', () => {
                component = new CFormText();

                expect(component.onButtonAction).toBeDefined();
                expect(component.buttonAction).toBeFalsy();

                component.onButtonAction('someText');
            });

            test('without buttonAction defined', () => {
                component = new CFormText();

                component.buttonAction = jest.fn();

                expect(component.onButtonAction).toBeDefined();
                expect(component.buttonAction).toBeDefined();

                component.onButtonAction('someText');

                expect(component.buttonAction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing alignInput enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-text align-input.bind="customAlignInput"></c-form-text>')
                .boundTo({
                    customAlignInput: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.alignInput).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing hasFocus enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-text has-focus.bind="customHasFocus"></c-form-text>')
                .boundTo({
                    customHasFocus: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.hasFocus).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: icon', async done => {
                component = StageComponent.withResources().inView('<c-form-text></c-form-text>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.icon).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-form-text></c-form-text>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: align-input', async done => {
                component = StageComponent.withResources().inView('<c-form-text></c-form-text>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['align-input']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingIconPositionClasses = ['left', 'right'];
            existingIconPositionClasses.forEach(iconPosition => {
                it(`css class: ${iconPosition}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-form-text icon-position.bind="customPosition"></c-form-text>')
                        .boundTo({
                            customPosition: `${iconPosition}`,
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
        });
    });
});
