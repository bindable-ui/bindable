/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class MillisecToDateValueConverter {
    public toView(msec) {
        const d = new Date(msec);
        return `${d.toLocaleDateString()} - ${d.toLocaleTimeString()}`;
    }
}
