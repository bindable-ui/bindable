/*
Copyright 2021, Yahoo
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
            redirect: 'getting-started',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./getting-started/getting-started'),
            name: 'getting-started',
            nav: true,
            route: 'getting-started',
            title: 'Getting Started',
        },
        {
            moduleId: PLATFORM.moduleName('./modular-scale/modular-scale'),
            name: 'modular-scale',
            nav: true,
            route: 'modular-scale',
            title: 'Modular Scale',
        },
        {
            moduleId: PLATFORM.moduleName('./theming/theming'),
            name: 'theming',
            nav: true,
            route: 'theming',
            title: 'Theming',
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
