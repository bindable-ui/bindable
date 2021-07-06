/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class DeleteConfirmProperties {
    public deleteConfirmCols = [
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            colClass: 't105',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public deleteConfirmProperties = [
        {
            default: 'top',
            description:
            'Set which side you need the tip on. This is related to the tip-arrow-position' +
            ' property and not all combinations work. If side is set to right or left do' +
            'not use arrow-position. If side is set to top or bottom, arrow-position must be used.',
            name: 'tip-side',
            value: 'top | right | bottom | left',
        },
        {
            default: 'rightEdge',
            description:
            'Set position of the arrow on the tip. This is related to the side property' +
            'and not all combinations work. If side is set to left or right do not use arrow-position.' +
            'If side is set to top or bottom, arrow-position must be used',
            name: 'tip-arrow-position',
            value: 'center | rightEdge | leftEdge',
        },
        {
            default: 'large',
            description: 'Set the size of the tip. size="auto" cannot be used with with arrow-position="center".',
            name: 'tip-size',
            value: 'small | medium | large | xlarge | auto',
        },
        {
            default: 'Channel',
            description: 'Set the text to identify what you are deleting.',
            name: 'title',
            value: '',
        },
        {
            description: 'Set what you are matching in order to enable the delete action.',
            name: 'match',
            value: 'string',
        },
        {
            description: 'Sets the delete message to show to the user',
            name: 'delete-message',
            value: 'string',
        },
        {
            description: 'Overrides the state for the trigger button',
            name: 'trigger-button-state',
            value: 'string',
        },
    ];

    public testDelete() {
        alert('Delete Function Here');
    }
}
