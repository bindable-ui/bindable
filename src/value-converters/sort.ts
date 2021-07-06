/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

// The class below was adapted from: https://github.com/jdanyow/aurelia-converters/blob/master/src/index.js
export class SortValueConverter {
    public static compare(a, b, key, directionFactor) {
        const c = a[key];
        const d = b[key];

        const comparison = SortValueConverter.isNumeric(c) ? 'number' : 'ordinalIgnoreCase';
        const comparer = SortValueConverter[`${comparison}Comparison`];
        return comparer(c, d) * directionFactor;
    }

    public static sort(array, primaryKey, secondaryKey, directionFactor) {
        return array.sort((a, b) => {
            let r = SortValueConverter.compare(a, b, primaryKey, directionFactor);
            if (r === 0 && secondaryKey !== undefined && secondaryKey !== primaryKey) {
                r = SortValueConverter.compare(a, b, secondaryKey, directionFactor);
            }
            return r;
        });
    }

    public static vsort(array, directions) {
        return array.sort((a, b) => {
            let r = 0;
            directions.every(s => {
                r = SortValueConverter.compare(a, b, s.key, s.dir);
                return r === 0; // breaks if r !== 0
            });
            return r;
        });
    }

    // This method is from: http://stackoverflow.com/a/9716488/1090619
    public static isNumeric(n) {
        return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
    }

    public static ordinalIgnoreCaseComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) return 0;
        if (a === null || a === undefined) return -1;
        if (b === null || b === undefined) return 1;
        const _a = a.toString().toLowerCase();
        const _b = b.toString().toLowerCase();
        if (_a < _b) return -1;
        if (_a > _b) return 1;
        return 0;
    }

    public static ordinalComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) return 0;
        if (a === null || a === undefined) return -1;
        if (b === null || b === undefined) return 1;
        const _a = a.toString();
        const _b = b.toString();
        if (_a < _b) return -1;
        if (_a > _b) return 1;
        return 0;
    }

    public static numberComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) return 0;
        if (a === null || a === undefined) return -1;
        if (b === null || b === undefined) return 1;
        return a - b;
    }
    public toView(array, primaryKey, secondaryKey, direction = 'asc') {
        const directionFactor = direction.substr(0, 3) === 'asc' ? 1 : -1;
        return SortValueConverter.sort(array, primaryKey, secondaryKey, directionFactor);
    }
}
