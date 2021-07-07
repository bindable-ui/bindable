/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {observable} from 'aurelia-framework';
import {generateRandom} from '../../../../helpers/generate-random';

export class CTdToggle {
    @observable
    public value;
    public row;
    public col;
    public id = generateRandom();

    public activate(model) {
        this.value = model.value;
        this.row = model.row;
        this.col = model.col;
    }

    public valueChanged() {
        this.checkChanged();
    }

    public checkChanged() {
        if (this.col && this.col.checkChanged) {
            this.col.checkChanged(this.row);
        }
    }
}
