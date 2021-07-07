/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-tip component', () => {
    let component;
    let viewModel;

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-tip></c-td-tip>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for tip component', async done => {
            expect(document.querySelector('c-tip')).toBeDefined();
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
