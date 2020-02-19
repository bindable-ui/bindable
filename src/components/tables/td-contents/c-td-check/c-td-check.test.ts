/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-td-check component', () => {
    let component;
    let viewModel;
    const model = {
        col: {},
        row: 0,
        value: 1,
    };

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-check></c-td-check>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for check component', async done => {
            expect(document.querySelector('c-checkbox-input')).toBeDefined();
            done();
        });

        // activate with model
        it('tests activate', async done => {
            viewModel.activate(model);
            expect(viewModel.value).toBe(1);
            done();
        });

        // activate value change with checkChanged
        it('tests activate valueChanged with col.checkChanged', async done => {
            const mockFn = jest.fn();
            // originally tried doing model.col.checkChanged = mockFn
            // However, for some unknown reason, this.col was always undefined.
            // tried changing the class, but I believe because row & col and not
            // bindables, it loses it in unit testing.  This was a workout to make
            // it work.
            viewModel.col = {checkChanged: mockFn};
            viewModel.activate(model);
            expect(1).toBe(1);
            expect(mockFn).toHaveBeenCalled();
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
