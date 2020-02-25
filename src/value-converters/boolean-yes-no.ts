/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class BooleanYesNoValueConverter {
    public static transform(value) {
        if (value) {
            return 'Yes';
        }

        return 'No';
    }
    public toView(value) {
        return BooleanYesNoValueConverter.transform(value);
    }
}
