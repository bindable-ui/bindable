/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {CPopover} from './c-popover';
import {CPopoverService} from './c-popover-service';

const popService = new CPopoverService();

describe('c-popover component', () => {
    let component;

    beforeEach(() => {
        component = new CPopover(popService);
    });

    describe('Unit', () => {
        test('styles', () => {
            expect(component.styles).toBeDefined();
        });
    });
});
