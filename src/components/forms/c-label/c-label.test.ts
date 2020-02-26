/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CLabel} from './c-label';

describe('c-label component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CLabel();
        });

        describe('#editingActionFunction', () => {
            test('without editingAction callback', () => {
                expect(component.editingActionFunction).toBeDefined();
                expect(component.editingAction).toBeFalsy();

                jest.spyOn(component, 'editingActionFunction');

                component.editingActionFunction();

                expect(component.editingActionFunction).toHaveBeenCalled();
            });

            test('with editingAction callback', () => {
                component.editingAction = jest.fn();

                expect(component.editingActionFunction).toBeDefined();
                expect(component.editingAction).toBeDefined();

                component.editingActionFunction();

                expect(component.editingAction).toHaveBeenCalled();
            });
        });

        describe('#doneEditingActionFunction', () => {
            test('without doneEditingAction callback', () => {
                expect(component.doneEditingActionFunction).toBeDefined();
                expect(component.doneEditingAction).toBeFalsy();

                jest.spyOn(component, 'doneEditingActionFunction');

                component.doneEditingActionFunction();

                expect(component.doneEditingActionFunction).toHaveBeenCalled();
            });

            test('with doneEditingAction callback', () => {
                component.doneEditingAction = jest.fn();

                expect(component.doneEditingActionFunction).toBeDefined();
                expect(component.doneEditingAction).toBeDefined();

                component.doneEditingActionFunction();

                expect(component.doneEditingAction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label', async done => {
                component = StageComponent.withResources().inView('<c-label></c-label>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.label).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: error', async done => {
                component = StageComponent.withResources().inView('<c-label></c-label>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.error).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: done', async done => {
                component = StageComponent.withResources().inView('<c-label></c-label>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.done).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: editable', async done => {
                component = StageComponent.withResources()
                    .inView('<c-label editable.bind="customEditable"></c-label>')
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

            it('var: notEditing', async done => {
                component = StageComponent.withResources()
                    .inView('<c-label not-editing.bind="customNotEditing"></c-label>')
                    .boundTo({
                        customNotEditing: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.notEditing).toBe(true);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('var: editing', async done => {
                component = StageComponent.withResources()
                    .inView('<c-label editing.bind="customEditing"></c-label>')
                    .boundTo({
                        customEditing: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.editing).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
