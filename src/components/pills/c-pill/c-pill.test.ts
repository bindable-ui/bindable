/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CPill} from './c-pill';

describe('c-pill component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CPill();
        });

        describe('#removeActionFunction', () => {
            test('without removeAction callback', () => {
                expect(component.removeActionFunction).toBeDefined();
                expect(component.removeAction).toBeFalsy();

                jest.spyOn(component, 'removeActionFunction');

                component.removeActionFunction();

                expect(component.removeActionFunction).toHaveBeenCalled();
            });

            test('with removeAction callback', () => {
                component.removeAction = jest.fn();

                expect(component.removeActionFunction).toBeDefined();
                expect(component.removeAction).toBeDefined();

                component.removeActionFunction();

                expect(component.removeAction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: pill', async done => {
                component = StageComponent.withResources().inView('<c-pill></c-pill>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.pill).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingColorClasses = ['info', 'neutral'];
            existingColorClasses.forEach(color => {
                it(`css class: ${color}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-pill color.bind="customColor"></c-pill>')
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
        });
    });
});
