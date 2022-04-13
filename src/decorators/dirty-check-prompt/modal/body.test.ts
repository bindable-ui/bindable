/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {ModalBody} from './body';

describe('The body class', () => {
    let body: ModalBody;

    beforeEach(() => {
        body = new ModalBody();
    });

    it('exists', () => {
        expect(body.constructor).toBeDefined();
    });
});
