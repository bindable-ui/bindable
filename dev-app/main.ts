/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

import 'resources/global-styles/themes/main.css';

import environment from './environment';
import './stylesheets/dev-app.css';
import './stylesheets/fonts.css';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin(PLATFORM.moduleName('aurelia-dialog'))
        .plugin(PLATFORM.moduleName('aurelia-ui-virtualization'))
        .plugin(PLATFORM.moduleName('@bindable-ui/bindable-icons'))
    // load the plugin ../src
    // The "resources" is mapped to "../src" in aurelia.json "paths"
        .feature('resources');

    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
}
