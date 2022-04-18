/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-add-remove component', () => {
    let component;
    const rightVals = [
        {
            text: '3',
            value: 3,
        },
        {
            text: '4',
            value: 4,
        },
    ];
    const leftVals = [
        {
            text: '1',
            value: 1,
        },
        {
            text: '2',
            value: 2,
        },
    ];

    describe('Integration', () => {
        afterEach(() => {
            try {
                component.dispose();
            } catch (e) {
                // pass, catching runtime error due to a bug in eonasdan-boostrap-datetimepicker
            }
        });

        it('testing simple enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove simple.bind="customSimple"></c-form-add-remove>')
                .boundTo({
                    customSimple: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.simple).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing scrollToLoadLeft enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove scroll-to-load-left.bind="customScrollToLoadLeft"></c-form-add-remove>')
                .boundTo({
                    customScrollToLoadLeft: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.scrollToLoadLeft).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing scrollToLoadRight enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove scroll-to-load-right.bind="customScrollToLoadRight"></c-form-add-remove>')
                .boundTo({
                    customScrollToLoadRight: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.scrollToLoadRight).toBeTruthy();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing isLoadingLeft enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove is-loading-left.bind="customIsLoadingLeft"></c-form-add-remove>')
                .boundTo({
                    customIsLoadingLeft: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.scrollToLoadRight).toBeFalsy();
                expect(component.viewModel.isLoadingLeft).toBeTruthy();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing isLoadingRight enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove is-loading-right.bind="customIsLoadingRight"></c-form-add-remove>')
                .boundTo({
                    customIsLoadingRight: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isLoadingRight).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing isLoadingMoreLeft enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove is-loading-more-left.bind="customIsLoadingMoreLeft"></c-form-add-remove>')
                .boundTo({
                    customIsLoadingMoreLeft: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isLoadingMoreLeft).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing isLoadingMoreRight enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove is-loading-more-right.bind="customIsLoadingMoreRight"></c-form-add-remove>')
                .boundTo({
                    customIsLoadingMoreRight: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.isLoadingMoreRight).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing reorder enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-form-add-remove reorder.bind="customReorder"></c-form-add-remove>')
                .boundTo({
                    customReorder: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.reorder).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing moving selected items from right to left', async done => {
            // we pass a 1: 10 so the findIndex returns -1 to cover all branches
            const selectedItem = {0: 3, 1: 10};
            const template = `
            <c-form-add-remove list-left.two-way="leftVals" list-right.two-way="rightVals">
            </c-form-add-remove>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    leftVals,
                    rightVals,
                });

            try {
                await bootStrapEnvironment(component);
                // I could do click event, but decided against it so I could cover all branches
                component.viewModel.selectRight = selectedItem;
                component.viewModel.moveLeft();
                expect(component.viewModel.listLeft.length).toBe(3);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing moving selected items from left to right', async done => {
            // we pass a 1: 10 so the findIndex returns -1 to cover all branches
            const selectedItem = {0: 1, 1: 10};
            const template = `
            <c-form-add-remove list-left.two-way="leftVals" list-right.two-way="rightVals">
            </c-form-add-remove>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    leftVals,
                    rightVals,
                });

            try {
                await bootStrapEnvironment(component);
                // I could do click event, but decided against it so I could cover all branches
                component.viewModel.selectLeft = selectedItem;
                component.viewModel.moveRight();
                expect(component.viewModel.listRight.length).toBe(2);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-form-add-remove></c-form-add-remove>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
