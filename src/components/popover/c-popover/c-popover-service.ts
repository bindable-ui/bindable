// Get the default width for Popovers
const POPOVER_WIDTH = parseInt(
    window.getComputedStyle(document.documentElement, null).getPropertyValue('--w_popover'),
    10,
);

export interface ICPopover {
    contentViewModel?: string;
    data: any;
    element?: Element;
    left?: number;
    leftOffset?: number;
    popoverColor?: string;
    top?: number;
    topOffset?: number;

    onClose?(): void;
    onOpen?(): void;
}

export class CPopoverService {
    public model: ICPopover = null;
    public color = 'subOne';
    public showing = false;

    private prevModel: ICPopover = null;

    public open(model: ICPopover) {
        // Don't nuke the data if an entry is the same as the current one
        // BAD & STRANGE THINGS WILL HAPPEN!
        if (
            this.prevModel &&
            this.prevModel.data &&
            model &&
            model.data &&
            model.data.blockIsoTime !== this.prevModel.data.blockIsoTime
        ) {
            this.closePrev();
        }

        if (!model) {
            return;
        }

        this.prevModel = model; // Keep track of this to close last one if new one opens too quickly
        this.model = model;

        if (this.model && this.model.popoverColor) {
            this.color = this.model.popoverColor;
        }

        if (this.model.element) {
            const offsets = $(this.model.element).offset();
            const positions = $(this.model.element).position();

            const topPosition = offsets.top - positions.top;
            let leftPosition = offsets.left - positions.left;

            const elementWidth = $(this.model.element)
                .children()
                .outerWidth(true);

            if (leftPosition < POPOVER_WIDTH) {
                leftPosition += elementWidth + 25;
            } else {
                leftPosition -= POPOVER_WIDTH - 25;
            }

            this.model.left = leftPosition + (this.model.leftOffset ? this.model.leftOffset : 0);
            this.model.top = topPosition + (this.model.topOffset ? this.model.topOffset : 0);
        }

        _.defer(() => {
            if (this.model && _.isFunction(this.model.onOpen)) {
                this.model.onOpen();
            }

            setTimeout(() => {
                const popoverContainer = $('#popover-container');

                // Don't actually open the container if it can't find the elem
                if (!popoverContainer.length) {
                    return;
                }

                const diff = $(window).outerHeight() - (popoverContainer.offset().top + popoverContainer.outerHeight());

                // Popover is overflowing
                if (diff < 0) {
                    this.model.top += diff - 25;
                }

                this.showing = true;
            }, 100);
        });
    }

    public close() {
        this.showing = false;

        if (this.model && _.isFunction(this.model.onClose)) {
            this.model.onClose();
        }

        setTimeout(() => {
            this.model = null;
            this.color = 'subOne';
        }, 320);
    }

    /**
     * This fixes a race condition where a user might click like crazy
     * and open a new popover before the previous one actually opened.
     */
    private closePrev() {
        this.showing = false;

        if (!this.prevModel) {
            return;
        }

        if (_.isFunction(this.prevModel.onClose)) {
            this.prevModel.onClose();
        }

        this.prevModel = null;
    }
}
