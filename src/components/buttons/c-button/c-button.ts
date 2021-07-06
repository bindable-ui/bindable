/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';
import * as styles from './c-button.css.json';

@authState
export class CButton {
    @bindable
    public action;
    @bindable
    public color = 'primary';
    @bindable
    public href;
    @bindable
    public iconAlign = 'unset';
    @bindable
    public iconColor = 'unset';
    @bindable
    public iconDir = 'ltr';
    @bindable
    public icon;
    @bindable
    public iconSize = '0.75em';
    @bindable
    public iconSpacing = 'var(--s-5)';
    @bindable
    public iconOnly = false;
    @bindable
    public size = 'medium';
    @bindable
    public state;
    @bindable
    public subText;
    @bindable
    public targetNew = false;
    @bindable
    public title;
    @bindable
    public type: string = 'button';

    public styles = styles;

    public attached() {
        if (typeof this.iconOnly !== 'boolean') {
            this.iconOnly = false;
        }

        if (typeof this.targetNew !== 'boolean') {
            this.targetNew = false;
        }
    }

    public actionFunction() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }

        return true;
    }
}
