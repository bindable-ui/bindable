/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-file component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing imagePicker enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-file image-picker.bind="customImagePicker"></c-form-file>')
                .boundTo({
                    customImagePicker: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.imagePicker).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing isUploading enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-file is-uploading.bind="customIsUploading"></c-form-file>')
                .boundTo({
                    customIsUploading: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isUploading).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing showReset enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-file show-reset.bind="customShowReset"></c-form-file>')
                .boundTo({
                    customShowReset: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.showReset).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: image-src-container', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['image-src-container']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: image', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.image).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: remove-image', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['remove-image']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: no-image', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['no-image']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: is-uploading', async done => {
                component = StageComponent.withResources().inView('<c-form-file></c-form-file>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['is-uploading']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
