/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class MillisecToDurationValueConverter {
    public toView(msecs) {
        if (!msecs || _.isNaN(msecs)) {
            return 'N/A';
        }

        const totalSeconds: number = Math.floor(parseInt(msecs, 10) / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        let humanizedTimeStr = '';
        if (hours > 0) {
            humanizedTimeStr = `${hours} hour${hours > 1 ? 's' : ''}`;
        }
        if (minutes > 0) {
            if (humanizedTimeStr) {
                humanizedTimeStr += ' '; // adding a space between hours and minutes.
            }
            humanizedTimeStr = `${humanizedTimeStr}${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
        if (seconds > 0) {
            if (humanizedTimeStr) {
                humanizedTimeStr += ' '; // adding a space between hours and minutes.
            }
            humanizedTimeStr = `${humanizedTimeStr}${seconds} second${seconds > 1 ? 's' : ''}`;
        }
        return humanizedTimeStr;
    }
}
