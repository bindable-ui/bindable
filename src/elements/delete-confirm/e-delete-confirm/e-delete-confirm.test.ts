/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

import {EDeleteConfirm} from './e-delete-confirm';

describe('e-delete-confirm element', () => {
    let component: any;

    describe('Integration', () => {
        // Base Test
        it('default values', async done => {
            component = StageComponent.withResources().inView('<e-delete-confirm></e-delete-confirm>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.tipSize).toBe('large');
                expect(component.viewModel.tipSide).toBe('top');
                expect(component.viewModel.tipArrowPosition).toBe('rightEdge');
                expect(component.viewModel.title).toBe('Channel');
                expect(component.viewModel.action).toBe(undefined);
                expect(component.viewModel.match).toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests binding values', async done => {
            const testFn = () => true;
            const channelName = 'Test Channel';
            const deleteMessage = 'Type Delete';
            const buttonState = 'disabled';

            component = StageComponent.withResources()
                .inView(
                    `
                    <e-delete-confirm
                        delete-message.bind="deleteMessage"
                        match.bind="channelName"
                        action.call="testFn"
                        tip-side="bottom"
                        trigger-button-state.bind="buttonState"
                    >
                    </e-delete-confirm>
                `,
                )
                .boundTo({
                    buttonState,
                    channelName,
                    deleteMessage,
                    testFn,
                });

            try {
                await bootStrapEnvironment(component);

                expect(component.viewModel.triggerButtonState).toBe(buttonState);
                expect(component.viewModel.deleteMessage).toBe(deleteMessage);
                expect(component.viewModel.tipSide).toBe('bottom');
                expect(component.viewModel.match).toBe('Test Channel');
                expect(component.viewModel.action).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('.deleteMessage', () => {
            let testFn;
            let channelName;
            let deleteMessage;

            beforeEach(() => {
                testFn = () => true;
                channelName = 'Test Channel';
                deleteMessage = 'Type Delete';
            });

            it('shows default delete message when unbound', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                        <e-delete-confirm
                            match.bind="channelName"
                            action.call="testFn"
                            tip-side="bottom"
                        >
                        </e-delete-confirm>
                    `,
                    )
                    .boundTo({
                        channelName,
                        testFn,
                    });

                try {
                    await bootStrapEnvironment(component);
                    const vm = component.viewModel;
                    vm.attached();

                    expect(component.viewModel.showDeleteMessage).toBeFalsy();
                    expect(component.viewModel.textLabel).toBe('Channel Name');
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('shows bound delete message', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                        <e-delete-confirm
                            delete-message.bind="deleteMessage"
                            match.bind="channelName"
                            action.call="testFn"
                            tip-side="bottom"
                        >
                        </e-delete-confirm>
                    `,
                    )
                    .boundTo({
                        channelName,
                        deleteMessage,
                        testFn,
                    });

                try {
                    await bootStrapEnvironment(component);
                    const vm = component.viewModel;
                    await vm.attached();

                    expect(component.viewModel.deleteMessage).toBe(deleteMessage);
                    expect(component.viewModel.showDeleteMessage).toBeTruthy();
                    expect(component.viewModel.textLabel).toBe('');
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });

    describe('Unit', () => {
        beforeEach(() => {
            component = new EDeleteConfirm();
        });

        describe('#delete', () => {
            it('returns immediately', async () => {
                // Shouldn't reset error message
                component.error = 'Any error is fine';
                component.isDeleting = true;
                await component.delete();

                expect(component.error).toBe('Any error is fine');
            });

            it("Names don't match", async () => {
                component.error = 'Any error is fine';
                component.match = 'My Channel';
                component.matchCheck = 'This will not work';

                await component.delete();

                // Trying to be safe since wording could change
                expect(component.error).not.toBe('Any error is fine');
                expect(component.error).not.toBe('');
                expect(component.matchCheck).toBe('This will not work');
            });

            test('no function is passed in', async () => {
                component.error = 'Any error is fine';
                component.match = 'My Channel';
                component.matchCheck = 'My Channel';

                await component.delete();

                // Should clear error and that's it
                expect(component.error).toBe('');
            });

            test('action function has error', async () => {
                component.action = () => Promise.reject();
                component.error = 'Any error is fine';
                component.match = 'My Channel';
                component.matchCheck = 'My Channel';

                await component.delete();

                // Trying to be safe since wording could change
                expect(component.error).not.toBe('Any error is fine');
                expect(component.error).not.toBe('');
                expect(component.matchCheck).toBe('My Channel');
            });

            test('action function works', async () => {
                component.deleteConf = {
                    toggleVisible: jest.fn(),
                };
                component.action = () => Promise.resolve();
                component.error = 'Any error is fine';
                component.match = 'My Channel';
                component.matchCheck = 'My Channel';

                await component.delete();

                expect(component.error).toBe('');
                expect(component.deleteConf.toggleVisible).toHaveBeenCalled();
                expect(component.matchCheck).toBe('');
            });
        });

        describe('@buttonState', () => {
            it('defaults to disabled', () => {
                expect(component.buttonState).toBe('disabled');
            });

            it('isDeleting', () => {
                component.isDeleting = true;

                expect(component.buttonState).toBe('thinking');
            });

            it('empty string', () => {
                component.match = 'Test';
                component.matchCheck = 'Test';
                component.isDeleting = false;

                expect(component.buttonState).toBe('');
            });
        });

        describe('@buttonState', () => {
            it('will disable via acl', () => {
                component._state = 'disabled';

                expect(component.mainButtonState).toBe('disabled');
            });

            it('will be thinking', () => {
                component.isDeleting = true;

                expect(component.mainButtonState).toBe('thinking');
            });

            it('defaults to empty', () => {
                expect(component.mainButtonState).toBe('');
            });
        });
    });
});
