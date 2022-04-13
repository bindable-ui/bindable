/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {SortValueConverter} from './sort';

export class CsortValueConverter {
    public toView(array, directions) {
        return SortValueConverter.vsort(array, directions);
    }
}
