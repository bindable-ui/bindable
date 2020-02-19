/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class GetPropertyValueConverter {
    public toView(item, obj, key) {
        return item[obj[key]];
    }
}
