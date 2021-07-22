/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-truncate-toggle component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing activate', async done => {
            component = StageComponent.withResources().inView('<c-td-truncate-toggle></c-td-truncate-toggle>');

            try {
                await bootStrapEnvironment(component);
                const vm = component.viewModel;
                vm.activate({value: 'test'});
                expect(vm.value).toBe('test');
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: truncate', async done => {
                component = StageComponent.withResources().inView('<c-td-truncate-toggle></c-td-truncate-toggle>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.truncate).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
