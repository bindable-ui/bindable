/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {Router} from 'aurelia-router';
import {StageComponent} from 'aurelia-testing';
import {MobileNavOpen} from '../c-nav-horizontal/mobile-nav-open';
// import {mock} from 'ts-mockito';
import {CNavHorizontalItem} from './c-nav-horizontal-item';

describe('c-nav-horizontal-item component', () => {
    let component;

    describe('Unit', () => {
        describe('#toggleMobileNav', () => {
            it('works', done => {
                component = new CNavHorizontalItem(Router, MobileNavOpen);
                expect(component.mobileNavOpen.open).toBeFalsy();
                component.toggleMobileNav();
                expect(component.mobileNavOpen.open).toBeTruthy();
                done();
            });
        });

        describe('.generatedLink', () => {
            it('works', done => {
                component = new CNavHorizontalItem(Router, MobileNavOpen);
                component.router.generate = link => `#/${link}`;
                component.route = 'test-route';

                expect(component.generatedLink).toBe('#/test-route');
                done();
            });
        });

        describe('#actionFunction', () => {
            test('without action callback', () => {
                expect(component.actionFunction).toBeDefined();
                expect(component.action).toBeFalsy();

                jest.spyOn(component, 'actionFunction');

                component.actionFunction();

                expect(component.actionFunction).toHaveBeenCalled();
            });

            test('with action callback', () => {
                component.action = jest.fn();

                expect(component.actionFunction).toBeDefined();
                expect(component.action).toBeDefined();

                component.actionFunction();

                expect(component.action).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is icon endabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-nav-horizontal-item icon.bind="customIcon"></c-nav-horizontal-item>')
                .boundTo({
                    customIcon: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.icon).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('css class: nav-horizontal-item', async done => {
            component = StageComponent.withResources().inView('<c-nav-horizontal-item></c-nav-horizontal-item>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['nav-horizontal-item']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('css class: right', async done => {
            component = StageComponent.withResources().inView('<c-nav-horizontal-item></c-nav-horizontal-item>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.right).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        const existingStateClasses = ['active'];
        existingStateClasses.forEach(state => {
            it(`css class: ${state}`, async done => {
                component = StageComponent.withResources()
                    .inView('<c-nav-horizontal-item state.bind="customState"></c-nav-horizontal-item>')
                    .boundTo({
                        customState: `${state}`,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles[component.viewModel.state]).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
