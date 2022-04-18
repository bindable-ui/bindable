/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {LocalStorageHelper} from './local-storage';

describe('LocalStorageHelper', () => {
    it('should save value into localstorage', () => {
        const savedValue = 'a value';
        expect(LocalStorageHelper.loadOrDefault('myvalue')).toBe(undefined);
        LocalStorageHelper.save('myvalue', savedValue);
        expect(LocalStorageHelper.loadOrDefault('myvalue')).toBe(savedValue);
    });

    it('should throw catch exceptions and assign default value if saved value is not parsable', () => {
        localStorage.anothervalue = '{one';
        expect(LocalStorageHelper.loadOrDefault('anothervalue', 'default value')).toBe('default value');
    });
});
