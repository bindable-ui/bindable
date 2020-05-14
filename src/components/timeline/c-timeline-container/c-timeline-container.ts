/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';

import {generateRandom} from '../../../helpers/generate-random';

import * as styles from './c-timeline-container.css.json';

export class CTimelineContainer {
    @bindable
    public currentTimeTop = -1;

    @bindable
    public loading = false;

    @bindable
    public id = generateRandom();

    public styles = styles;

    constructor() {
        this.styles = styles;
    }

    public attached() {
        if (typeof this.loading !== 'boolean') {
            this.loading = false;
        }
    }
}
