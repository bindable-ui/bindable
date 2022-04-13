/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {inject} from 'aurelia-framework';

export interface IDropzoneActions {
    onDragEnter(event: any): boolean;
    onDragLeave(event: any): boolean;
    onDragOver?(event: any): boolean;
    onDrop(event: any, data: any): boolean;
}

@inject(Element)
export class DragDropzoneCustomAttribute {
    public value: IDropzoneActions;

    constructor(private element) {}

    public attached() {
        if (!this.value) {
            return;
        }

        this.initEventListeners();
    }

    public initEventListeners() {
        if (this.value.onDrop) {
            if (!this.element.dragover) {
                this.element.addEventListener(
                    'dragover',
                    event => {
                        event.preventDefault();
                        event.stopPropagation();
                        if (this.value.onDragOver) {
                            return this.value.onDragOver(event);
                        }

                        return false;
                    },
                    false,
                );
            }

            if (!this.element.drop) {
                this.element.classList.add('drag--dropzone');

                this.element.addEventListener(
                    'drop',
                    event => {
                        event.preventDefault();
                        event.stopPropagation();

                        return this.value.onDrop(event, JSON.parse(event.dataTransfer.getData('text/data')));
                    },
                    false,
                );
            }
        }

        if (this.value.onDragEnter && !this.element.dragenter) {
            this.element.addEventListener('dragenter', this.value.onDragEnter, false);
        }

        if (this.value.onDragLeave && !this.element.dragleave) {
            this.element.addEventListener('dragleave', this.value.onDragLeave, false);
        }
    }
}
