/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Forms {
    public routes = [
        {
            redirect: 'add-remove',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./add-remove/index'),
            name: 'add-remove',
            nav: true,
            route: 'add-remove',
            title: 'Add Remove',
        },
        {
            moduleId: PLATFORM.moduleName('./checkbox-radio-container/index'),
            name: 'checkboxRadioContainer',
            nav: true,
            route: 'checkbox-radio-container',
            title: 'Checkbox Radio Container',
        },
        {
            moduleId: PLATFORM.moduleName('./checkbox/index'),
            name: 'checkbox',
            nav: true,
            route: 'checkbox',
            title: 'Checkbox',
        },
        {
            moduleId: PLATFORM.moduleName('./date/index'),
            name: 'date',
            nav: true,
            route: 'date',
            title: 'Date',
        },
        {
            moduleId: PLATFORM.moduleName('./file/index'),
            name: 'file',
            nav: true,
            route: 'file',
            title: 'File',
        },
        {
            moduleId: PLATFORM.moduleName('./image/index'),
            name: 'image',
            nav: true,
            route: 'image',
            title: 'Image',
        },
        {
            moduleId: PLATFORM.moduleName('./label/index'),
            name: 'label',
            nav: true,
            route: 'label',
            title: 'Label',
        },
        {
            moduleId: PLATFORM.moduleName('./radio/index'),
            name: 'radio',
            nav: true,
            route: 'radio',
            title: 'Radio',
        },
        {
            moduleId: PLATFORM.moduleName('./select/index'),
            name: 'select',
            nav: true,
            route: 'select',
            title: 'Select',
        },
        {
            moduleId: PLATFORM.moduleName('./slider/index'),
            name: 'slider',
            nav: true,
            route: 'slider',
            title: 'Slider',
        },
        {
            moduleId: PLATFORM.moduleName('./text/index'),
            name: 'text',
            nav: true,
            route: 'text',
            title: 'Text',
        },
        {
            moduleId: PLATFORM.moduleName('./textarea/index'),
            name: 'textarea',
            nav: true,
            route: 'textarea',
            title: 'Textarea',
        },
        {
            moduleId: PLATFORM.moduleName('./toggle/index'),
            name: 'toggle',
            nav: true,
            route: 'toggle',
            title: 'Toggle',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
