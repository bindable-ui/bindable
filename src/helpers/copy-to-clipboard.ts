/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

declare const window: any;

export function copyToClipboard(textToCopy, notification) {
    /*
    Copies a string to the clipboard. Must be called from within an event handler such as click.
    May return false if it failed, but this is not always
    possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
    IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
    shown the first time the clipboard is used (per session).

    See cms2/src/apps/cms/routes/live-events/single/playback.js for usage example:

    import {copyToClipboard} from 'helpers/copy-to-clipboard';

    copy(text) {
        copyToClipboard(text, this.notification);
    }

    copyEmbed(html) {
        copyToClipboard(html)
        .then(() => {
            this.notification.success('Embed code copied to clipboard.');
        })
        .catch(() => {
            this.notification.error('Failed to copy embed code to clipboard.');
        });
    }
    */

    return new Promise<any>((resolve, reject) => {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            const rval = window.clipboardData.setData('Text', textToCopy);
            if (notification) {
                notification.info(`${textToCopy} copied to clipboard.`);
            }
            resolve(rval);
        } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            const textarea = document.createElement('textarea');
            textarea.textContent = textToCopy;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                // Security exception may be thrown by some browsers.
                document.execCommand('copy');
                resolve();
            } catch (ex) {
                // console.warn('Copy to clipboard failed.', ex);
                if (notification) {
                    notification.error(`Could not copy ${textToCopy} to clipboard.`);
                }
                reject(ex);
            } finally {
                document.body.removeChild(textarea);
                if (notification) {
                    notification.info(`${textToCopy} copied to clipboard.`);
                }
            }
        } else {
            reject(new Error('Could not copy to clipboard'));
        }
    });
}
