/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Checks if there is a `value`, otherwise falls back to `defaultValue`.
 *
 * @param value {String} - Value to be checked.
 * @param defaultValue {String} - Fallback value.
 * @return appropriate value.
 */
export class DefaultValueValueConverter {
    public toView(value, defaultValue) {
        if (defaultValue) {
            if (value) {
                return value;
            }
            return defaultValue;
        }

        return value;
    }
}
