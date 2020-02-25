/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class PagerValueConverter {
    public toView(array, relativePosition, itemsPerPage) {
        const numPages = Math.ceil(array.length / itemsPerPage);
        const page = Math.max(0, Math.floor(1e-3 + relativePosition * (numPages - 1)));
        const offset = page * itemsPerPage;
        return array.slice(offset, offset + itemsPerPage);
    }
}
