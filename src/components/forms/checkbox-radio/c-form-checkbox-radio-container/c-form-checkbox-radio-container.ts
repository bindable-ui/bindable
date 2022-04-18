/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, inject} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import * as styles from './c-form-checkbox-radio-container.css.json';

@authState
@inject(Element)
export class CFormCheckboxRadioContainer {
    @bindable
    public errorMsg;
    @bindable
    public warningMsg;
    @bindable
    public label;
    @bindable
    public layout;
    @bindable
    public name;
    @bindable
    public state;

    public styles = styles;

    constructor(public element: Element) {}

    public attached() {
        const elem = this.element.getElementsByClassName('js-input-list')[0];
        const inputs = elem.getElementsByClassName('js-radio');
        Array.prototype.forEach.call(inputs, value => {
            if (value.name === '') {
                value.name = this.name;
            }
        });
    }
}
