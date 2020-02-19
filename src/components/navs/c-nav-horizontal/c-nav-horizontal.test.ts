/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-nav-horizontal component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is mobile enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-nav-horizontal mobile.bind="isMobile"></c-nav-horizontal>')
                .boundTo({
                    isMobile: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.mobile).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing toggleMobileNav', async done => {
            component = StageComponent.withResources().inView('<c-nav-horizontal></c-nav-horizontal>');

            try {
                await bootStrapEnvironment(component);
                const vm = component.viewModel;
                vm.toggleMobileNav();
                expect(vm.model).toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: nav-horizontal', async done => {
                component = StageComponent.withResources().inView('<c-nav-horizontal></c-nav-horizontal>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['nav-horizontal']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: mobile-trigger', async done => {
                component = StageComponent.withResources().inView('<c-nav-horizontal></c-nav-horizontal>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['mobile-trigger']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingSizeClasses = ['small', 'tiny'];
            existingSizeClasses.forEach(size => {
                it(`css class: ${size}`, async done => {
                    component = StageComponent.withResources()
                        .inView('<c-nav-horizontal size.bind="customSize"></c-nav-horizontal>')
                        .boundTo({
                            customSize: `${size}`,
                        });

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[component.viewModel.size]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });
});
