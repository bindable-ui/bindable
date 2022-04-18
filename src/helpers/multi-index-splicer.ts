/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export default function multiIndexSplicer(arr, indexes, dir = 1) {
    const clonedArr = _.cloneDeep(arr);
    let sortedIndexes = _.orderBy(indexes);

    if (dir > 0) {
        sortedIndexes = _.reverse(sortedIndexes);
    }

    _.forEach(sortedIndexes, index => {
        if (index + dir < 0 || index + dir > clonedArr.length - 1) {
            return;
        }

        const stashedVal = clonedArr.splice(index, 1)[0];
        clonedArr.splice(index + dir, 0, stashedVal);
    });

    return clonedArr;
}
