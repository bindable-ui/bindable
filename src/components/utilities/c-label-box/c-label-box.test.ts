/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CLabelBox} from './c-label-box';

describe('c-label-box component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CLabelBox();
        });

        describe('#editFunction', () => {
            test('without editFunction callback', () => {
                expect(component.editFunction).toBeDefined();
                expect(component.editFunction).toBeTruthy();

                jest.spyOn(component, 'editFunction');

                component.editFunction();

                expect(component.editFunction).toHaveBeenCalled();
            });

            test('with editFunction callback', () => {
                component.editFunction = jest.fn();

                expect(component.editFunction).toBeDefined();
                expect(component.editFunction).toBeDefined();

                component.editFunction();

                expect(component.editFunction).toHaveBeenCalled();
            });
        });

        describe('#doneFunction', () => {
            test('without doneFunction callback', () => {
                expect(component.doneFunction).toBeDefined();
                expect(component.doneFunction).toBeTruthy();

                jest.spyOn(component, 'doneFunction');

                component.doneFunction();

                expect(component.doneFunction).toHaveBeenCalled();
            });

            test('with doneFunction callback', () => {
                component.doneFunction = jest.fn();

                expect(component.doneFunction).toBeDefined();
                expect(component.doneFunction).toBeDefined();

                component.doneFunction();

                expect(component.doneFunction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-label-box></c-label-box>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        it('var: editable', async done => {
            component = StageComponent.withResources()
                .inView('<c-label-box editable.bind="customEditable"></c-label-box>')
                .boundTo({
                    customEditable: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.editable).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
