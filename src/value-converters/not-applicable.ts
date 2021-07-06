/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Convert undefined and null to N/A, pass value as-is otherwise.
 */

export class NotApplicableValueConverter {
    public toView(value) {
        return value === null || value === undefined ? 'N/A' : value;
    }
}
