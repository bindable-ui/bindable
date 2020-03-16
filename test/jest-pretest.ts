import 'aurelia-polyfills';
import {bootstrap} from 'aurelia-bootstrapper';
import {Options} from 'aurelia-loader-nodejs';
import {globalize} from 'aurelia-pal-nodejs';
import * as path from 'path';
import * as _ from 'lodash';

Options.relativeToDir = path.join(__dirname, '../');
globalize();

jest.mock('simple-web-worker', () =>
    ({
        create: jest.fn(),
        postMessage: jest.fn(),
    })
);

declare const global: any;

global.bootStrapEnvironment = async component => {
    component.bootstrap(au => au.use.standardConfiguration().feature('src'));
    await component.create(bootstrap);
};

// this enables the $ in the test
global.$ = require('jquery');
global._ = _;
// this enables the classList of DOM element in test
global.self = global.window.self;
