/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CTdTextInput {
    public value;
    public activate(model) {
        this.value = model.value;
    }

    public changeDetection(row, col) {
        if (col.rowValChanged) {
            col.rowValChanged(row);
        }

        return true;
    }
}
