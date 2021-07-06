/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-tile component', () => {
    let component;

    describe('Integration', () => {
        it('testing hover enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile hover.bind="customHover"></c-tile>')
                .boundTo({
                    customHover: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.hover).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing showCheckbox enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile show-checkbox.bind="customShowCheckbox"></c-tile>')
                .boundTo({
                    customShowCheckbox: false,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.showCheckbox).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing showDrag enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile show-drag.bind="customShowDrag"></c-tile>')
                .boundTo({
                    customShowDrag: false,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.showDrag).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing showCheckbox using wrong type of string', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile show-checkbox.bind="customShowCheckbox"></c-tile>')
                .boundTo({
                    customShowCheckbox: 'true',
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.showCheckbox).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing imageContainerHeight', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile image-container-height.bind="customImageContainerHeight"></c-tile>')
                .boundTo({
                    customImageContainerHeight: 80,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.imageContainerHeight).toBe(80);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing imageContainerHeight', async done => {
            component = StageComponent.withResources()
                .inView('<c-tile image-container-height.bind="customImageContainerHeight"></c-tile>')
                .boundTo({
                    customImageContainerHeight: '80',
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.imageContainerHeight).toBe(70);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests title click, but no action handler defined', async done => {
            const myTitle = 'My Title';
            const queryStr = `div [title='${myTitle}']`;
            component = StageComponent.withResources()
                .inView('<c-tile title.bind="title"></c-tile>')
                .boundTo({
                    title: myTitle,
                });

            try {
                await bootStrapEnvironment(component);
                (document.querySelector(queryStr) as any).click();
                expect(component.viewModel.title).toEqual(myTitle);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests title click with an action', async done => {
            const myTitle = 'My Title';
            const handler = jest.fn();
            component = StageComponent.withResources()
                .inView('<c-tile title.bind="title" action.bind="action"></c-tile>')
                .boundTo({
                    action: handler,
                    title: myTitle,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.title).toEqual(myTitle);
                component.viewModel.tileClick();
                expect(handler).toBeCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('with an action', async done => {
            const myTitle = 'My Title';
            const handler = jest.fn();
            component = StageComponent.withResources()
                .inView(
                    `
                    <c-tile
                        title.bind="title"
                        check-action.bind="checkAction(checkedValue)"
                        checked-value.bind="checkedValue"
                    >
                    </c-tile>
                `,
                )
                .boundTo({
                    checkAction: handler,
                    checkedValue: false,
                    title: myTitle,
                });

            try {
                await bootStrapEnvironment(component);
                jest.useFakeTimers();
                component.viewModel.selectedValue = true;
                expect(handler).toHaveBeenCalled();
                jest.runAllTimers();
                jest.useRealTimers();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: tile', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.tile).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: hover', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.hover).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: image', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.image).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: checkbox-container', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['checkbox-container']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: pill', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.pill).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: tip', async done => {
                component = StageComponent.withResources().inView('<c-tile></c-tile>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.tip).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingStateClasses = ['processing'];
            existingStateClasses.forEach(state => {
                it(`css class: "${state}"`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-tile state.bind="customState"></c-tile>')
                        .boundTo({
                            customState: `${state}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.state]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            it('css class: disabled', async done => {
                component = StageComponent.withResources()
                    .inView('<c-tile state.bind="customState"></c-tile>')
                    .boundTo({
                        customState: 'disabled',
                    });
                try {
                    await bootStrapEnvironment(component);

                    expect(component.viewModel.state).toBe('disabled');
                    expect(component.viewModel.hover).toBeFalsy();
                    expect(component.viewModel.styles[component.viewModel.state]).toBeUndefined();
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            afterEach(() => {
                component.dispose();
            });
        });
    });
});
