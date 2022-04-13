/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-spinner component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-spinner></c-spinner>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSizeClasses = ['small'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-spinner size.bind="customSize"></c-size>')
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
