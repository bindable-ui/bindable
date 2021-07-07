/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class DateInputProperties {
    public formDateCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
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

    public formDateProperties = [
        {
            default: 'false',
            description: 'Will remove the hours and mins if set to "MM/DD/YYYY"',
            name: 'date-format',
            value: 'moment date format',
        },
        {
            description: 'Set custom text for the disabled message.',
            name: 'disabled-text',
            value: 'string',
        },
        {
            description: 'Will not show until state is set to error.',
            name: 'error-msg',
            value: '',
        },
        {
            description: 'Will not show until state is set to warning.',
            name: 'warning-msg',
            value: '',
        },
        {
            description:
            'Must be set and must be unique. This will let the component know which calendar box to open.',
            name: 'id',
            value: 'string',
        },
        {
            default: 'right',
            description: 'Set on which side the calendar icon will appear.',
            name: 'icon-position',
            value: 'right | left',
        },
        {
            default: 'false',
            description: 'Set if you would like the datepicker to show without and input.',
            name: 'inline',
            value: 'boolean',
        },
        {
            description: "Sets the value of the text input. Can't use with timestamp.",
            name: 'iso-date',
            value: 'ISO Date string',
        },
        {
            description: 'Set the label text. If left off no label will be placed.',
            name: 'label',
            value: 'string',
        },
        {
            description:
            'Place an icon in front of the label. See icon component for a list of icons.',
            name: 'label-icon',
            value: 'Any icon',
        },
        {
            default: 'var(--c_lightGray)',
            description:
            'Set the color of the icon in the label.',
            name: 'label-icon-color',
            value: 'CSS Color',
        },
        {
            description: 'Leave off if not needed.',
            name: 'placeholder',
            value: 'string',
        },
        {
            default: 'minute',
            description: 'Sets time truncation.',
            name: 'start-of',
            value: 'error | disabled | hidden',
        },
        {
            description: 'Set a state for the text input.',
            name: 'state',
            value: 'error | disabled | hidden',
        },
        {
            description: 'Set the text value in the textbox',
            name: 'text-value',
            value: 'string',
        },
        {
            default: 'null',
            description: 'Set the default time of the picker to be at the start or end of today.',
            name: 'timeofday',
            value: 'start | end',
        },
        {
            description: "Sets the value of the text input. Can't use with iso-date",
            name: 'timestamp',
            value: 'time in milliseconds',
        },
    ];

    public callbacks = {
        onChange: timestamp => console.log(timestamp),
    };

    public vFormDateOutput1 = null;
    public vFormDateOutput2 = null;
    public vFormDateText = '';
}
