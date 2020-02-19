/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export function authState<T extends new (...args: any[]) => any>(constructor: T) {
    return class AuthState extends constructor {
        public state;
        public _state = '';
        // need to make this public for acl custom attributes to get access to it.
        public authState = '';

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
            this._state = this.authState && this.authState !== 'enabled' ? this.authState : this.state;
        }
    };
}
