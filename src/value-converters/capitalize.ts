/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class CapitalizeValueConverter {
    public static transform(value, allWords?) {
        if (value && !allWords) {
            return _.capitalize(value);
        }

        if (value && allWords) {
            return _.startCase(value.toLowerCase());
        }

        return '';
    }
    public toView(value, allWords) {
        return CapitalizeValueConverter.transform(value, allWords);
    }
}
