/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-error component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-form-error></c-form-error>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: error', async done => {
                component = StageComponent.withResources().inView('<c-form-error></c-form-error>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.error).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: error-block', async done => {
                component = StageComponent.withResources().inView('<c-form-error></c-form-error>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['error-block']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
