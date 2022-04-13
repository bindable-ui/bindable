/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-cluster component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is wrap enabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-cluster wrap.bind="isWrap"></l-cluster>')
                .boundTo({
                    isWrap: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.wrap).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is truncated-content enabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-cluster truncated-content.bind="isTruncatedContent"></l-cluster>')
                .boundTo({
                    isTruncatedContent: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.truncatedContent).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: cluster', async done => {
                component = StageComponent.withResources().inView('<l-cluster></l-cluster>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.cluster).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: no-wrap', async done => {
                component = StageComponent.withResources().inView('<l-cluster></l-cluster>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['no-wrap']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: left', async done => {
                component = StageComponent.withResources().inView('<l-cluster></l-cluster>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.left).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: right', async done => {
                component = StageComponent.withResources().inView('<l-cluster></l-cluster>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.right).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
