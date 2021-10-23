/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NumberToStringValueConverter {
    public toView(value) {
        if (value === null || value === '') return null;
        return String(`${value}`);
    }
}
