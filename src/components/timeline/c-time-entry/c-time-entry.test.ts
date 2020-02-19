/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CTimeEntry} from './c-time-entry';

describe('c-time-entry element', () => {
    let component;

    describe('Integration', () => {
        // Base Test
        it('testing entry', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.entry).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Clickable Test
        it('testing clickable', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.clickable).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Active Test
        it('testing active', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.active).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Live Test
        it('testing live', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.live).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Container Test
        it('testing container', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.container).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Info Test
        it('testing info', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.info).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Delete Test
        it('testing delete', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.delete).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Deletable Test
        it('testing deletable', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.deletable).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Small Test
        it('testing small', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.small).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Expandable Test
        it('testing expandable', async done => {
            component = StageComponent.withResources().inView('<c-time-entry></c-time-entry>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.expandable).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        afterEach(() => {
            component.dispose();
        });
    });

    // describe('Unit', () => {
    //     beforeEach(() => {
    //         component = new CTimeEntry({});
    //     });
    //
    //     describe('#actionFunction', () => {
    //         test('without action callback', () => {
    //             expect(component.actionFunction).toBeDefined();
    //             expect(component.action).toBeFalsy();
    //
    //             jest.spyOn(component, 'actionFunction');
    //
    //             component.actionFunction();
    //
    //             expect(component.actionFunction).toHaveBeenCalled();
    //         });
    //
    //         test('with action callback', () => {
    //             component.action = jest.fn();
    //             component.clickable = true;
    //
    //             expect(component.actionFunction).toBeDefined();
    //             expect(component.action).toBeDefined();
    //
    //             component.actionFunction();
    //
    //             expect(component.action).toHaveBeenCalled();
    //         });
    //     });
    // });
});
