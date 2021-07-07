/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import * as styles from './c-textarea-input.css.json';

export class CTextareaInput {
    @bindable
    public id;
    @bindable
    public placeholder;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public textareaValue;
    @bindable
    public state;

    public styles = styles;
}
