/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
 */

import {bindable, inject} from 'aurelia-framework';

import {CPopoverService} from './c-popover-service';

import * as tipStyles from '../../tip/c-tip/c-tip.css.json';
import * as styles from './c-popover.css.json';

@inject(CPopoverService)
export class CPopover {
    public styles = styles;
    public tipStyles = tipStyles;

    constructor(public vPopoverService: CPopoverService) {}
}
