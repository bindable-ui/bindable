/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export const STATE = {
    DISABLED: 'disabled',
    ENABLED: 'enabled',
    HIDDEN: 'hidden',
    THINKING: 'thinking',
};

export function authState<T extends new (...args: any[]) => any>(constructor: T) {
    return class AuthState extends constructor {
        public state;
        public _state = '';
        public authState = STATE.ENABLED;

        public attached() {
            this.updateState();
            if (typeof super.attached === 'function') {
                super.attached();
            }
        }

        public stateChanged() {
            this.updateState();
        }

        public updateState() {
            // do not update this._state with this.state if it is currently hidden or disabled by ACL.
            this._state = this.authState && this.authState !== STATE.ENABLED ? this.authState : this.state;
        }
    };
}
