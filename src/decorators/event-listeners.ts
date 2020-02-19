/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export function eventListeners<T extends new (...args: any[]) => any>(constructor: T) {
    return class EventListeners extends constructor {
        public element;
        public eventElement;
        public eventListeners = {};

        public attached() {
            if (typeof super.attached === 'function') {
                super.attached();
            }

            if (!this.element) {
                return;
            }

            const element = this.element.querySelector(this.eventElement) || this.element.querySelector('input');

            if (!element) {
                return;
            }

            Object.keys(this.eventListeners).forEach(event => {
                element.addEventListener(event, this.eventListeners[event]);
            });
        }
    };
}
