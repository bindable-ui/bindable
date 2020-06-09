/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-form-radio component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: should not have any styles', async done => {
                component = StageComponent.withResources().inView('<c-form-radio></c-form-radio>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles).toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        it('calls checkedChanged with action handler', async done => {
            const mockFn = jest.fn();
            const template = `
            <c-form-radio
                actions.bind="radioActions">
            </c-form-radio>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    radioActions: {
                        onChange: mockFn,
                    },
                });

            try {
                await bootStrapEnvironment(component);
                component.viewModel.checkedChanged();
                expect(mockFn).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
