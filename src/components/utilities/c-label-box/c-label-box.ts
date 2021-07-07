/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';
import * as styles from './c-label-box.css.json';

@authState
export class CLabelBox {
    @bindable
    public label;
    @bindable
    public editable = false;
    @bindable
    public editingAction;
    @bindable
    public doneEditingAction;

    public styles = styles;

    public attached() {
        if (typeof this.editable !== 'boolean') {
            this.editable = false;
        }
    }

    public editFunction() {
        if (this.editingAction && _.isFunction(this.editingAction)) {
            this.editingAction();
        }
    }

    public doneFunction() {
        if (this.doneEditingAction && _.isFunction(this.doneEditingAction)) {
            this.doneEditingAction();
        }
    }
}
