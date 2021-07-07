/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Navs {
    public routes = [
        {
            redirect: 'horizontal',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./horizontal/horizontal-nav/index'),
            name: 'horizontal',
            nav: true,
            route: 'horizontal',
            title: 'Horizontal Nav',
        },
        {
            moduleId: PLATFORM.moduleName('./horizontal/horizontal-nav-item/index'),
            name: 'horizontal-item',
            nav: true,
            route: 'horizontal-item',
            title: 'Horizontal Nav Item',
        },
        {
            moduleId: PLATFORM.moduleName('./vertical/vertical-nav/index'),
            name: 'vertical',
            nav: true,
            route: 'vertical',
            title: 'Vertical Nav',
        },
        {
            moduleId: PLATFORM.moduleName('./vertical/vertical-nav-item/index'),
            name: 'vertical-item',
            nav: true,
            route: 'vertical-item',
            title: 'Vertical Nav Item',
        },
        {
            moduleId: PLATFORM.moduleName('./vertical/vertical-nav-sliding/index'),
            name: 'vertical-sliding',
            nav: true,
            route: 'vertical-sliding',
            title: 'Vertical Nav Sliding',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
