/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-pill.css.json';

export class CPill {
    @bindable
    public color = 'var(--c_subOneMain)';
    @bindable
    public textColor = 'var(--pill-text-color);';
    @bindable
    public fontWeight = 'var(--pill-font-weight)';
    @bindable
    public fontFamily = 'var(--pill-font-family)';
    @bindable
    public linkColor = 'var(--pill-link-color)';
    @bindable
    public href;
    @bindable
    public icon;
    @bindable
    public iconColor;
    @bindable
    public iconDir = 'ltr';
    @bindable
    public iconAction;

    public styles = styles;

    public actionFunction() {
        if (this.iconAction && _.isFunction(this.iconAction)) {
            this.iconAction();
        }
    }
}
