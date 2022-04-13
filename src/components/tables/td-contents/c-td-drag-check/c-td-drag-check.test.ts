/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-drag-check component', () => {
    let component;

    describe('Integration', () => {
        // Base Test
        it('testing for drag and check components', async done => {
            component = StageComponent.withResources().inView('<c-td-drag-check></c-td-drag-check>');

            try {
                await bootStrapEnvironment(component);
                expect(document.querySelector('c-drag-handle')).toBeDefined();
                expect(document.querySelector('c-checkbox-input')).toBeDefined();
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
