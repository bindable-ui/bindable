/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class ValueConverters {
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
            moduleId: PLATFORM.moduleName('./boolean-yes-no/index'),
            name: 'boolean-yes-no',
            nav: true,
            route: 'boolean-yes-no',
            title: 'Boolean Yes No',
        },
        {
            moduleId: PLATFORM.moduleName('./capitalize/index'),
            name: 'capitalize',
            nav: true,
            route: 'capitalize',
            title: 'Capitalize',
        },
        {
            moduleId: PLATFORM.moduleName('./count/index'),
            name: 'count',
            nav: true,
            route: 'count',
            title: 'Count',
        },
        {
            moduleId: PLATFORM.moduleName('./csv-to-array/index'),
            name: 'csv-to-array',
            nav: true,
            route: 'csv-to-array',
            title: 'CSV to Array',
        },
        {
            moduleId: PLATFORM.moduleName('./datetime/index'),
            name: 'datetime',
            nav: true,
            route: 'datetime',
            title: 'Datetime',
        },
        {
            moduleId: PLATFORM.moduleName('./default-value/index'),
            name: 'default-value',
            nav: true,
            route: 'default-value',
            title: 'Default Value',
        },
        {
            moduleId: PLATFORM.moduleName('./empty-number-null/index'),
            name: 'empty-number-null',
            nav: true,
            route: 'empty-number-null',
            title: 'Empty Number Null',
        },
        {
            moduleId: PLATFORM.moduleName('./empty-string-null/index'),
            name: 'empty-sting-null',
            nav: true,
            route: 'emptry-string-null',
            title: 'Empty String Null',
        },
        {
            moduleId: PLATFORM.moduleName('./keys/index'),
            name: 'keys',
            nav: true,
            route: 'keys',
            title: 'Keys',
        },
        {
            moduleId: PLATFORM.moduleName('./millisec-to-date/index'),
            name: 'millisec-to-date',
            nav: true,
            route: 'millisec-to-date',
            title: 'Millisec to Date',
        },
        {
            moduleId: PLATFORM.moduleName('./millisec-to-duration/index'),
            name: 'millisec-to-duration',
            nav: true,
            route: 'millisec-to-duration',
            title: 'Millisec to Duration',
        },
        {
            moduleId: PLATFORM.moduleName('./money-format/index'),
            name: 'money-format',
            nav: true,
            route: 'money-format',
            title: 'Money Format',
        },
        {
            moduleId: PLATFORM.moduleName('./not-applicable/index'),
            name: 'not-applicable',
            nav: true,
            route: 'not-applicable',
            title: 'Not Applicable',
        },
        {
            moduleId: PLATFORM.moduleName('./object-keys/index'),
            name: 'object-keys',
            nav: true,
            route: 'object-keys',
            title: 'Object Keys',
        },
        {
            moduleId: PLATFORM.moduleName('./pluralize/index'),
            name: 'pluralize',
            nav: true,
            route: 'pluralize',
            title: 'Pluralize',
        },
        {
            moduleId: PLATFORM.moduleName('./regex-escape/index'),
            name: 'regex-escape',
            nav: true,
            route: 'regex-escape',
            title: 'Regex Escape',
        },
        {
            moduleId: PLATFORM.moduleName('./sanitize/index'),
            name: 'sanitize',
            nav: true,
            route: 'sanitize',
            title: 'Sanitize',
        },
        {
            moduleId: PLATFORM.moduleName('./string-to-number/index'),
            name: 'string-to-number',
            nav: true,
            route: 'string-to-number',
            title: 'String to Number',
        },
    ];

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}
