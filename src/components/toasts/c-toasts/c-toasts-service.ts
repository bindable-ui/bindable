/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

const DEFAULT_TIMEOUT = 5000;

export class CToastsService {
    public toasts;

    constructor() {
        this.toasts = [];
    }

    public add(type, message, title, timeout = DEFAULT_TIMEOUT) {
        const id = new Date().getTime();
        this.toasts.unshift({
            id,
            message,
            title,
            type,
        });
        this.setTimeout(id, timeout);
    }

    public remove(toast) {
        const index = this.toasts.indexOf(toast);

        if (index >= 0) {
            this.toasts.splice(index, 1);
        }
    }

    public keepAlive(id) {
        const toast = this.getVToastById(id);

        if (toast) {
            clearTimeout(toast.disappearTimeout);
            toast.disappearTimeout = undefined;
        }
    }

    public resetTimeout(id) {
        this.setTimeout(id);
    }

    public getVToastById(id): any {
        const toast = _.find(this.toasts, {id});

        if (toast) {
            return toast;
        }

        return null;
    }

    public setTimeout(id, timeout = DEFAULT_TIMEOUT) {
        const toast = this.getVToastById(id);

        if (!toast) {
            return;
        }

        if (toast.disappearTimeout) {
            clearTimeout(toast.disappearTimeout);
        }

        toast.disappearTimeout = setTimeout(() => {
            this.remove(toast);
        }, timeout);
    }

    public success(message, title = 'Success', timeout = DEFAULT_TIMEOUT) {
        this.add('success', message, title, timeout);
    }

    public warning(message, title = 'Warning', timeout = DEFAULT_TIMEOUT) {
        this.add('warning', message, title, timeout);
    }

    public error(message, title = 'Error', timeout = DEFAULT_TIMEOUT) {
        this.add('error', message, title, timeout);
    }

    public info(message, title = 'Info', timeout = DEFAULT_TIMEOUT) {
        this.add('info', message, title, timeout);
    }
}
