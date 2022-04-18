/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, computedFrom, containerless, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {MobileNavOpen} from '../c-nav-horizontal/mobile-nav-open';
import * as styles from './c-nav-horizontal-item.css.json';

@containerless
@inject(Router, MobileNavOpen)
export class CNavHorizontalItem {
    @bindable
    public action;
    @bindable
    public href;
    @bindable
    public icon = false;
    @bindable
    public iconColor = 'var(--c_primaryLight)';
    @bindable
    public position;
    @bindable
    public route;
    @bindable
    public state;
    @bindable
    public title;

    @computedFrom('route')
    get generatedLink() {
        return this.router.generate(this.route);
    }

    public styles = styles;
    public router;
    public mobileNavOpen;

    constructor(router, mobileNavOpen) {
        this.router = router;
        this.mobileNavOpen = mobileNavOpen;
    }

    public toggleMobileNav() {
        this.mobileNavOpen.open = !this.mobileNavOpen.open;
        return true;
    }

    public actionFunction() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }
    }
}
