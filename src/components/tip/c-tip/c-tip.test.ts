/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

describe('c-tip component', () => {
    let component;

    // Base Test
    it('testing base', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.tip).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Container Test
    it('testing container', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.container).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Trigger Test
    it('testing trigger', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.trigger).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Color Test
    it('testing color', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.color).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Close Test
    it('testing close', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.close).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Right Side Test
    it('testing right side', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles['right-side']).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Arrow Test
    it('testing arrow', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles.arrow).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Position Test
    const existingSideClasses = ['top', 'right', 'bottom', 'left'];
    existingSideClasses.forEach(side => {
        it(`testing ${side}`, async done => {
            component = StageComponent.withResources()
                .inView('<c-tip side.bind="customSide"></c-tip>')
                .boundTo({
                    customSide: `${side}`,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles[component.viewModel.side]).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    // Size Test
    const existingSizeClasses = ['small', 'medium', 'large', 'xlarge', 'auto'];
    existingSizeClasses.forEach(size => {
        it(`testing ${size}`, async done => {
            component = StageComponent.withResources()
                .inView('<c-tip size.bind="customSize"></c-tip>')
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

    // Color Test
    const existingColorClasses = ['primary-light', 'secondary', 'sub-one', 'sub-three'];
    existingColorClasses.forEach(color => {
        it(`testing ${color}`, async done => {
            component = StageComponent.withResources()
                .inView('<c-tip color.bind="customColor"></c-tip>')
                .boundTo({
                    customColor: `${color}`,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles[component.viewModel.color]).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    // Force Close Test
    it('testing full screen close', async done => {
        component = StageComponent.withResources().inView('<c-tip></c-tip>');

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.styles['full-screen-close']).not.toBe(undefined);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Test if force close enabled
    it('is wrap', async done => {
        component = StageComponent.withResources()
            .inView('<c-tip force-close.bind="isForceClose"></c-tip>')
            .boundTo({
                isForceClose: 1,
            });

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.forceClose).toBe(false);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    // Edge Test
    const existingArrowPositionClasses = ['right-edge', 'left-edge', 'center'];
    existingArrowPositionClasses.forEach(arrowPosition => {
        it(`testing arrow position ${arrowPosition}`, async done => {
            component = StageComponent.withResources()
                .inView('<c-tip arrow-position.bind="customArrowPosition"></c-tip>')
                .boundTo({
                    customArrowPosition: `${arrowPosition}`,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles[component.viewModel.arrowPosition]).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    // hover trigger test
    describe('hover trigger', () => {
        beforeEach(async () => {
            component = StageComponent.withResources().inView(
                '<c-tip trigger-type="hover" hover-delay.bind="0"></c-tip>',
            );

            await bootStrapEnvironment(component);

            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('testing hover properties', () => {
            expect(component.viewModel.hoverDelay).toBe(0);
            expect(component.viewModel.triggerType).toBe('hover');
        });

        it('testing click not enabled', () => {
            component.viewModel.toggleVisible();
            expect(component.viewModel.contentDisplay).toBe(false);
        });

        it('testing hover toggle', async () => {
            const {viewModel} = component;
            expect(viewModel.contentDisplay).toBe(false);
            expect(viewModel.contentVisible).toBe('hidden');
            await viewModel.onMouseEnter();
            jest.runAllTimers();
            expect(viewModel.contentDisplay).toBe(true);
            expect(viewModel.contentVisible).toBe('visible');
            component.viewModel.onMouseLeave();
            jest.runAllTimers();
            expect(component.viewModel.contentVisible).toBe('hidden');
            expect(viewModel.contentDisplay).toBe(false);
        });
    });

    // toggleVisible Test
    describe('#toggleVisible', () => {
        beforeEach(async () => {
            component = StageComponent.withResources().inView('<c-tip></c-tip>');

            await bootStrapEnvironment(component);

            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.useRealTimers();
        });

        it('toggles contentVisible', async done => {
            try {
                const {viewModel} = component;

                expect(viewModel.contentVisible).toBe('hidden');
                expect(viewModel.contentDisplay).toBe(false);

                await viewModel.toggleVisible();

                jest.runOnlyPendingTimers();

                expect(viewModel.contentVisible).toBe('visible');
                expect(viewModel.contentDisplay).toBe(true);

                await viewModel.toggleVisible();

                jest.runOnlyPendingTimers();

                expect(viewModel.contentVisible).toBe('hidden');
                expect(viewModel.contentDisplay).toBe(false);

                const toggle = document.querySelector('[class="close"]');
                expect(toggle).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('calls actions', async done => {
            try {
                const {viewModel} = component;

                viewModel.actions = {
                    onHide: jest.fn(),
                    onShow: jest.fn(),
                };

                viewModel.toggleVisible();

                jest.runOnlyPendingTimers();

                expect(viewModel.actions.onShow).toHaveBeenCalled();

                viewModel.toggleVisible();

                jest.runOnlyPendingTimers();

                expect(viewModel.actions.onHide).toHaveBeenCalled();
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });

    // Test if iconTip is enabled
    it('testing iconTip', async done => {
        component = StageComponent.withResources()
            .inView('<c-tip icon-tip.bind="customIconTipNew"></c-tip>')
            .boundTo({
                customIconTipNew: 1,
            });

        try {
            await bootStrapEnvironment(component);
            expect(component.viewModel.iconTip).toBe(false);
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    afterEach(() => {
        component.dispose();
    });
});
