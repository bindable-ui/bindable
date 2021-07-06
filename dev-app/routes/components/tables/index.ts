/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Tables {
    public routes = [
        {
            redirect: 'table',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./table/index'),
            name: 'table',
            nav: true,
            route: 'table',
            title: 'Table',
        },
        {
            moduleId: PLATFORM.moduleName('./fixed-header-table/index'),
            name: 'fixed-header-table',
            nav: true,
            route: 'fixed-header-table',
            title: 'Fixed Header Table',
        },
        {
            moduleId: PLATFORM.moduleName('./horizontal-scroll-table/index'),
            name: 'horizontal-scroll-table',
            nav: true,
            route: 'horizontal-scroll-table',
            title: 'Horizontal Scroll Table',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
