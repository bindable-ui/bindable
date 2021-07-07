/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-slider component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-slider></c-slider>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.slider).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: disabled', async done => {
                component = StageComponent.withResources().inView('<c-slider></c-slider>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.disabled).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
