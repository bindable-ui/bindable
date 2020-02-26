/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-code component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('css class: base', async done => {
            component = StageComponent.withResources().inView('<c-code></c-code>');

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
