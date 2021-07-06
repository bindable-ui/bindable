/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Modal {
    public routes = [
        {
            redirect: 'usage',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./usage/index'),
            name: 'usage',
            nav: true,
            route: 'usage',
            title: 'Usage',
        },
        {
            moduleId: PLATFORM.moduleName('./theming/index'),
            name: 'theming',
            nav: true,
            route: 'theming',
            title: 'Theming',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
