/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {inject} from 'aurelia-framework';
import * as styles from './c-toasts.css.json';

import {CToastsService} from './c-toasts-service';

@inject(CToastsService)
export class CToasts {
    public styles = styles;

    constructor(public vToastsService: CToastsService) {}
}
