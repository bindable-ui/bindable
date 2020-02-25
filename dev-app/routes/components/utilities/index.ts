/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Utilities {
    public routes = [
        {
            redirect: 'dividers',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./dividers/index'),
            name: 'dividers',
            nav: true,
            route: 'dividers',
            title: 'Dividers',
        },
        {
            moduleId: PLATFORM.moduleName('./drag-handle/index'),
            name: 'dragHandle',
            nav: true,
            route: 'drag-handle',
            title: 'Drag Handle',
        },
        {
            moduleId: PLATFORM.moduleName('./spinners/index'),
            name: 'spinners',
            nav: true,
            route: 'spinners',
            title: 'Spinners',
        },
        {
            moduleId: PLATFORM.moduleName('./label-box/index'),
            name: 'labelBox',
            nav: true,
            route: 'label-box',
            title: 'Label Box',
        },
        {
            moduleId: PLATFORM.moduleName('./status/index'),
            name: 'status',
            nav: true,
            route: 'status',
            title: 'Status',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
