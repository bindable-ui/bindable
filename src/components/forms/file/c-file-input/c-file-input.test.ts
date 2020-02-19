/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-file-input component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing imagePicker enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-file-input image-picker.bind="customImagePicker"></c-file-input>')
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

        describe('CSS Classes', () => {
            it('css class: file', async done => {
                component = StageComponent.withResources().inView('<c-file-input></c-file-input>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.file).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: error', async done => {
                component = StageComponent.withResources().inView('<c-file-input></c-file-input>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.error).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: image', async done => {
                component = StageComponent.withResources().inView('<c-file-input></c-file-input>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.image).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
