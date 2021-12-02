/*
Copyright 2021, Edgecast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class ObjectKeysInfo {
    public myObject;

    public attached() {
        this.myObject = {
            key1: 'Some Value',
            key2: 'Another Value',
            key3: 'Last Value',
        };
    }
}
