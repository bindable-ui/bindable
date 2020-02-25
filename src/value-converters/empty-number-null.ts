/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class EmptyNumberNullValueConverter {
    public toView(value) {
        return value === '' ? null : value;
    }

    /**
     * Converts value to true default (HTML likes to change null to '').
     *
     * @param value - Value coming from the view.
     * @return {Number|Null} - Maintain Numberness
     */
    public fromView(value) {
        return value === '' ? null : Number(value);
    }
}
