/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Types {
    public routes = [
        {
            redirect: 'code',
            route: '',
        },

        {
            moduleId: PLATFORM.moduleName('./code/index'),
            name: 'code',
            nav: true,
            route: 'code',
            title: 'Code',
        },
        {
            moduleId: PLATFORM.moduleName('./headlines/index'),
            name: 'headlines',
            nav: true,
            route: 'headlines',
            title: 'Headlines',
        },
        {
            moduleId: PLATFORM.moduleName('./list-container/index'),
            name: 'list-container',
            nav: true,
            route: 'list-container',
            title: 'List Container',
        },
        {
            moduleId: PLATFORM.moduleName('./list-item/index'),
            name: 'list-item',
            nav: true,
            route: 'list-item',
            title: 'List Item',
        },
        {
            moduleId: PLATFORM.moduleName('./list/index'),
            name: 'lists',
            nav: true,
            route: 'lists',
            title: 'Lists',
        },
        {
            moduleId: PLATFORM.moduleName('./p/index'),
            name: 'paragraphs',
            nav: true,
            route: 'paragraphs',
            title: 'Paragraphs',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
