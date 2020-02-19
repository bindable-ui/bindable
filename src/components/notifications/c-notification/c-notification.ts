/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {authState} from '../../../decorators/auth-state';
import * as styles from './c-notification.css.json';

@authState
export class CNotification {
    @bindable
    public calloutContent;
    @bindable
    public calloutTitle;
    @bindable
    public type = 'warning';
    @bindable
    public state;

    public styles = styles;
}
