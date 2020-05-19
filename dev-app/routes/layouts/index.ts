/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Layouts {
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
            moduleId: PLATFORM.moduleName('./box/index'),
            name: 'box',
            nav: true,
            route: 'box',
            title: 'Box',
        },
        {
            moduleId: PLATFORM.moduleName('./box-link/index'),
            name: 'box-link',
            nav: true,
            route: 'box-link',
            title: 'Box Link',
        },
        {
            moduleId: PLATFORM.moduleName('./center/index'),
            name: 'center',
            nav: true,
            route: 'center',
            title: 'Center',
        },
        {
            moduleId: PLATFORM.moduleName('./cluster/index'),
            name: 'cluster',
            nav: true,
            route: 'cluster',
            title: 'Cluster',
        },
        {
            moduleId: PLATFORM.moduleName('./cover/index'),
            name: 'cover',
            nav: true,
            route: 'cover',
            title: 'Cover',
        },
        {
            moduleId: PLATFORM.moduleName('./grid/index'),
            name: 'grid',
            nav: true,
            route: 'grid',
            title: 'Grid',
        },
        {
            moduleId: PLATFORM.moduleName('./icon/index'),
            name: 'icon',
            nav: true,
            route: 'icon',
            title: 'Icon',
        },
        {
            moduleId: PLATFORM.moduleName('./sidebar/index'),
            name: 'sidebar',
            nav: true,
            route: 'sidebar',
            title: 'Sidebar',
        },
        {
            moduleId: PLATFORM.moduleName('./stack/index'),
            name: 'stack',
            nav: true,
            route: 'stack',
            title: 'Stack',
        },
        {
            moduleId: PLATFORM.moduleName('./switcher/index'),
            name: 'switcher',
            nav: true,
            route: 'switcher',
            title: 'Switcher',
        },
        {
            moduleId: PLATFORM.moduleName('./examples/index'),
            name: 'examples',
            nav: true,
            route: 'examples',
            title: 'Examples',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
