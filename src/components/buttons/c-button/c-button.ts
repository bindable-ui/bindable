/*
Copyright 2019, Verizon Media
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
    public icon;
    @bindable
    public iconPosition;
    @bindable
    public size = 'medium';
    @bindable
    public state;
    @bindable
    public targetNew = false;
    @bindable
    public title;
    @bindable
    public type: string = 'button';

    public styles = styles;

    public attached() {
        if (typeof this.targetNew !== 'boolean') {
            this.targetNew = false;
        }

        // we can do acl-restricted acl-disable="false" to hide in case of read only entitlement.
    }

    public showLeftIcon() {
        if (this.icon && this.iconPosition === 'left') {
            return true;
        }
        return false;
    }

    public showRightOrCenterIcon() {
        if (this.icon && (this.iconPosition === 'right' || this.iconPosition === 'center')) {
            return true;
        }
        return false;
    }

    public actionFunction() {
        if (this.action && _.isFunction(this.action)) {
            this.action();
        }

        return true;
    }
}
