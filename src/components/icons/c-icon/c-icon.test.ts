/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CIcon} from './c-icon';

describe('c-icon component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CIcon();
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

        describe('CSS Classes', () => {
            it('css class: icon', async done => {
                component = StageComponent.withResources().inView('<c-icon></c-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.icon).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: action', async done => {
                component = StageComponent.withResources().inView('<c-icon></c-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.action).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingColorClasses = [
                'white',
                'light-gray',
                'gray',
                'primary',
                'primary-light',
                'secondary',
                'sub-one',
                'sub-two',
            ];
            existingColorClasses.forEach(color => {
                it(`css class ${color}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-icon color.bind="customColor"></c-icon>')
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

            const existingSizesClasses = ['tiny', 'small', 'medium', 'large', 'huge'];
            existingSizesClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-icon size.bind="customSize"></c-icon>')
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
        });
    });
});
