/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-radio-input component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: radio', async done => {
                // tslint:disable-next-line: max-line-length
                component = StageComponent.withResources().inView(
                    '<c-radio-input name="name" id="id"></c-radio-input>',
                );

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.radio).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
