/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-image component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.label).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: container', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: image', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.image).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: center', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.center).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: desc', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.desc).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: active', async done => {
                component = StageComponent.withResources().inView('<c-form-image></c-form-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.active).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
