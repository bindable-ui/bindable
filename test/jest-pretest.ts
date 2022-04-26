import 'aurelia-polyfills';
import {bootstrap} from 'aurelia-bootstrapper';
import {Options} from 'aurelia-loader-nodejs';
import {globalize} from 'aurelia-pal-nodejs';
import * as path from 'path';
import * as _ from 'lodash';

Options.relativeToDir = path.join(__dirname, '../');
globalize();

jest.mock('simple-web-worker', () => ({
    create: jest.fn(),
    postMessage: jest.fn(),
}));

declare const global: any;

global.bootStrapEnvironment = async component => {
    component.bootstrap(au =>
        au.use
            .standardConfiguration()
            .plugin('node_modules/aurelia-ui-virtualization')
            .feature('src'),
    );
    await component.create(bootstrap);
};

// this enables the $ in the test
global.$ = require('jquery');
global._ = _;
// this enables the classList of DOM element in test
global.self = global.window.self;

// Add requestAnimationFrame pollyfill to fix aurelia-ui-virtualiztion issues
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function(window, rAF, cAF) {
    var lastTime = 0,
        vendors = ['ms', 'moz', 'webkit', 'o'],
        x;

    for (x = 0; x < vendors.length && !window[rAF]; ++x) {
        window[rAF] = window[vendors[x] + 'RequestAnimationFrame'];
        window[cAF] = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window[rAF]) {
        window[rAF] = function(callback) {
            var currTime = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);

            lastTime = currTime + timeToCall;

            return id;
        };
    }

    if (!window[cAF]) {
        window[cAF] = function(id) {
            window.clearTimeout(id);
        };
    }
})(global.window, 'requestAnimationFrame', 'cancelAnimationFrame');

global.requestAnimationFrame = global.window.requestAnimationFrame;
