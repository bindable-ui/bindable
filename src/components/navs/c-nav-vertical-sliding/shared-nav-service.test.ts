/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {Router} from 'aurelia-router';
import {mock} from 'ts-mockito/lib/ts-mockito';
import {SharedNav} from './shared-nav-service';

describe('Resources | Components | Navs | shared-nav-service', () => {
    let sns: SharedNav;
    let router: Router;

    beforeEach(() => {
        router = mock(Router);
        sns = new SharedNav();
        sns.initMainNav(router);
    });

    it('can set next text', () => {
        jest.useFakeTimers();
        sns.setNextText('Next Page');
        jest.runAllTimers();
        jest.useRealTimers();
        expect(sns.nav.pages[0].nextText).toBe('Next Page');
    });

    it('can set page as active', () => {
        expect(sns.nav.pages[0].navs[0].active).toBeFalsy();

        sns.setActive(0, 0);

        expect(sns.nav.pages[0].navs[0].active).toBeTruthy();
    });
});
