/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-checkbox-label component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: label', async done => {
                // tslint:disable-next-line: max-line-length
                component = StageComponent.withResources().inView(
                    '<c-checkbox-label id="checkbox"></c-checkbox-label>',
                );

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
