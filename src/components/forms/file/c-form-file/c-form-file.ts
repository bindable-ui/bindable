/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode} from 'aurelia-framework';
import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';
import * as styles from './c-form-file.css.json';

@authState
export class CFormFile {
    @bindable
    public errorMsg;
    @bindable
    public id = generateRandom();
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public files;
    @bindable
    public imagePicker: boolean = false;
    @bindable
    public imageSrc = null;
    @bindable
    public isUploading: boolean = false;
    @bindable
    public label;
    @bindable
    public onReset;
    @bindable
    public showReset: boolean = false;
    @bindable
    public state;
    @bindable
    public upload;

    public styles = styles;

    private imgUrl: string = null;

    public attached() {
        this.imgUrl = this.imageSrc;

        if (typeof this.imagePicker !== 'boolean') {
            this.imagePicker = false;
        }

        if (typeof this.isUploading !== 'boolean') {
            this.isUploading = false;
        }

        if (typeof this.showReset !== 'boolean') {
            this.showReset = false;
        }
    }

    public detached() {
        this.files = null;
        this.imageSrc = null;
        this.errorMsg = null;
        this.isUploading = false;
        this.showReset = false;
    }

    public removeImage() {
        this.files = null;
        this.imgUrl = this.imageSrc;
    }

    public resetImage() {
        if (this.onReset) {
            this.onReset();
        }
    }

    public imageSrcChanged() {
        this.imgUrl = this.imageSrc;
    }

    public filesChanged() {
        if (!this.files || !this.files.length) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = (e: any) => {
            this.imgUrl = e.target.result;
        };

        if (_.isFunction(this.upload)) {
            this.upload();
        }
    }
}
