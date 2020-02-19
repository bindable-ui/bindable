/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import sorting from './sorting';

const array = [{val: 3}, {val: 1}, {val: 4}, {val: 2}];

describe('sorting of objects by key', () => {
    it('should sort array of objects by key', () => {
        const newArray = array.sort(sorting('val'));
        expect(newArray[0].val).toEqual(1);
        expect(newArray[3].val).toEqual(4);
    });
    it('should sort array of objects by key in reverse', () => {
        const newArray = array.sort(sorting('val', true));
        expect(newArray[0].val).toEqual(4);
        expect(newArray[3].val).toEqual(1);
    });
});
