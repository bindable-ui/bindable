/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {LIcon} from './l-icon';

declare const $: any;

describe('l-icon component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new LIcon();
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
                    .inView('<l-icon icon-only.bind="customIconOnly"></l-icon>')
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
        });

        describe('CSS Classes', () => {
            it('css class: icon', async done => {
                component = StageComponent.withResources().inView('<l-icon></l-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.icon).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: spacing', async done => {
                component = StageComponent.withResources().inView('<l-icon></l-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.spacing).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
