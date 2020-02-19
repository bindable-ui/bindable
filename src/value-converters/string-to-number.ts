/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

const INT_REGEX = new RegExp('[0-9]', 'g');

export class StringToNumberValueConverter {
    public toView(value) {
        // b/c Number(null|'') = 0, and isNaN(null|'') is false.
        if (value === null || value === '') return null;
        const val = Number(`${value}`);
        return Number.isNaN(val) ? null : val;
    }

    public fromView(value) {
        if (value === null || value === '') return null;
        let valString = `${value}`;
        if (valString) {
            valString = (valString.match(INT_REGEX) || []).join('').toLowerCase();
        }
        const val = Number(valString);
        return Number.isNaN(val) ? null : val;
    }
}
