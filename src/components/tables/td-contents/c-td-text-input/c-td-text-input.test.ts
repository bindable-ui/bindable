/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-td-text-input component', () => {
    let component;
    let viewModel;
    const model = {
        value: 'my test',
    };

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-text-input></c-td-text-input>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for input component', async done => {
            expect(document.querySelector('c-text-input')).toBeDefined();
            done();
        });

        // activate with model
        it('tests activate', async done => {
            viewModel.activate(model);
            expect(viewModel.value).toBe(model.value);
            done();
        });

        // changeDetection, but no change
        it('tests changeDetection with no change', async done => {
            const result = viewModel.changeDetection({}, {});
            expect(result).toBe(true);
            done();
        });

        // changeDetection with column change
        it('tests changeDetection with change', async done => {
            const mockFn = jest.fn();
            const result = viewModel.changeDetection({}, {rowValChanged: mockFn});
            expect(mockFn).toHaveBeenCalled();
            expect(result).toBe(true);
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
