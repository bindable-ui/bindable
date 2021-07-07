/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-info component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-form-info></c-form-info>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: info', async done => {
                component = StageComponent.withResources().inView('<c-form-info></c-form-info>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.info).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: info-block', async done => {
                component = StageComponent.withResources().inView('<c-form-info></c-form-info>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['info-block']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
