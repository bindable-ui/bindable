/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import * as styles from './c-label.css.json';

export class CLabel {
    @bindable
    public for;
    @bindable
    public icon;
    @bindable
    public labelIconColor = 'lightGray';
    @bindable
    public editable = false;
    @bindable
    public notEditing = true;
    @bindable
    public editing = false;
    @bindable
    public editingAction;
    @bindable
    public doneEditingAction;
    @bindable
    public state;

    public styles = styles;

    public attached() {
        if (typeof this.editable !== 'boolean') {
            this.editable = false;
        }

        if (typeof this.notEditing !== 'boolean') {
            this.notEditing = true;
        }

        if (typeof this.editing !== 'boolean') {
            this.editing = false;
        }
    }

    public editingActionFunction() {
        if (this.editingAction && _.isFunction(this.editingAction)) {
            this.editingAction();
            this.notEditing = false;
            this.editing = true;
        }
    }

    public doneEditingActionFunction() {
        if (this.doneEditingAction && _.isFunction(this.doneEditingAction)) {
            this.doneEditingAction();
            this.notEditing = true;
            this.editing = false;
        }
    }
}
