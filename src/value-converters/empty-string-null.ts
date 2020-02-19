/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class EmptyStringNullValueConverter {
    public toView(value) {
        return value === '' ? null : value;
    }

    /**
     * Converts value to true default (HTML likes to change null to '').
     *
     * @param value {String} - Value coming from the view.
     * @param type {String} - The type of input. Necessary to handle HTML input for different cases.
     * @return {String|Null} - Defaults to `value` if `type` not provided. Otherwise returns `null`
     *                         or `''` depending on response logic.
     */
    public fromView(value) {
        return value === '' ? null : value;
    }
}
