/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {highlightSearchText} from '../../../../helpers/highlight-text';

import * as styles from './c-td-truncate.css.json';

export class CTdTruncate {
    public styles = styles;
    public searchHighlight = null;
    public value;
    public row;

    public activate(model) {
        this.value = model.value;
        this.row = model.row;

        if (model.col && _.isFunction(model.col.getSearchVal)) {
            const searchVal = model.col.getSearchVal();
            if (searchVal.length > 0) {
                this.searchHighlight = highlightSearchText(searchVal, this.value);
            }
        }
    }
}
