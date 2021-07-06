/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './l-cluster.css.json';

export class LCluster {
    @bindable
    public align = 'center';
    @bindable
    public justify = 'flex-start';
    @bindable
    public spacing = 'var(--s1)';
    @bindable
    public spacingDirection;
    @bindable
    public truncatedContent = false;
    @bindable
    public wrap = true;

    public styles = styles;

    public attached() {
        if (
            this.align !== 'center' &&
            this.align !== 'flex-start' &&
            this.align !== 'flex-end' &&
            this.align !== 'stretch' &&
            this.align !== 'baseline'
        ) {
            this.align = 'center';
        }

        if (
            this.justify !== 'center' &&
            this.justify !== 'flex-start' &&
            this.justify !== 'flex-end' &&
            this.justify !== 'space-between' &&
            this.justify !== 'space-around'
        ) {
            this.justify = 'flex-start';
        }

        if (
            this.spacingDirection !== 'left' &&
            this.spacingDirection !== 'right' &&
            this.spacingDirection !== undefined
        ) {
            this.spacingDirection = undefined;
        }

        if (typeof this.truncatedContent !== 'boolean') {
            this.truncatedContent = false;
        }

        if (this.truncatedContent) {
            this.wrap = false;
        }

        if (typeof this.wrap !== 'boolean') {
            this.wrap = true;
        }
    }
}
