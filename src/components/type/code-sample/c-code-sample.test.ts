/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-code-sample component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing render', async done => {
            component = StageComponent.withResources().inView('<c-code-sample><c-p></c-p></c-code-sample>');

            try {
                await bootStrapEnvironment(component);
                const vm = component.viewModel;
                vm.code = `

            `;
                vm.trimCode();

                vm.codeSample = null;
                vm.renderTries = 10;
                vm.render();
                let n = 0;
                while (n < 25) {
                    vm.render();
                    n += 1;
                }

                setTimeout(() => {
                    expect(component.viewModel.styles).toBe(undefined);
                    done();
                }, 1000);
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: no css needed', async done => {
                component = StageComponent.withResources().inView('<c-code-sample></c-code-sample>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles).toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
