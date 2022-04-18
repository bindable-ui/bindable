/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import multiIndexSplicer from './multi-index-splicer';

describe('Resources | Multi Index Splicer', () => {
    const options = [
        {id: 1, name: 'tom'},
        {id: 2, name: 'sam'},
        {id: 3, name: 'jeff'},
        {id: 4, name: 'greg'},
        {id: 5, name: 'paul'},
    ];

    it('will increase index for indexes', () => {
        const arr = multiIndexSplicer(options, [1, 2]);

        expect(arr.map(i => i.id)).toEqual([1, 4, 2, 3, 5]);
    });

    it('will decrease index for indexes', () => {
        const arr = multiIndexSplicer(options, [1, 2], -1);

        expect(arr.map(i => i.id)).toEqual([2, 3, 1, 4, 5]);
    });

    it('will not mutate if index is gt length', () => {
        const arr = multiIndexSplicer(options, [4], 1);

        expect(arr.map(i => i.id)).toEqual([1, 2, 3, 4, 5]);
    });

    it('will not mutate if index lt 0', () => {
        const arr = multiIndexSplicer(options, [0], -1);

        expect(arr.map(i => i.id)).toEqual([1, 2, 3, 4, 5]);
    });
});
