/*
    Copyright 2021, Yahoo
    Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import sortDropData from './sort-drop-data';

describe('Sort Drop Data', () => {
    let options: any[];

    beforeEach(() => {
        options = [
            {id: 1, text: 'First', checked: false, order: 1},
            {id: 2, text: 'Second', checked: false, order: 2},
            {id: 3, text: 'Third', checked: false, order: 3},
            {id: 4, text: 'Fourth', checked: false, order: 4},
            {id: 5, text: 'Fifth', checked: false, order: 5},
            {id: 6, text: 'Sixth', checked: false, order: 6},
        ];
    });

    it('will sort if source order < target order', () => {
        const source = options[2];
        const target = options[4];

        expect(source).toHaveProperty('id', 3);
        expect(source).toHaveProperty('order', 3);

        expect(target).toHaveProperty('id', 5);
        expect(target).toHaveProperty('order', 5);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([1, 2, 4, 5, 3, 6]);
    });

    it('can move first to last', () => {
        const source = options[0];
        const target = options[5];

        expect(source).toHaveProperty('id', 1);
        expect(source).toHaveProperty('order', 1);

        expect(target).toHaveProperty('id', 6);
        expect(target).toHaveProperty('order', 6);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([2, 3, 4, 5, 6, 1]);
    });

    it('can first to something else', () => {
        const source = options[0];
        const target = options[1];

        expect(source).toHaveProperty('id', 1);
        expect(source).toHaveProperty('order', 1);

        expect(target).toHaveProperty('id', 2);
        expect(target).toHaveProperty('order', 2);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([2, 1, 3, 4, 5, 6]);
    });

    it('will sort if source order > target order', () => {
        const source = options[4];
        const target = options[2];

        expect(source).toHaveProperty('id', 5);
        expect(source).toHaveProperty('order', 5);

        expect(target).toHaveProperty('id', 3);
        expect(target).toHaveProperty('order', 3);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([1, 2, 5, 3, 4, 6]);
    });

    it('can move last to something else', () => {
        const source = options[5];
        const target = options[1];

        expect(source).toHaveProperty('id', 6);
        expect(source).toHaveProperty('order', 6);

        expect(target).toHaveProperty('id', 2);
        expect(target).toHaveProperty('order', 2);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([1, 6, 2, 3, 4, 5]);
    });

    it('can move last to first', () => {
        const source = options[5];
        const target = options[0];

        expect(source).toHaveProperty('id', 6);
        expect(source).toHaveProperty('order', 6);

        expect(target).toHaveProperty('id', 1);
        expect(target).toHaveProperty('order', 1);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([6, 1, 2, 3, 4, 5]);
    });

    it('does nothing if source order == target order', () => {
        const source = options[2];
        const target = options[2];

        expect(source).toHaveProperty('id', 3);
        expect(source).toHaveProperty('order', 3);

        expect(target).toHaveProperty('id', 3);
        expect(target).toHaveProperty('order', 3);

        const newOptions = sortDropData(source, target, options, 'order');

        expect(newOptions.map(o => o.order)).toEqual([1, 2, 3, 4, 5, 6]);
        expect(newOptions.map(o => o.id)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
