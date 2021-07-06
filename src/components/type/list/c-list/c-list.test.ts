/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-list component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing noBullets enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-list no-bullets.bind="customNoBullets"></c-list>')
                .boundTo({
                    customNoBullets: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.noBullets).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-list></c-list>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: noBullets', async done => {
                component = StageComponent.withResources().inView('<c-list></c-list>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.noBullets).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: label-wrapper', async done => {
                component = StageComponent.withResources().inView('<c-list></c-list>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['label-wrapper']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: small', async done => {
                component = StageComponent.withResources().inView('<c-list></c-list>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.small).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
