/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: has css', async done => {
                component = StageComponent.withResources()
                    .inView('<c-td row.bind="row" col.bind="col"></c-td>')
                    .boundTo({
                        col: {
                            colHeadName: 'mock',
                        },
                        row: {
                            mock: 'mock value',
                        },
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
