/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, containerless} from 'aurelia-framework';
import {generateRandom} from '../../helpers/generate-random';
import * as styles from './l-sidebar.css.json';

@containerless
export class LSidebar {
    @bindable
    public contentMin = '65%';
    @bindable
    public scrolling = false;
    @bindable
    public side = 'left';
    @bindable
    public sideWidth = 'initial';
    @bindable
    public spacing = 'var(--s3)';
    @bindable
    public id = generateRandom();
    @bindable
    public whenToStack;

    public styles = styles;
    public stackWidth;

    public attached() {
        if (typeof this.scrolling !== 'boolean') {
            this.scrolling = false;
        }

        if (this.side !== 'left' && this.side !== 'right') {
            this.side = 'left';
        }

        this.stackWidth = `calc(${this.contentMin} + ${this.sideWidth})`;
    }
}
