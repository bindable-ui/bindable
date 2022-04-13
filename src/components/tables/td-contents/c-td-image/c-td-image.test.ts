/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-image component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing activate', async done => {
            component = StageComponent.withResources().inView('<c-td-image></c-td-image>');

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
            it('css class: image', async done => {
                component = StageComponent.withResources().inView('<c-td-image></c-td-image>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.image).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
