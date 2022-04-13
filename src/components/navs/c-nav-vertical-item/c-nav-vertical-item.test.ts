/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CNavVerticalItem} from './c-nav-vertical-item';

describe('c-nav-vertical component', () => {
    let component;

    describe('Unit', () => {
        beforeEach(() => {
            component = new CNavVerticalItem();
        });

        describe('#iconActionFunction', () => {
            test('without iconAction callback', () => {
                expect(component.actionFunction).toBeDefined();
                expect(component.iconAction).toBeFalsy();

                jest.spyOn(component, 'actionFunction');

                component.actionFunction();

                expect(component.actionFunction).toHaveBeenCalled();
            });

            test('with iconAction callback', () => {
                component.iconAction = jest.fn();

                expect(component.actionFunction).toBeDefined();
                expect(component.iconAction).toBeDefined();

                component.actionFunction();

                expect(component.iconAction).toHaveBeenCalled();
            });
        });
    });

    describe('Integration', () => {
        it('is accordionItem enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-nav-vertical-item accordion-item.bind="isAccordionItem"></c-nav-vertical-item>')
                .boundTo({
                    isAccordionItem: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.accordionItem).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is isAccordionTransitionIn enabled', async done => {
            component = StageComponent.withResources()
                .inView(
                    `
                <c-nav-vertical-item
                    accordion-transition-in.bind="isAccordionTransitionIn"
                >
                </c-nav-vertical-item>
            `,
                )
                .boundTo({
                    isAccordionTransitionIn: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.accordionTransitionIn).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('#toggleAccordion', () => {
            let vm;

            beforeEach(async () => {
                component = StageComponent.withResources()
                    .inView(
                        `
                    <c-nav-vertical-item
                        accordion-item.bind=customTrue
                        accordion-state.bind="customState"
                        title.bind="customTitle"
                    >
                    </c-nav-vertical-item>
                `,
                    )
                    .boundTo({
                        customState: 'open',
                        customTitle: 'Title',
                        customTrue: true,
                    });

                await bootStrapEnvironment(component);
                vm = component.viewModel;

                jest.useFakeTimers();
            });

            afterEach(() => {
                jest.useRealTimers();
                component.dispose();
            });

            it('works', async done => {
                try {
                    expect(vm.accordionState).toBe('open');

                    vm.toggleAccordion();

                    jest.runOnlyPendingTimers();

                    expect(vm.accordionState).toBe('closed');
                    expect(vm.accordionTransitionIn).toBeTruthy();

                    vm.toggleAccordion();

                    jest.runOnlyPendingTimers();

                    expect(vm.accordionState).toBe('open');
                    expect(vm.accordionTransitionIn).toBeFalsy();

                    const toggle = document.querySelector('.open');

                    expect(toggle).not.toBeUndefined();

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('works with UI event triggers', async done => {
                try {
                    expect(vm.accordionState).toBe('open');
                    const el = component.element.querySelector('a');

                    expect(vm.accordionState).toBe('open');
                    expect(vm.accordionTransitionIn).toBeFalsy();

                    await el.click();

                    jest.runOnlyPendingTimers();

                    expect(vm.accordionState).toBe('closed');
                    expect(vm.accordionTransitionIn).toBeTruthy();

                    await el.click();

                    jest.runOnlyPendingTimers();

                    expect(vm.accordionState).toBe('open');
                    expect(vm.accordionTransitionIn).toBeFalsy();

                    const toggle = document.querySelector('.open');

                    expect(toggle).not.toBeUndefined();

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });

        describe('#clickTrigger', () => {
            let vm;
            let href;

            beforeEach(() => {
                // eslint-disable-next-line prefer-destructuring
                href = window.location.href;
            });

            afterEach(() => {
                window.location.href = href;
                component.dispose();
            });

            test('with href', async done => {
                try {
                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-nav-vertical-item
                            href.bind="customHref"
                            title.bind="customTitle"
                        >
                        </c-nav-vertical-item>
                    `,
                        )
                        .boundTo({
                            customHref: '#test-link',
                            customTitle: 'Title',
                        });

                    await bootStrapEnvironment(component);
                    vm = component.viewModel;

                    expect(window.location.href).toBe('about:blank');

                    vm.clickTrigger();

                    expect(window.location.href).toBe('about:blank#test-link');

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('without href', async done => {
                try {
                    component = StageComponent.withResources()
                        .inView(
                            `
                        <c-nav-vertical-item
                            title.bind="customTitle"
                        >
                        </c-nav-vertical-item>
                    `,
                        )
                        .boundTo({
                            customTitle: 'Title',
                        });

                    await bootStrapEnvironment(component);
                    vm = component.viewModel;

                    expect(window.location.href).toBe('about:blank');

                    vm.clickTrigger();

                    expect(window.location.href).toBe('about:blank');

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            test('with #closeAction', async () => {
                const clickAction = jest.fn();

                component = StageComponent.withResources()
                    .inView(
                        `
                    <c-nav-vertical-item
                        href.bind="customHref"
                        title.bind="customTitle"
                        click-action.bind="clickAction"
                    >
                    </c-nav-vertical-item>
                `,
                    )
                    .boundTo({
                        clickAction,
                        customHref: '#test-link',
                        customTitle: 'Title',
                    });

                await bootStrapEnvironment(component);
                vm = component.viewModel;

                expect(window.location.href).toBe('about:blank');

                vm.clickTrigger();

                expect(clickAction).toHaveBeenCalled();
                expect(window.location.href).toBe('about:blank');

                clickAction.mockReturnValue(false);

                vm.clickTrigger();

                expect(clickAction).toHaveBeenCalled();
                expect(window.location.href).toBe('about:blank');

                clickAction.mockReturnValue(true);

                vm.clickTrigger();

                expect(clickAction).toHaveBeenCalled();
                expect(window.location.href).toBe('about:blank#test-link');
            });

            it('works with UI event triggers', async done => {
                component = StageComponent.withResources()
                    .inView(
                        `
                    <c-nav-vertical-item
                        href.bind="customHref"
                        title.bind="customTitle"
                        click-action.bind="clickAction"
                    >
                    </c-nav-vertical-item>
                `,
                    )
                    .boundTo({
                        customHref: '#test-link',
                        customTitle: 'Title',
                    });

                await bootStrapEnvironment(component);
                vm = component.viewModel;

                spyOn(vm, 'clickTrigger');

                try {
                    const el = component.element.querySelector('a');

                    await el.click();

                    expect(vm.clickTrigger).toHaveBeenCalled();

                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });

    describe('CSS Classes', () => {
        it('testing base', async done => {
            component = StageComponent.withResources().inView('<c-nav-vertical-item></c-nav-vertical-item>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['nav-vertical-item']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        const existingStateClasses = ['active'];
        existingStateClasses.forEach(state => {
            it(`testing ${state}`, async done => {
                component = StageComponent.withResources()
                    .inView('<c-nav-vertical-item state.bind="customState"></c-nav-vertical-item>')
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

        it('testing sub', async done => {
            component = StageComponent.withResources().inView('<c-nav-vertical-item></c-nav-vertical-item>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.sub).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing accordion', async done => {
            component = StageComponent.withResources().inView(
                '<c-nav-vertical-item accordion-item.bind=true></c-nav-vertical-item>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['accordion-link']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing align-bottom', async done => {
            component = StageComponent.withResources().inView(
                '<c-nav-vertical-item align-bottom.bind=true></c-nav-vertical-item>',
            );

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['align-bottom']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
