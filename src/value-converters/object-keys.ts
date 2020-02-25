/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

// A ValueConverter for iterating an Object's properties inside of a repeat.for in Aurelia
export class ObjectKeysValueConverter {
    public toView(obj) {
        if (_.isEmpty(obj)) {
            return [];
        }
        return Object.keys(obj);
    }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects properties
 * aka its keys.
 *
 * <li repeat.for="prop of myVmObject | objectKeys">${prop}</li>
 */
