/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {DialogService} from 'aurelia-dialog';
import {Aurelia} from 'aurelia-framework';
import {dirtyCheckPrompt} from './';

@dirtyCheckPrompt
class DirtyCheckPrompt {
    public onDirtyPromptStay = jest.fn();
    public onDirtyPromptLeave = jest.fn();
    public isDirty: () => boolean;
    public canDeactivate: () => Promise<boolean>;
}

describe('Dirty Check Prompt Decorator', () => {
    const whenClosedMock = jest.fn();
    const DIALOG_SERVICE_MOCK = jest.fn(() => ({
        open: jest.fn().mockReturnValue({
            whenClosed: whenClosedMock,
        }),
    }));
    const dialogServcieMock = new DIALOG_SERVICE_MOCK();
    new Aurelia().container.registerInstance(DialogService, dialogServcieMock);
    const dcp = new DirtyCheckPrompt();

    it('should return true if isDirty function is not defined.', done => {
        dcp.canDeactivate().then(resp => {
            expect(resp).toBe(true);
            done();
        });
    });

    it('should open modal if form is dirty.', () => {
        dcp.isDirty = jest.fn().mockReturnValue(true);
        dcp.canDeactivate();
        expect(dialogServcieMock.open).toHaveBeenCalled();
        expect(whenClosedMock).toHaveBeenCalled();
        const modalCloseClbk = whenClosedMock.mock.calls[0][0];
        modalCloseClbk({wasCancelled: false});
        expect(dcp.onDirtyPromptLeave).toHaveBeenCalled();
        modalCloseClbk({wasCancelled: true});
        expect(dcp.onDirtyPromptStay).toHaveBeenCalled();
    });

    it('should not open modal if form is not dirty.', () => {
        dcp.isDirty = jest.fn().mockReturnValue(false);
        dcp.canDeactivate();
        expect(dcp.onDirtyPromptLeave).toHaveBeenCalled();
    });
});
