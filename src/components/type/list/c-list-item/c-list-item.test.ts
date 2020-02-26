/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-list-item component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });
        it('testing wrap enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-list-item wrap.bind="customWrap"></c-list-item>')
                .boundTo({
                    customWrap: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.wrap).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: list-item', async done => {
                component = StageComponent.withResources().inView('<c-list-item></c-list-item>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['list-item']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingStateClasses = ['active'];
            existingStateClasses.forEach(state => {
                it(`css class: ${state}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-list-item state.bind="customState"></c-list-item>')
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
