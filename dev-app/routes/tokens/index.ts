/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Core {
    public router: Router;
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
            moduleId: PLATFORM.moduleName('./global-properties/index'),
            name: 'global-properties',
            nav: true,
            route: 'global-properties',
            title: 'Global Properties',
        },
        {
            moduleId: PLATFORM.moduleName('./color/index'),
            name: 'color',
            nav: true,
            route: 'color',
            title: 'Color',
        },
        {
            moduleId: PLATFORM.moduleName('./fonts/index'),
            name: 'fonts',
            nav: true,
            route: 'fonts',
            title: 'Fonts',
        },
        {
            moduleId: PLATFORM.moduleName('./transitions/index'),
            name: 'transitions',
            nav: true,
            route: 'transitions',
            title: 'Transitions',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
