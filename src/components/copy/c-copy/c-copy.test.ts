/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';

import {copyToClipboard} from '../../../helpers/copy-to-clipboard';

jest.mock('../../../helpers/copy-to-clipboard');

describe('c-copy component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
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
