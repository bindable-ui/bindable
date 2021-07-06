/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ThClassForValueConverter {
    public toView(sortBy, key, sortDirection) {
        if (sortBy !== key) {
            return 'table--sort__none';
        }
        if (sortDirection === 'asc') {
            return 'table--sort__asc';
        }
        return 'table--sort__desc';
    }
}
