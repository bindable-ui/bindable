/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {inject} from 'aurelia-framework';

export interface IDragOptions {
    dragData?: (event?) => any;
    getDragTarget?: (target: HTMLElement) => HTMLElement;
    onDragEnd?: (event) => boolean;
    thumbnailSrc?: () => any;
}

@inject(Element)
export class DragDraggableCustomAttribute {
    public value: IDragOptions;
    private image: any;
    private imageEl: any;

    constructor(private element) {}

    public attached() {
        if (!this.value) {
            return;
        }

        this.element.setAttribute('draggable', true);
        this.initEventListeners();
        this.preloadImage();
    }

    public detached() {
        this.image = null;

        if (this.imageEl) {
            try {
                document.querySelector('body').removeChild(this.imageEl);
            } catch (_err) {
                // do nothing
            }

            this.imageEl = null;
        }
    }

    public initEventListeners() {
        const {dragData, getDragTarget, onDragEnd} = this.value;

        if (dragData && !this.element.dragstart) {
            this.element.addEventListener('dragstart', event => {
                const data = dragData(event);

                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/data', JSON.stringify(data));

                if (this.image && !this.imageEl) {
                    const dragIcon = document.createElement('img');
                    dragIcon.src = this.image.src;
                    dragIcon.style.width = '215px';

                    const div = document.createElement('div');
                    div.appendChild(dragIcon);
                    div.style.position = 'absolute';
                    div.style.top = '0px';
                    div.style.left = '-500px';
                    div.id = `drag-ancor-${data.id}`;

                    this.imageEl = div;

                    document.querySelector('body').appendChild(div);
                } else if (getDragTarget) {
                    this.imageEl = getDragTarget(event.target);
                }

                if (this.imageEl) {
                    event.dataTransfer.setDragImage(this.imageEl, 0, 0);
                }

                return true;
            });
        }

        if (onDragEnd && !this.element.dragend) {
            this.element.addEventListener('dragend', event => {
                return onDragEnd(event);
            });
        }
    }

    public preloadImage() {
        const {thumbnailSrc} = this.value;

        if (thumbnailSrc) {
            try {
                const src = thumbnailSrc();

                if (typeof src === 'string') {
                    this.image = new Image();
                    this.image.src = thumbnailSrc();
                } else {
                    this.imageEl = src;
                }
            } catch (e) {
                // Cannot preload Image
            }
        }
    }
}
