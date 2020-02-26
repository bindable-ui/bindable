/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-notification component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('css class: notification', async done => {
            component = StageComponent.withResources().inView('<c-notification></c-notification>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.notification).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('css class: content', async done => {
            component = StageComponent.withResources().inView('<c-notification></c-notification>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.content).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('css class: callout', async done => {
            component = StageComponent.withResources().inView('<c-notification></c-notification>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.callout).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        const existingTypeClasses = ['info', 'warning', 'critical', 'success'];
        existingTypeClasses.forEach(type => {
            it(`css class: ${type}`, async done => {
                component = StageComponent.withResources()
                    .inView('<c-notification type.bind="customType"></c-notification>')
                    .boundTo({
                        customType: `${type}`,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles[component.viewModel.type]).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
