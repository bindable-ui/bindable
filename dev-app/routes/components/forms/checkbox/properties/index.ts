/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import { IDragOptions, IDropzoneActions } from "index";
import sortDropData from "helpers/sort-drop-data";

export class CheckboxProperties {
    public vCheckbox1BOutput = true;
    public dropId = null;

    public formCheckboxCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formCheckboxProperties = [
        {
            default: 'flex-start',
            description: 'Flexbox alignment of the checkbox with the label.',
            name: 'align',
            value: 'center | flex-start | flex-end | stretch | baseline',
        },
        {
            description: 'Sets the value of the checkbox.',
            name: 'checked-value',
            value: 'String',
        },
        {
            default: 'false',
            description: 'Will add the drag icon to the left of the checkbox.',
            name: 'draggable',
            value: 'boolean',
        },
        {
            description: 'Adding this will make sure clicking on the label will mark/unmark the checkbox.',
            name: 'id',
            value: '',
        },
        {
            description: 'Sets the state of the checkbox.',
            name: 'state',
            value: 'disabled | hidden',
        },
    ];

    public draggableBoxes = [
        { id: 'option-one', text: 'First', checked: false, order: 1 },
        { id: 'option-two', text: 'Second', checked: false, imageUrl: 'https://picsum.photos/200/300', order: 2 },
        { id: 'option-three', text: 'Third', checked: false, order: 3 },
        { id: 'option-four', text: 'Fourth', checked: false, order: 4 },
        { id: 'option-five', text: 'Fifth', checked: false, order: 5 },
        { id: 'option-six', text: 'Sixth', checked: false, order: 6 },
    ];

    public dragOptions(box): IDragOptions {
        return {
            dragData: (event) => {
                event.target.parentElement.parentElement.style.opacity = '0.4';
                return (box);
            },

            getDragTarget: (target) => target.parentElement.parentElement,

            onDragEnd: (event) => {
                event.target.parentElement.parentElement.style.opacity = '1';
                return false
            },
        }
    }

    public getDropOptions = (box): IDropzoneActions => {
        const self = this;

        return {
            onDragEnter: (event) => {
                event.target.classList.add('drag--over');
                return false;
            },

            onDragLeave(event) {
                event.target.classList.remove('drag--over');
                return false;
            },

            onDrop(event, data) {
                self.dropId = data.id;

                // Import helper from bindable in consuming app
                self.draggableBoxes = sortDropData(data, box, self.draggableBoxes, 'order');

                return true;
            }
        };
    }

    public attached() {
        $('#indeterminate').prop('indeterminate', true);
    }
}
