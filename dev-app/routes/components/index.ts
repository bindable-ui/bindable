/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Components {
    public routes = [
        {
            redirect: 'overview',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./overview/index'),
            name: 'overview',
            nav: true,
            route: 'overview',
            title: 'Overview',
        },
        {
            moduleId: PLATFORM.moduleName('./button/index'),
            name: 'button',
            nav: true,
            route: 'button',
            title: 'Button',
        },
        {
            moduleId: PLATFORM.moduleName('./copy/index'),
            name: 'copy',
            nav: true,
            route: 'copy',
            title: 'Copy',
        },
        {
            moduleId: PLATFORM.moduleName('./forms/index'),
            name: 'forms',
            nav: true,
            route: 'forms',
            title: 'Forms',
        },
        {
            moduleId: PLATFORM.moduleName('./icon/index'),
            name: 'icon',
            nav: true,
            route: 'icon',
            title: 'Icon',
        },
        {
            moduleId: PLATFORM.moduleName('./modal/modal'),
            name: 'modal',
            nav: true,
            route: 'modal',
            title: 'Modal',
        },
        {
            moduleId: PLATFORM.moduleName('./navs/index'),
            name: 'navs',
            nav: true,
            route: 'navs',
            title: 'Navs',
        },
        {
            moduleId: PLATFORM.moduleName('./notification/index'),
            name: 'notification',
            nav: true,
            route: 'notification',
            title: 'Notification',
        },
        {
            moduleId: PLATFORM.moduleName('./pill/index'),
            name: 'pill',
            nav: true,
            route: 'pill',
            title: 'Pill',
        },
        {
            moduleId: PLATFORM.moduleName('./tables/index'),
            name: 'contribute',
            nav: true,
            route: 'tables',
            title: 'Tables',
        },
        {
            moduleId: PLATFORM.moduleName('./tile/index'),
            name: 'tile',
            nav: true,
            route: 'tile',
            title: 'Tile',
        },
        {
            moduleId: PLATFORM.moduleName('./timeline/index'),
            name: 'timeline',
            nav: true,
            route: 'timeline',
            title: 'Timeline',
        },
        {
            moduleId: PLATFORM.moduleName('./tip/index'),
            name: 'tip',
            nav: true,
            route: 'tip',
            title: 'Tip',
        },
        {
            moduleId: PLATFORM.moduleName('./toasts/toasts'),
            name: 'toasts',
            nav: true,
            route: 'toasts',
            title: 'Toasts',
        },
        {
            moduleId: PLATFORM.moduleName('./type/index'),
            name: 'type',
            nav: true,
            route: 'type',
            title: 'Type',
        },
        {
            moduleId: PLATFORM.moduleName('./utilities/index'),
            name: 'utilities',
            nav: true,
            route: 'utilities',
            title: 'Utilities',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
