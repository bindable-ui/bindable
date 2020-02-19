/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-h1 component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });
        it('testing truncate', async done => {
            component = StageComponent.withResources()
                .inView('<c-h1 truncate.bind="customTruncateNew"></c-h1>')
                .boundTo({
                    customTruncateNew: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.truncate).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing flush', async done => {
            component = StageComponent.withResources()
                .inView('<c-h1 flush-top.bind="customFlushTop"></c-h1>')
                .boundTo({
                    customFlushTop: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.flushTop).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-h1></c-h1>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
