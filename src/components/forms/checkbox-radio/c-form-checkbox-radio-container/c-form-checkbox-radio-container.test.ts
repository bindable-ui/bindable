/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-checkbox-radio-container component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing attached', async done => {
            component = StageComponent.withResources()
                .inView(
                    `<c-form-checkbox-radio-container name.bind="radios">
                    <c-form-radio></c-form-radio>
                </c-form-checkbox-radio-container>`,
                )
                .boundTo({
                    radios: 'some_radio',
                });

            try {
                await bootStrapEnvironment(component);
                const vm = component.viewModel;
                vm.attached();

                const myRadio = document.querySelector('[name="some_radio"]');
                expect(myRadio).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: no-label', async done => {
                component = StageComponent.withResources().inView(
                    '<c-form-checkbox-radio-container></c-form-checkbox-radio-container>',
                );

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['no-label']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView(
                    '<c-form-checkbox-radio-container></c-form-checkbox-radio-container>',
                );

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingStateClasses = [];
            existingStateClasses.forEach(state => {
                it(`css class: ${state}`, async done => {
                    component = StageComponent.withResources()
                        .inView(
                            '<c-form-checkbox-radio-container state.bind="customState">' +
                                '</c-form-checkbox-radio-container>',
                        )
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

            const existingLayoutClasses = ['inline'];
            existingLayoutClasses.forEach(layout => {
                it(`css class: ${layout}`, async done => {
                    component = StageComponent.withResources()
                        .inView(
                            `<c-form-checkbox-radio-container layout.bind="customLayout">
                    </c-form-checkbox-radio-container>`,
                        )
                        .boundTo({
                            customLayout: `${layout}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.layout]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });
});
