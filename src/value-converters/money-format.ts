/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class MoneyFormatValueConverter {
    public static transform(value, decimalPlaces = 2) {
        // If decimal places is not specific, then default to 2 decimal places.
        if (value !== null && value !== undefined && value.toString.length > 0) {
            return `$${value.toFixed(decimalPlaces).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
        }

        return '';
    }
    public toView(value, decimalPlaces) {
        return MoneyFormatValueConverter.transform(value, decimalPlaces);
    }
}
