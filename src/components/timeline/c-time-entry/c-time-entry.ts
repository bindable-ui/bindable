/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

import {CPopoverService} from '../../../components/popover/c-popover/c-popover-service';

import * as styles from './c-time-entry.css.json';

const TIMELINE_BLOCK_MARGIN = 30;

@inject(Element, CPopoverService)
export class CTimeEntry {
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public item;

    public popoverOpen = false;
    public styles = styles;

    constructor(public element: Element, private vPopoverService: CPopoverService) {}

    public attached() {
        // This will make sure that the top of the line for an
        // entry lines up with the hour line.
        if (this.item && this.item.top >= 0) {
            this.item.top = this.item.top - 2;
        }
    }

    public openPopover($event) {
        if (!this.item.contentViewModel) {
            // Relative to popover component
            this.item.contentViewModel = PLATFORM.moduleName(
                '../../../components/timeline/c-time-entry/c-time-entry-popover',
            );
        }

        this.popoverOpen = true;

        this.vPopoverService.color = this.item.placeholder
            ? 'var(--c_gray)'
            : this.item.accentColor
            ? this.item.accentColor
            : 'var(--c_gray)';

        const {left, top} = this.getPopoverPosition($event);

        this.vPopoverService.open({
            left,
            top,
            contentViewModel: this.item.contentViewModel,
            data: this.item,
            onClose: () => {
                if (this.item && this.item.placeholder) {
                    this.item = null;
                    return;
                }

                this.popoverOpen = false;
            },
        });
    }

    private getPopoverPosition(event) {
        const POPOVER_WIDTH = parseInt(
            getComputedStyle(document.documentElement, null).getPropertyValue('--w_popover'),
            10,
        );

        let left;
        let top;

        let leftOffet = 0;

        const jqElem = $(this.element);

        const elementWidth = jqElem.children().outerWidth(true);
        const entryRight = parseInt(jqElem.children(`.${styles.entry}`).css('right'), 10);
        const timeBlockWidth =
            $('c-timeline-block')
                .last()
                .outerWidth(true) - TIMELINE_BLOCK_MARGIN;

        const offsets = jqElem.children().offset();
        const positions = jqElem.children().position();

        let topPosition = offsets.top - positions.top;
        let leftPosition = offsets.left - positions.left;

        if (offsets.left < POPOVER_WIDTH) {
            leftPosition += elementWidth + (TIMELINE_BLOCK_MARGIN + 5);
        } else {
            leftPosition -= POPOVER_WIDTH - (TIMELINE_BLOCK_MARGIN - 5);
        }

        if (elementWidth + POPOVER_WIDTH + leftPosition > window.outerWidth) {
            leftPosition = window.outerWidth / 2 - POPOVER_WIDTH / 2;
            topPosition += 25;
        }

        if (elementWidth !== timeBlockWidth) {
            leftOffet += timeBlockWidth - (elementWidth + entryRight);
        }

        left = leftPosition + leftOffet;
        top = topPosition + this.item.top;

        if (event && event.clientY) {
            // Just work off where the click happens
            top = event.clientY - 10;
        }

        return {left, top};
    }
}
