/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class EscapeRegexValueConverter {
    public toView(value) {
        if (value !== null && value.toString().length > 0) {
            return value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
        return value;
    }
}
