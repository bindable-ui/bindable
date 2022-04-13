/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-toggle component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing click with no action', async done => {
            const handler = jest.fn();
            const checkedValue = false;
            const queryStr = 'input';
            component = StageComponent.withResources()
                .inView('<c-form-toggle checked-value.bind="checkedValue"></c-form-toggle>')
                .boundTo({
                    checkedValue,
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

        it('testing click with action', async done => {
            const handler = jest.fn();
            const checkedValue = false;
            const queryStr = 'input';
            component = StageComponent.withResources()
                .inView('<c-form-toggle checked-value.bind="checkedValue" on-change.bind="action"></c-form-toggle>')
                .boundTo({
                    checkedValue,
                    action: handler,
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
                component = await StageComponent.withResources().inView('<c-form-toggle></c-form-toggle>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
