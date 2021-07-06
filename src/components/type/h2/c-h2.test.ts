/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

describe('c-h2 component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('testing truncate enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-h2 truncate.bind="customTruncateNew"></c-h2>')
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

        describe('CSS Classes', () => {
            it('css class: base', async done => {
                component = StageComponent.withResources().inView('<c-h2></c-h2>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.base).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: truncate', async done => {
                component = StageComponent.withResources().inView('<c-h2></c-h2>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.truncate).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
