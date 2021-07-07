/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {KeysValueConverter} from './keys';

describe('KeysValueConverter', () => {
    it('can convert', () => {
        const data = {
            first: {
                something: true,
            },
            second: {
                something: false,
            },
        };
        expect(new KeysValueConverter().toView(data)).toEqual(['first', 'second']);
    });
});
