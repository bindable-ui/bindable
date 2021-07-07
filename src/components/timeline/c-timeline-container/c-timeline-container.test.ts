/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CTimelineContainer} from './c-timeline-container';

describe('c-timeline-container element', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CTimelineContainer();
        });

        test('it initializes', () => {
            expect(component.currentTimeTop).toBe(-1);
            expect(component.attached).toBeDefined();
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        // Base Test
        it('testing timeline', async done => {
            component = StageComponent.withResources().inView('<c-timeline-container></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.timeline).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Current Time Test
        it('testing current time', async done => {
            component = StageComponent.withResources().inView('<c-timeline-container></c-timeline-container>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['current-time']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // Test if loading is enabled
        it('testing loading', async done => {
            component = StageComponent.withResources()
                .inView('<c-timeline-container loading.bind="customLoading"></c-timeline-container>')
                .boundTo({
                    customLoading: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.loading).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
