/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class LayoutExample {
    public router: Router;
    public routes = [
        {
            redirect: 'basic',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./basic/index'),
            name: 'basic',
            nav: true,
            route: 'basic',
            title: 'Basic',
        },
        {
            moduleId: PLATFORM.moduleName('./basic-centered/index'),
            name: 'basicCentered',
            nav: true,
            route: 'basic-centered',
            title: 'Basic Centered',
        },
        {
            moduleId: PLATFORM.moduleName('./sidebar/index'),
            name: 'sidebar',
            nav: true,
            route: 'sidebar',
            title: 'Sidebar',
        },
        {
            moduleId: PLATFORM.moduleName('./sidebar-scrolling/index'),
            name: 'sidebarScrolling',
            nav: true,
            route: 'sidebar-scrolling',
            title: 'Sidebar Scrolling',
        },
        {
            moduleId: PLATFORM.moduleName('./nested-cover-scrolling/index'),
            name: 'nestedCoverScrolling',
            nav: true,
            route: 'nested-cover-scrolling',
            title: 'Nested Cover Scrolling',
        },
        {
            moduleId: PLATFORM.moduleName('./nested-sidebar-scrolling/index'),
            name: 'nestedSidebarScrolling',
            nav: true,
            route: 'nested-sidebar-scrolling',
            title: 'Nested Sidebar Scrolling',
        },
        {
            moduleId: PLATFORM.moduleName('./nested-cover-table-scrolling/index'),
            name: 'nestedCoverTableScrolling',
            nav: true,
            route: 'nested-cover-table-scrolling',
            title: 'Nested Cover Table Scrolling',
        },
        {
            moduleId: PLATFORM.moduleName('./nested-cover-table-horizontal-scrolling/index'),
            name: 'nestedCoverTableHorizontalScrolling',
            nav: true,
            route: 'nested-cover-table-horizontal-scrolling',
            title: 'Nested Cover Table Horizontal Scrolling',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
