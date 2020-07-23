/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as styles from './c-time-entry.css.json';

export class CTimeEntryPopover {
    public styles = styles;
    public item = null;

    public activate(model) {
        this.item = model.data;
        //    console.log('in popover', this.item);
    }
}
