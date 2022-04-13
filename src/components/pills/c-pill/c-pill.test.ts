/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CPill} from './c-pill';

describe('c-pill component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CPill();
        });

        describe('#actionFunction', () => {
            test('without iconAction callback', () => {
                expect(component.actionFunction).toBeDefined();
                expect(component.iconAction).toBeFalsy();

                jest.spyOn(component, 'actionFunction');

                component.actionFunction();

                expect(component.actionFunction).toHaveBeenCalled();
            });

            test('with iconAction callback', () => {
                component.iconAction = jest.fn();

                expect(component.actionFunction).toBeDefined();
                expect(component.iconAction).toBeDefined();

                component.actionFunction();

                expect(component.iconAction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('CSS Classes', () => {
            it('css class: pill', async done => {
                component = StageComponent.withResources().inView('<c-pill></c-pill>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.pill).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
