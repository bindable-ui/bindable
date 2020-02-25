/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class TextInput {
    public routes = [
        {
            redirect: 'properties',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./properties/index'),
            name: 'properties',
            nav: true,
            route: 'properties',
            title: 'Properties',
        },
        {
            moduleId: PLATFORM.moduleName('./methods/index'),
            name: 'methods',
            nav: true,
            route: 'methods',
            title: 'Methods',
        },
        {
            moduleId: PLATFORM.moduleName('./slots/index'),
            name: 'slots',
            nav: true,
            route: 'slots',
            title: 'Slots',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
