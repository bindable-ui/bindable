/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CTimelineBlock} from './c-timeline-block';

describe('c-timeline-block element', () => {
    let component;

    describe('Integration', () => {
        // Base Test
        it('testing timeline-time', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles['time-block']).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        // time
        it('testing time', async done => {
            component = StageComponent.withResources().inView('<c-timeline-block></c-timeline-block>');

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.time).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });
    });
});
