/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/


export class Body {
    public controller;

    public activate(model) {
        this.controller = model.controller;
    }
}
