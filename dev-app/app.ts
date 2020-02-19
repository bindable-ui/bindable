/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class App {
    public router: Router;
    public routes = [
        {
            redirect: 'home',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/home/index'),
            name: 'home',
            nav: false,
            route: 'home',
            title: 'Home',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/introduction/index'),
            name: 'introduction',
            nav: true,
            route: 'introduction',
            title: 'Introduction',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/tokens/index'),
            name: 'tokens',
            nav: true,
            route: 'tokens',
            title: 'Tokens',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/layouts/index'),
            name: 'layouts',
            nav: true,
            route: 'layouts',
            title: 'Layouts',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/components/index'),
            name: 'components',
            nav: true,
            route: 'components',
            title: 'Components',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/elements/index'),
            name: 'elements',
            nav: true,
            route: 'elements',
            title: 'Elements',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/access-modifiers/index'),
            name: 'access-modifiers',
            nav: true,
            route: 'access-modifiers',
            title: 'Access Modifiers',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/value-converters/index'),
            name: 'value-converters',
            nav: true,
            route: 'value-converters',
            title: 'Value Converters',
        },
        {
            moduleId: PLATFORM.moduleName('./routes/layout-examples/index'),
            name: 'layout-examples',
            nav: false,
            route: 'layout-examples',
            title: 'Layout Examples',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
