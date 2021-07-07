/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-timeline-week-container element', () => {
    let component;

    describe('Integration', () => {
        // wrapper
        it('testing timeline-week-container', async done => {
            component = StageComponent.withResources().inView(
                '<c-timeline-week-container></c-timeline-week-container>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.wrapper).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // dates
        it('testing timeline-week-container', async done => {
            component = StageComponent.withResources().inView(
                '<c-timeline-week-container></c-timeline-week-container>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.dates).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // days
        it('testing timeline-week-container', async done => {
            component = StageComponent.withResources().inView(
                '<c-timeline-week-container></c-timeline-week-container>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.days).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // content
        it('testing timeline-week-container', async done => {
            component = StageComponent.withResources().inView(
                '<c-timeline-week-container></c-timeline-week-container>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.content).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // today
        it('testing timeline-week-container', async done => {
            component = StageComponent.withResources().inView(
                '<c-timeline-week-container></c-timeline-week-container>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.today).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
