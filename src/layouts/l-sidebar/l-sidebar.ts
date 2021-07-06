/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';
import {generateRandom} from '../../helpers/generate-random';
import * as styles from './l-sidebar.css.json';

export class LSidebar {
    @bindable
    public contentMin = '65%';
    @bindable
    public scrolling = false;
    @bindable
    public side = 'left';
    @bindable
    public sideBackground = 'unset';
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
    public styleTag;

    public sideWidthChanged() {
        this.setStyleTag();
    }

    public whenToStackChanged() {
        this.setStyleTag();
    }

    public idChanged() {
        this.setStyleTag();
    }

    public attached() {
        if (typeof this.scrolling !== 'boolean') {
            this.scrolling = false;
        }

        if (this.side !== 'left' && this.side !== 'right') {
            this.side = 'left';
        }

        this.stackWidth = `calc(${this.contentMin} + ${this.sideWidth})`;

        this.setStyleTag();
    }

    private setStyleTag() {
        this.styleTag = `
            @media screen and (max-width: ${this.whenToStack ? this.whenToStack : this.sideWidth}){
                #${this.id},
                #${this.id} > div,
                #${this.id} > div > *{
                    height: auto;
                    max-height: unset;
                }
            }
        `;
    }
}
