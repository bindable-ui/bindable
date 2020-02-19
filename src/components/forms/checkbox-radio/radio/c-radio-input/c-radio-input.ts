/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, containerless} from 'aurelia-framework';
import * as styles from './c-radio-input.css.json';

@containerless
export class CRadioInput {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public checked;
    @bindable
    public id;
    @bindable
    public name;
    @bindable
    public state;

    public styles = styles;
}
