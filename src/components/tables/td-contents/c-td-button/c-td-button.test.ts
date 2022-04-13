/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-button component', () => {
    let component;
    let viewModel;
    const model = {
        col: {},
        row: 0,
        value: 1,
    };

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-button></c-td-button>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for button component', async done => {
            expect(document.querySelector('c-button')).toBeDefined();
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
