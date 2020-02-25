/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {CTimelineBlock} from './c-timeline-block';

describe('c-timeline-block element', () => {
    let component;

    describe('Integration', () => {
        // Base Test
        it('testing timeline-hour', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['hour-block']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Hour
        it('testing hour', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.hour).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Add New Top
        it('testing add-new-top', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['add-new-top']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Add New Middle
        it('testing add-new-middle', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['add-new-middle']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Add
        it('testing add', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.add).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if addNew is enabled
        it('testing addNewTop', async done => {
            component = StageComponent.withResources()
                .inView('<c-timeline-block add-new-top.bind="customAddNew"></c-timeline-block>')
                .boundTo({
                    customAddNew: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.addNewTop).toBe(true);
                expect(component.viewModel.addNewMiddle).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
