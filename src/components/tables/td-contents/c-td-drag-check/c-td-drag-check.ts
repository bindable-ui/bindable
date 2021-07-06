/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {inject, observable} from 'aurelia-framework';

@inject(Element)
export class CTdDragCheck {
    @observable
    public value;
    public element = null;
    public image = null;
    public row = null;
    public col = null;

    public dragOptions = {
        dragData: () => ({id: this.row.id, type: 'asset'}),
        thumbnailSrc: () => {
            if (this.col && this.col.dragSource) {
                return this.col.dragSource(this.row);
            }

            return null;
        },
    };

    constructor(element) {
        this.element = element;
    }

    public activate(model) {
        this.value = model.value;
        this.row = model.row;
        this.col = model.col;
    }

    public valueChanged() {
        this.checkChanged();
    }

    public checkChanged() {
        if (this.col && this.col.checkChanged) {
            this.col.checkChanged(this.row);
        }
    }
}
