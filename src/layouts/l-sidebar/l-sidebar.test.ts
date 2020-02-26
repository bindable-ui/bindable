/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('l-sidebar component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is scrolling endabled', async done => {
            component = StageComponent.withResources()
                .inView('<l-sidebar scrolling.bind="isScrolling"></l-sidebar>')
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
            it('css class: sidebar', async done => {
                component = StageComponent.withResources().inView('<l-sidebar></l-sidebar>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.sidebar).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSideClasses = ['left', 'right'];
            existingSideClasses.forEach(side => {
                it(`css class: ${side}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<l-sidebar side.bind="customSide"></l-sidebar>')
                        .boundTo({
                            customSide: `${side}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.side]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });
});
