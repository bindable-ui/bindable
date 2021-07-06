/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as styles from './c-td-pill.css.json';

export class CTdPill {
    public styles = styles;
    public value;

    public activate(model) {
        this.value = model.value;
    }
}
