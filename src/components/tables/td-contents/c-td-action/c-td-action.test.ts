/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-td-action component', () => {
    let component;

    describe('Integration', () => {
        beforeEach(async () => {
            component = StageComponent.withResources().inView('<c-td-action></c-td-action>');

            await bootStrapEnvironment(component);
        });

        // Base Test
        it('testing for action component', async done => {
            try {
                expect(document.querySelector('c-td-action')).toBeDefined();
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing for activation', async done => {
            const model = {value: 'test'};
            component.viewModel.activate(model);

            expect(component.viewModel.value).toBe('test');
            done();
        });
    });
});
