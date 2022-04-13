/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {observable} from 'aurelia-framework';

export class CTdButton {
    @observable
    public value;
    public row;
    public col;

    public activate(model) {
        this.value = model.value;
        this.row = model.row;
        this.col = model.col;
    }
}
