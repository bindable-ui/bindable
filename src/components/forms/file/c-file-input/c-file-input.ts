/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import * as styles from './c-file-input.css.json';

export class CFileInput {
    @bindable
    public id;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public files;
    @bindable
    public state: string;
    @bindable
    public imagePicker: boolean = false;

    public styles = styles;

    public attached() {
        if (typeof this.imagePicker !== 'boolean') {
            this.imagePicker = false;
        }
    }

    public filesUploaded(ev) {
        this.files = ev.target.files;
    }
}
