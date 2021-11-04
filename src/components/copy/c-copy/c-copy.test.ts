/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {anything, instance, mock, verify} from 'ts-mockito';

import {copyToClipboard} from '../../../helpers/copy-to-clipboard';

import {CToastsService} from 'index';
import {CCopy} from './c-copy';

jest.mock('../../../helpers/copy-to-clipboard');

describe('c-copy component', () => {
    let component;
    let mockedNotification: CToastsService;

    describe('Unit', () => {
        afterEach(() => {
            jest.useRealTimers();
        });

        beforeEach(() => {
            jest.useFakeTimers();
            jest.clearAllMocks();

            mockedNotification = mock(CToastsService);
            component = new CCopy(instance(mockedNotification));
        });

        describe('#copy', () => {
            test('without action callback', async () => {
                await component.copy('test');

                verify(mockedNotification.success(anything())).once();
            });

            test('with action callback', async () => {
                component.action = jest.fn(async () => 'Success');

                expect(component.action).toBeDefined();

                await component.copy('***');

                expect(component.action).toHaveBeenCalled();

                verify(mockedNotification.success(anything())).once();
            });
        });
    });

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('testing link enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-copy link.bind="customLink"></c-copy>')
                .boundTo({
                    customLink: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.link).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing link to be false if invalid type', async done => {
            component = StageComponent.withResources()
                .inView('<c-copy link.bind="customLink"></c-copy>')
                .boundTo({
                    customLink: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.link).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing wrap enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-copy wrap.bind="customWrap"></c-copy>')
                .boundTo({
                    customWrap: true,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.wrap).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing wrap to be false if invalid type', async done => {
            component = StageComponent.withResources()
                .inView('<c-copy wrap.bind="customWrap"></c-copy>')
                .boundTo({
                    customWrap: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.wrap).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests if copy text link works', async done => {
            const queryStr = 'c-button';
            component = StageComponent.withResources()
                .inView('<c-copy link.bind="customLink"></c-copy>')
                .boundTo({
                    customLink: true,
                });

            try {
                await bootStrapEnvironment(component);
                (document.querySelector(queryStr) as any).click();
                expect(copyToClipboard).toHaveBeenCalledTimes(1);
                expect(component.viewModel.link).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: container', async done => {
                component = StageComponent.withResources().inView('<c-copy></c-copy>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: content', async done => {
                component = StageComponent.withResources().inView('<c-copy></c-copy>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.container).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });
        });
    });
});
