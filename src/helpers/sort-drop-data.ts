/*
    Copyright 2020, Verizon Media
    Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Simple sort for collections after drop
 * @param source The item being dragged
 * @param target The target item
 * @param collection The collection to be modified
 * @param valueField The property containing the order information
 */
export default function sortDropData(source: any, target: any, collection: any[], valueField: string): any[] {
    const sourceValue = source[valueField];
    const targetValue = target[valueField];
    const targetItem = collection.find(i => i[valueField] === source[valueField]);

    if (sourceValue < targetValue) {
        for (let x = targetValue - 1; x >= sourceValue; x -= 1) {
            const item = collection[x];
            item[valueField] = item[valueField] - 1;
        }
    } else if (sourceValue > targetValue) {
        for (let x = targetValue - 1; x < sourceValue; x += 1) {
            const item = collection[x];
            item[valueField] = item[valueField] + 1;
        }
    }

    targetItem[valueField] = targetValue;

    return collection.sort((a, b) => (a.order > b.order ? 1 : -1));
}
