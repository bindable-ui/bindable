/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('l-center component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is intrinsic endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-center intrinsic.bind="isIntrinsic"></l-center>')
                .boundTo({
                    isIntrinsic: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.intrinsic).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is text-center endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-center text-center.bind="isTextCenter"></l-center>')
                .boundTo({
                    isTextCenter: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.textCenter).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: center', async done => {
                component = StageComponent.withResources().inView('<l-center></l-center>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.center).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: intrinsic', async done => {
                component = StageComponent.withResources().inView('<l-center></l-center>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.intrinsic).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: text-center', async done => {
                component = StageComponent.withResources().inView('<l-center></l-center>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['text-center']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
