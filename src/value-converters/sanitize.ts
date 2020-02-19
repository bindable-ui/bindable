/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as DOMPurify from 'dompurify';

export class SanitizeValueConverter {
    public toView(value, config) {
        return DOMPurify.sanitize(value, config);
    }
}
