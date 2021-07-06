/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-pill component', () => {
    let component;

    beforeEach(async () => {
        component = StageComponent.withResources().inView('<c-td-pill></c-td-pill>');

        await bootStrapEnvironment(component);
    });

    describe('Integration', () => {
        // Base Test
        it('testing for pill component', async done => {
            try {
                expect(document.querySelector('c-td-pill')).toBeDefined();
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

        afterEach(() => {
            component.dispose();
        });
    });
});
