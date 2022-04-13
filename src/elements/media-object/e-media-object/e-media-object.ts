/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {generateRandom} from '../../../helpers/generate-random';

import * as styles from './e-media-object.css.json';

export class EMediaObject {
    @bindable
    public background: string = 'var(--c_slate)';
    @bindable
    public borderTop: string = 'unset';
    @bindable
    public borderRight: string = 'unset';
    @bindable
    public borderBottom: string = 'unset';
    @bindable
    public borderLeft: string = 'unset';
    @bindable
    public border: string;
    @bindable
    public center: boolean = true;
    @bindable
    public mediaWidth: string = 'unset';
    @bindable
    public mediaHeight: string = 'unset';
    @bindable
    public mediaBackground: string = 'transparent';
    @bindable
    public paddingEnds: string = 'var(--s-2)';
    @bindable
    public paddingSides: string = 'var(--s-2)';
    @bindable
    public pillColor: string = 'var(--c_subOneMain)';
    @bindable
    public pillText: string = '';
    @bindable
    public leftGutter: string = 'var(--s-3)';
    @bindable
    public rightGutter: string = 'var(--s-3)';
    @bindable
    public topGutter: string = 'var(--s-3)';
    @bindable
    public bottomGutter: string = 'var(--s-3)';
    @bindable
    public rowStackSmall: boolean = true;

    public rightId = generateRandom();

    public styles = styles;

    public attached() {
        if (typeof this.center !== 'boolean') {
            this.center = true;
        }

        if (!$(`#${this.rightId}`).children().length) {
            $(`#${this.rightId}`).css('display', 'none');
        }
    }
}
