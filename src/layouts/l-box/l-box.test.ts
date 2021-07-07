/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-box component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is scrolling endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-box scrolling.bind="isScrolling"></l-box>')
                .boundTo({
                    isScrolling: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.scrolling).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is fill-space endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-box fill-space.bind="isFillSpace"></l-box>')
                .boundTo({
                    isFillSpace: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.fillSpace).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: box', async done => {
                component = StageComponent.withResources().inView('<l-box></l-box>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.box).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: border', async done => {
                component = StageComponent.withResources().inView('<l-box></l-box>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.border).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: scrolling', async done => {
                component = StageComponent.withResources().inView('<l-box></l-box>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.scrolling).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
