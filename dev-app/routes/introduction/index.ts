/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Intro {
    public router: Router;
    public routes = [
        {
            redirect: 'install',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./install/install'),
            name: 'install',
            nav: true,
            route: 'install',
            title: 'Install',
        },
        {
            moduleId: PLATFORM.moduleName('./contribute/contribute'),
            name: 'contribute',
            nav: true,
            route: 'contribute',
            title: 'Contribute',
        },
        {
            moduleId: PLATFORM.moduleName('./design-assets/design-assets'),
            name: 'design-assets',
            nav: true,
            route: 'design-assets',
            title: 'Design Assets',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
