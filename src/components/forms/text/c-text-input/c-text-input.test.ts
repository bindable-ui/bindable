/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-text-input component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            if (component) {
                component.dispose();
            }
        });

        it('testing type is text', async done => {
            component = StageComponent.withResources()
                .inView('<c-text-input type.bind="customType"></c-text-input>')
                .boundTo({
                    customType: 'text',
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.type).toBe('text');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests invalid type', async done => {
            component = StageComponent.withResources()
                .inView('<c-text-input type.bind="customType"></c-text-input>')
                .boundTo({
                    customType: 'password',
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.type).toBe('text');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('clears the text', async done => {
            component = StageComponent.withResources().inView('<c-text-input></c-text-input>');
            try {
                await bootStrapEnvironment(component);
                const spy = jest.spyOn(component.viewModel, 'buttonFn');
                component.viewModel.textValue = 'test';
                component.viewModel.clearText();
                expect(component.viewModel.textValue).toBe('');
                expect(spy).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if enter key was press', async done => {
            const mockFn = jest.fn();
            component = StageComponent.withResources().inView('<c-text-input></c-text-input>');
            try {
                await bootStrapEnvironment(component);
                const spy = jest.spyOn(component.viewModel, 'buttonFn');
                component.viewModel.onKeyUp({which: 13, preventDefault: mockFn});
                expect(spy).toHaveBeenCalled();
                expect(mockFn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if some other key was pressed', async done => {
            const mockFn = jest.fn();
            component = StageComponent.withResources().inView('<c-text-input></c-text-input>');
            try {
                await bootStrapEnvironment(component);
                component.viewModel.onKeyUp({which: 101, preventDefault: mockFn});
                expect(mockFn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('EventListeners', () => {
            it('will call events', async done => {
                const mockFn = jest.fn();
                const eventListeners = {
                    blur: () => {
                        mockFn();
                    },
                };

                component = StageComponent.withResources()
                    .inView(
                        `
                        <c-text-input
                            event-listeners.bind="eventListeners"
                        >
                        </c-text-input>
                    `,
                    )
                    .boundTo({
                        eventListeners,
                    });

                try {
                    await bootStrapEnvironment(component);

                    const el = component.viewModel.element.querySelector('input');

                    el.focus();
                    el.blur();

                    expect(mockFn).toHaveBeenCalled();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: input', async done => {
                component = StageComponent.withResources().inView('<c-text-input></c-text-input>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.input).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingIconPositionClasses = ['left', 'right'];
            existingIconPositionClasses.forEach(iconPosition => {
                it(`css class: ${iconPosition}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-text-input icon-position.bind="customPosition"></c-form-text>')
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

            const existingButtonClasses = ['button', 'bin'];
            existingButtonClasses.forEach(button => {
                it(`css class: ${button}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-text-input button.bind="buttonType"></c-form-text>')
                        .boundTo({
                            buttonType: `${button}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.button]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            it('css class: clearable', async done => {
                component = StageComponent.withResources().inView('<c-text-input></c-text-input>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.clearable).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
