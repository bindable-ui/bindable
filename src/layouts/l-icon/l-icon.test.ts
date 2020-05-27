/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';

declare const $: any;

describe('l-icon component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        describe('Enable Booleans', () => {
            it('testing iconOnly enabled', async done => {
                component = StageComponent.withResources()
                    .inView('<l-icon icon-only.bind="customIconLoading"></l-grid>')
                    .boundTo({
                        customIconOnly: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.iconOnly).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('CSS Classes', () => {
            it('css class: icon', async done => {
                component = StageComponent.withResources().inView('<l-icon></l-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.icon).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: spacing', async done => {
                component = StageComponent.withResources().inView('<l-icon></l-icon>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.spacing).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
