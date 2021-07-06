/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {copyToClipboard} from './copy-to-clipboard';
// here need to mock the two parameters: textToCopy and notification.
// and clipboadData is a window object, but since jest uses a
// headless browser it might not have clipboardData object on the window.

declare const window: any;

describe('copy to clipboard component', () => {
    let notification;
    let errSpy;
    let infoSpy;

    const _textToCopy = 'thisTextIsCopied';
    beforeEach(() => {
        notification = {
            error: msg => msg,
            info: msg => msg,
        };
        errSpy = spyOn(notification, 'error');
        infoSpy = spyOn(notification, 'info');
    });

    it('should copys to clipboard when window has clipboardData object', done => {
        window.clipboardData = {
            setData: (type, textToCopy) => {
                window.clipboardData.data = textToCopy;
                return textToCopy;
            },
        };
        copyToClipboard(_textToCopy, notification).then(res => {
            expect(window.clipboardData.data).toEqual(_textToCopy);
            expect(res).toEqual(_textToCopy);
            expect(infoSpy).toHaveBeenCalled();
            delete window.clipboardData;
            done();
        });
    });

    it('should not call notification info when notification is undefined', done => {
        window.clipboardData = {
            setData: (type, textToCopy) => {
                window.clipboardData.data = textToCopy;
                return textToCopy;
            },
        };
        copyToClipboard(_textToCopy, undefined).then(() => {
            expect(infoSpy).not.toHaveBeenCalledWith(`${_textToCopy} copied to clipboard.`);
            delete window.clipboardData;
            done();
        });
    });

    it("should use document queryCommand if it's on document", done => {
        document.queryCommandSupported = action => action === 'copy';
        document.execCommand = action => action === 'copy';
        copyToClipboard(_textToCopy, notification).then(res => {
            expect(res).toBe(undefined);
            const textAreaEl = [].slice.call(document.querySelectorAll('textarea'));
            expect(textAreaEl.length).toBe(0);
            delete document.queryCommandSupported;
            delete document.execCommand;
            done();
        });
    });

    it('should reject when document has queryCommand but not execCommand', async () => {
        document.queryCommandSupported = action => action === 'copy';
        document.execCommand = () => {
            throw new Error('error');
        };

        return copyToClipboard(_textToCopy, notification).catch(err => {
            expect(errSpy).toHaveBeenCalledWith(`Could not copy ${_textToCopy} to clipboard.`);
            expect(err instanceof Error).toBe(true);
            expect(infoSpy).toHaveBeenCalledWith(`${_textToCopy} copied to clipboard.`);
        });
    });

    it('should reject the promise when the relavant objects are missing', async () =>
        copyToClipboard(_textToCopy, undefined).catch(err => {
            expect(err instanceof Error).toEqual(true);
        }));
});
