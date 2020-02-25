/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as styles from './c-td-image.css.json';

export class CTdImage {
    public styles = styles;
    public value;

    public activate(model) {
        this.value = model.value;
    }
}
