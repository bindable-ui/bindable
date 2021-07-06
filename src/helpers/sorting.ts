/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export default function sorting(field, reverse?, primer?) {
    const key = function getPrimer(x) {
        return primer ? primer(x[field]) : x[field];
    };
    const sortOrder = reverse ? -1 : 1;

    return function compareValues(a, b) {
        const A = key(a);
        const B = key(b);

        let rval = 0;
        if (A < B) {
            rval = -1;
        }
        if (A > B) {
            rval = 1;
        }
        return rval * sortOrder;
    };
}
