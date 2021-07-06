/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {FooterBody} from './footer';

describe('The footer class', () => {
    let footer: FooterBody;
    const shared = {
        canSave: false,
        controller: {
            cancel: jest.fn(),
            ok: jest.fn(),
        },
        isLoading: false,
        save: () => Promise.reject(),
    };

    beforeEach(() => {
        footer = new FooterBody();
        footer.activate({footer: shared, controller: shared.controller});
    });

    it('tests save', async () => {
        // Can't save. Should cancel out
        footer.save();
        expect(footer.controller.cancel).toHaveBeenCalledTimes(1);

        footer.model.canSave = true;

        // Save errors out
        await footer.save();
        expect(footer.controller.cancel).toHaveBeenCalledTimes(2);

        // Save succeeds
        footer.model.save = () => Promise.resolve();
        await footer.save();
        expect(footer.controller.ok).toHaveBeenCalledTimes(1);
    });
});
