/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-toggle-label component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label', async done => {
                // tslint:disable-next-line: max-line-length
                component = StageComponent.withResources().inView('<c-toggle-label id="checkbox"></c-toggle-label>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.label).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
