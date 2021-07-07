/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import * as styles from './c-form-image.css.json';

@containerless
export class CFormImage {
    @bindable
    public description;
    @bindable
    public id;
    @bindable
    public imageUrl;
    @bindable
    public name;
    @bindable
    public state;

    public styles = styles;
}
