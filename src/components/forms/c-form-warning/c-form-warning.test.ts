/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-form-warning component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-form-warning></c-form-warning>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: warning', async done => {
                component = StageComponent.withResources().inView('<c-form-warning></c-form-warning>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.warning).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: warning-block', async done => {
                component = StageComponent.withResources().inView('<c-form-warning></c-form-warning>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['warning-block']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
