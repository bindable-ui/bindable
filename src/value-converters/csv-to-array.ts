/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CSVToArrayValueConverter {
    /**
     * Converts comma separated value string to array of string or numbers.
     *
     * @param value {String} - comma separated value string.
     * @param type {String} - Array element type, could be string or number.
     * @return {Array<String|Number>}
     */
    public fromView(value, type = 'string') {
        let arr = [];
        if (type === 'number') {
            arr = value
                .split(',')
                .map(i => i.trim())
                .filter(i => !!i)
                .map(i => {
                    const val = Number.isNaN(Number(i)) ? i : parseInt(i, 10);
                    return val;
                });
        } else {
            arr = value
                .split(',')
                .map(i => i.trim())
                .filter(i => !!i);
        }
        return arr;
    }

    public toView(value) {
        if (value && Array.isArray(value)) {
            return value.join(', ');
        }
        return value;
    }
}
