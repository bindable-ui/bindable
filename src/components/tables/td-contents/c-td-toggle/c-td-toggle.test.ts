/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-td-toggle component', () => {
    let component;
    let viewModel;
    const model = {
        col: {},
        row: 0,
        value: 1,
    };

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-toggle></c-td-toggle>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for toggle component', async done => {
            expect(document.querySelector('c-toggle-input')).toBeDefined();
            done();
        });

        // activate with model
        it('tests activate', async done => {
            viewModel.activate(model);
            expect(viewModel.value).toBe(1);
            done();
        });

        // activate value change with toggleChanged
        it('tests activate valueChanged with col.checkChanged', async done => {
            const mockFn = jest.fn();
            viewModel.col = {checkChanged: mockFn};
            viewModel.activate(model);
            expect(viewModel.value).toBe(1);
            expect(mockFn).toHaveBeenCalled();
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
