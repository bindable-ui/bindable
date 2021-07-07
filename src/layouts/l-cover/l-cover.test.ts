/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-cover component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is center endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-cover center.bind="isCenter"></l-cover>')
                .boundTo({
                    isCenter: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.center).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is scrolling endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-cover scrolling.bind="isScrolling"></l-cover>')
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

        describe('CSS Classes', () => {
            it('css class: cover', async done => {
                component = StageComponent.withResources().inView('<l-cover></l-cover>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.cover).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: scrolling', async done => {
                component = StageComponent.withResources().inView('<l-cover></l-cover>');

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
