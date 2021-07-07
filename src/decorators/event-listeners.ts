/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {IFormEventListener} from 'interfaces/event-listeners';

export function eventListeners<T extends new (...args: any[]) => any>(constructor: T) {
    return class EventListeners extends constructor {
        public element;
        public eventElement;
        public eventListeners: IFormEventListener;

        public attached() {
            if (typeof super.attached === 'function') {
                super.attached();
            }

            if (!this.element || !this.eventListeners) {
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
