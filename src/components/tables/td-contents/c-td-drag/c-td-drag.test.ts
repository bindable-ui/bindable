/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-drag component', () => {
    let component;

    describe('Integration', () => {
        // Base Test
        it('testing for drag components', async done => {
            component = StageComponent.withResources().inView('<c-td-drag></c-td-drag>');

            try {
                await bootStrapEnvironment(component);
                expect(document.querySelector('c-drag-handle')).toBeDefined();
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
