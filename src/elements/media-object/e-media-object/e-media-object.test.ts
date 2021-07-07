/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {EMediaObject} from './e-media-object';

describe('e-media-object element', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Enable Booleans', () => {
            it('testing center enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<e-media-object center.bind="customCenter"></e-media-object>')
                    .boundTo({
                        customCenter: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.center).toBe(true);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: media-container', async done => {
                component = StageComponent.withResources().inView('<e-media-object></e-media-object>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['media-container']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: spinner', async done => {
                component = StageComponent.withResources().inView('<e-media-object></e-media-object>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.spinner).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
