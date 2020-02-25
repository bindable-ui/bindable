/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-form-slider component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-form-slider></c-form-slider>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: inline', async done => {
                component = StageComponent.withResources().inView('<c-form-slider></c-form-slider>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.inline).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
