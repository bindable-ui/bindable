/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-list-container component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing dividers', async done => {
            component = StageComponent.withResources()
                .inView('<c-list-container dividers.bind="customDividers"></c-list-container>')
                .boundTo({
                    customDividers: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.dividers).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: list', async done => {
                component = StageComponent.withResources().inView('<c-list-container></c-list-container>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.list).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSizeClasses = ['small', 'medium'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-list-container size.bind="customSize"></c-list-container>')
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
