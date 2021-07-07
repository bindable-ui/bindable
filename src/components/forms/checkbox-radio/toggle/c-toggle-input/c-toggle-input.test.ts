/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-toggle-input component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('executes the onChange event when input clicked but no handler is executed', async done => {
            const handler = jest.fn();
            const checkedValue = false;
            const queryStr = 'input';
            component = StageComponent.withResources()
                .inView('<c-toggle-input id="checkbox" checked-value.bind="checkedValue"></c-toggle-input>')
                .boundTo({
                    checkedValue,
                    customWrap: true,
                });

            try {
                await bootStrapEnvironment(component);
                document.querySelector(queryStr).click();
                expect(handler).toHaveBeenCalledTimes(0);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('executes the onChange event when input clicked', async done => {
            const handler = jest.fn();
            const checkedValue = false;
            const queryStr = 'input';
            component = StageComponent.withResources()
                .inView(
                    `<c-toggle-input id="checkbox" checked-value.bind="checkedValue" on-change.bind="action">
                </c-toggle-input>`,
                )
                .boundTo({
                    checkedValue,
                    action: handler,
                    customWrap: true,
                });

            try {
                await bootStrapEnvironment(component);
                document.querySelector(queryStr).click();

                expect(handler).toHaveBeenCalledTimes(1);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: check', async done => {
                // tslint:disable-next-line: max-line-length
                component = await StageComponent.withResources().inView(
                    '<c-toggle-input id="checkbox"></c-toggle-input>',
                );

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.check).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
