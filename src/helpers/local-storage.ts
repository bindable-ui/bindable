/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

// Helper class for setting and retrieving data from browser local storage
// See (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for more information.
export class LocalStorageHelper {
    public static loadOrDefault(key, defaultValue?) {
        let v = localStorage.getItem(key);

        try {
            v = v !== null ? JSON.parse(v) : defaultValue;
        } catch (e) {
            v = defaultValue;
        }

        return v;
    }

    public static save(key, value) {
        localStorage[key] = JSON.stringify(value);
    }
}
