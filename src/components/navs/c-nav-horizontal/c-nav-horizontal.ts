/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, inject} from 'aurelia-framework';
import * as styles from './c-nav-horizontal.css.json';
import {MobileNavOpen} from './mobile-nav-open';

@inject(MobileNavOpen)
export class CNavHorizontal {
    @bindable
    public backgroundColor = 'var(--c_darkGray)';
    @bindable
    public mobile = false;
    @bindable
    public size = 'medium';
    @bindable
    public spacing = 'var(--s1)';
    @bindable
    public align = 'center';
    @bindable
    public justify = 'start';
    @bindable
    public textTransform = 'unset';

    public styles = styles;
    public mobileNavOpen;

    constructor(mobileNavOpen) {
        this.mobileNavOpen = mobileNavOpen;
    }

    public toggleMobileNav() {
        this.mobileNavOpen.open = !this.mobileNavOpen.open;
    }

    public attached() {
        if (typeof this.mobile !== 'boolean') {
            this.mobile = false;
        }
    }
}
