/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-list-item.css.json';

@containerless
export class CListItem {
    @bindable
    public state;
    @bindable
    public wrap = false;

    public styles = styles;

    public attached() {
        if (typeof this.wrap !== 'boolean') {
            this.wrap = false;
        }
    }
}
