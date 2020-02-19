/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {inject} from 'aurelia-framework';
import {CToastsService} from 'components/toasts/c-toasts/c-toasts-service';

@inject(CToastsService)
export class Toasts {
    constructor(public vToastsService: CToastsService) {
        this.vToastsService.success('I am going to disappear.');
        this.vToastsService.error('I am error.', undefined, 80000);
        this.vToastsService.warning('I am warning.', 'Custom Title', 90000);
        this.vToastsService.info('I am info', undefined, 100000);
    }
}
