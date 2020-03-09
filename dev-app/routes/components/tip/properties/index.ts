/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {LogManager} from 'aurelia-framework';

const logger = LogManager.getLogger('design-system: c-tip');
export class TipProperties {
    public tipCols = [
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't350',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public tipProperties = [
        {
            description:
            'Set position of the arrow on the tip. This is related to the side property and ' +
            'not all combinations work. If side is set to left or right do not use arrow-position. ' +
            'If side is set to top or bottom, arrow-position must be used.',
            name: 'arrow-position',
            value: 'center | rightEdge | leftEdge | none',
        },
        {
            default: 'var(--c_subOne)',
            description: 'Set the color of the 1px bar.',
            name: 'color',
            value: 'CSS Color',
        },
        {
            default: 'false',
            description: 'Force the tip to close when clicking anywhere after opening it.',
            name: 'force-close',
            value: 'boolean',
        },
        {
            default: '200',
            description:
            'Set the number of milliseconds when the tip will open ' +
            'after the mouse enters the tip trigger. Only used if trigger-type is set to hover.',
            name: 'hover-delay',
            value: 'Number of milliseconds.',
        },
        {
            default: 'false',
            description: 'Set to true if you are setting the tip trigger to be an icon.',
            name: 'icon-tip',
            value: 'boolean',
        },
        {
            description: 'This will move the tip trigger to the right via a float.',
            name: 'position-trigger',
            value: 'rightSide',
        },
        {
            default: 'right',
            description:
            'Set which side you need the tip on. This is related to the arrow-position property and ' +
            'not all combinations work. If side is set to right or left do not use arrow-position. ' +
            'If side is set to top or bottom, arrow-position must be used.',
            name: 'side',
            value: 'top | right  | bottom | left',
        },
        {
            default: 'small',
            description: 'Set the size of the tip. size="auto" cannot be used with with arrow-position="center".',
            name: 'size',
            value: 'small | medium | large | xlarge | auto',
        },
        {
            default: 'false',
            description: 'Set the width of the trigger to 100% of the wrapping container. e.g. Inside a truncated table cell.',
            name: 'fill-width-trigger',
            value: 'boolean',
        },
        {
            default: 'click',
            description: 'Set the event type that triggers the tip.',
            name: 'trigger-type',
            value: 'click | hover',
        },
    ];

    public tipActions = {
        onHide: () => {
            logger.info('Hello from onHide callback');
        },
        onShow: () => {
            logger.info('Hello from onShow callback');
        },
    };
}
