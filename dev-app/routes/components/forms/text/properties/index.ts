/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TextInputProperties {
    public formTextCols = [
        {
            _class: 'monospaced',
            colClass: 't175',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't340',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
        {
            _class: 'monospaced',
            colClass: 't190',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public formTextProperties = [
        {
            description:
            'Use if you have no label and you need the input aligned with other inputs that have labels.',
            name: 'align-input',
            value: 'boolean',
        },
        {
            description: 'This will add an icon button to the input.',
            name: 'button',
            value: 'Icon name',
        },
        {
            description: 'This will add a button with text attached to the input',
            name: 'button-text',
            value: 'string',
        },
        {
            description: 'This will set the color of the button',
            name: 'button-color',
            value: 'primary | secondary | subOne | neutral | danger',
        },
        {
            default: 'false',
            description: 'This will add a x link to the right side of the input field.',
            name: 'clearable',
            value: 'boolean',
        },
        {
            description: 'Will not show until state is set to error.',
            name: 'error-msg',
            value: 'string',
        },
        {
            description: 'Will not show until state is set to warning.',
            name: 'warning-msg',
            value: 'string',
        },
        {
            default: 'false',
            description: 'Set if you need the input to be focused on load.',
            name: 'has-focus',
            value: 'boolean',
        },
        {
            description: 'Add an icon to the input.',
            name: 'icon',
            value: 'Any icon',
        },
        {
            description: 'Placement of the icon',
            name: 'icon-position',
            value: 'left | right',
        },
        {
            description: 'Set if you need an id on the input field.',
            name: 'id',
            value: 'string',
        },
        {
            description: 'Set the label text. If left off no label will be placed.',
            name: 'label',
            value: 'string',
        },
        {
            description: 'Place an icon in front of the label. See icon component for a list of icons.',
            name: 'label-icon',
            value: 'Any icon',
        },
        {
            default: 'var(--c_lightGray)',
            description: 'Set the color of the icon in the label.',
            name: 'label-icon-color',
            value: 'CSS Color',
        },
        {
            description: 'Use to place a pattern on the input.',
            name: 'pattern',
            value: 'string',
        },
        {
            description: 'Set the placehodler text. Leave off if not needed.',
            name: 'placeholder',
            value: 'string',
        },
        {
            description: 'Set a state for the text input.',
            name: 'state',
            value: 'error | warning | info | disabled | hidden',
        },
        {
            description: 'Sets the value of the text input',
            name: 'text-value',
            value: 'string',
        },
        {
            description: 'Set the title of the input. Useful for setting the message if your "pattern" prop is not matched by the user.',
            name: 'title',
            value: 'string',
        },
        {
            default: 'text',
            description: 'Set if you need the input to have a type of "number".',
            name: 'type',
            value: 'text | number | email | tel | url | password',
        },
    ];

    public testFunction() {
        // eslint-disable-next-line no-alert
        alert('Clicked');
    }
}
