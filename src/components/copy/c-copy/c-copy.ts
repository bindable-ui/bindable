/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, inject} from 'aurelia-framework';
import {copyToClipboard} from '../../../helpers/copy-to-clipboard';
import {CToastsService} from '../../toasts/c-toasts/c-toasts-service';
import * as styles from './c-copy.css.json';

@inject(CToastsService)
export class CCopy {
    @bindable
    public content;
    @bindable
    public label;
    @bindable
    public link = false;
    @bindable
    public wrap = false;
    @bindable
    public action: (text: string) => Promise<string>;

    public styles = styles;

    constructor(public vToastsService: CToastsService) {}

    public attached() {
        if (typeof this.link !== 'boolean') {
            this.link = false;
        }

        if (typeof this.wrap !== 'boolean') {
            this.wrap = false;
        }
    }

    public async copy(text: string) {
        let copyText = text;

        if (this.action && _.isFunction(this.action)) {
            copyText = await this.action(text);
        }

        copyToClipboard(copyText, this.vToastsService.success('Copied to clipboard'));
    }
}
