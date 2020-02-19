/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';

import {generateRandom} from '../../../helpers/generate-random';

import * as styles from './c-timeline-container.css.json';

@containerless
export class CTimelineContainer {
    @bindable
    public currentTimeTop = -1;

    @bindable
    public scrollTimeTop = -1;

    @bindable
    public loadingTop = false;

    @bindable
    public loadingBottom = false;

    @bindable
    public loading = false;

    @bindable
    public id = generateRandom();

    @bindable
    public loadPrev;

    @bindable
    public loadNext;

    @bindable
    public setDate;

    @bindable
    public days = 1;

    public halfHourSize = 'medium';
    public scroll4ZoomLevelChange = false;

    public styles = styles;

    constructor() {
        this.styles = styles;
    }

    public scrollCheck() {
        if (this.loading || this.loadingTop || this.loadingBottom) {
            return;
        }

        if (this.scroll4ZoomLevelChange) {
            this.scroll4ZoomLevelChange = false;
            return;
        }

        const [elem, jqElem] = this.getElem();

        if (!elem || !jqElem) {
            return;
        }

        if (jqElem.scrollTop() === 0 && this.loadPrev) {
            this.loadPrev().then(() => {
                if (this.days) {
                    _.defer(() => {
                        jqElem.scrollTop(elem.scrollHeight / this.days - elem.clientHeight);
                    });
                }
            });
        } else if (jqElem.scrollTop() + elem.clientHeight >= elem.scrollHeight && this.loadNext) {
            this.loadNext();
        }

        this.checkToSetDate();
    }

    public attached() {
        if (typeof this.loadingTop !== 'boolean') {
            this.loadingTop = false;
        }

        if (typeof this.loadingBottom !== 'boolean') {
            this.loadingBottom = false;
        }

        if (typeof this.loading !== 'boolean') {
            this.loading = false;
        }

        this.checkToSetDate();
    }

    public getElem() {
        const elem = document.getElementById(this.id);
        let jqElem = null;

        if (elem) {
            jqElem = $(elem);
        }

        return [elem, jqElem];
    }

    public loadingChanged() {
        if (this.loading) {
            return;
        }

        this.scrollTo(this.currentTimeTop);
    }

    public scrollTimeTopChanged(newVal) {
        // zoom level change updates scrollTimeTop thereby triggering this.
        this.scroll4ZoomLevelChange = true;
        this.scrollTo(newVal);
    }

    public scrollTo(top: number) {
        if (top && top > 0) {
            _.defer(() => {
                const [elem, jqElem] = this.getElem();
                if (elem && jqElem) {
                    jqElem.scrollTop(top - elem.offsetHeight / 2);
                }
            });
        }
    }

    public checkToSetDate() {
        const [elem, jqElem] = this.getElem();
        if (!elem || !jqElem) {
            return;
        }

        if (this.setDate && _.isFunction(this.setDate)) {
            _.defer(() => {
                const midPoint = jqElem.scrollTop() + jqElem.height() / 2;
                this.setDate({midPoint});
            });
        }
    }
}
