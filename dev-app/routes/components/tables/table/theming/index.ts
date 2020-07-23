/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class TableThemeProperties {
    public tableThemeCols = [
        {
            _class: 'monospaced',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colHeadName: 'property',
            colHeadValue: 'CSS Property',
        },
        {
            _class: 'monospaced',
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Bindable Theme',
        },
    ];

    public tableThemeProperties = [
        {
            default: 'var(--c_soot)',
            name: '--table-th-background',
            property: 'background-color',
        },
        {
            default: 'var(--c_white)',
            name: '--table-th-color',
            property: 'color',
        },
        {
            default: 'inherit',
            name: '--table-th-font-family',
            property: 'font-family',
        },
    ];

    public tableThemeProperties2 = [
        {
            default: '1px solid var(--c_charcoal)',
            name: '--table-border',
            property: 'border',
        },
        {
            default: '--table-border',
            name: '--table-border-top',
            property: 'border-top',
        },
        {
            default: '--table-border',
            name: '--table-border-right',
            property: 'border-right',
        },
        {
            default: '--table-border',
            name: '--table-border-bottom',
            property: 'border-bottom',
        },
        {
            default: '--table-border',
            name: '--table-border-left',
            property: 'border-left',
        },
        {
            default: 'var(--s-1)',
            name: '--table-font-size',
            property: 'font-size',
        },
        {
            default: 'var(--table-font-size)',
            name: '--table-th-font-size',
            property: 'font-size',
        },
        {
            default: 'calc(var(--s-1) - 2px) var(--s0)',
            name: '--table-td-padding',
            property: 'padding',
        },
        {
            default: '1px solid var(--c_charcoal)',
            name: '--table-td-border',
            property: 'border',
        },
        {
            default: '--table-td-border',
            name: '--table-td-border-top',
            property: 'border-top',
        },
        {
            default: '--table-td-border',
            name: '--table-td-border-right',
            property: 'border-right',
        },
        {
            default: '--table-td-border',
            name: '--table-td-border-bottom',
            property: 'border-bottom',
        },
        {
            default: '--table-td-border',
            name: '--table-td-border-left',
            property: 'border-left',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--table-td-color',
            property: 'color',
        },
        {
            default: 'var(--table-td-padding)',
            name: '--table-td-padding',
            property: 'padding',
        },
        {
            default: '#3A3A3A',
            name: '--table-striped-background',
            property: 'background-color',
        },
        {
            default: '#444',
            name: '--table-hover-background',
            property: 'background-color',
        },
        {
            default: '#5f5f5f',
            name: '--table-active-background',
            property: 'background-color',
        },
        {
            default: 'var(--s-4)',
            name: '--table-text-input-cell-padding',
            property: 'padding-top, padding-bottom',
        },
        {
            default: 'var(--s2)',
            name: '--table-text-input-height',
            property: 'height',
        },
        {
            default: 'var(--s-5) var(--s-4)',
            name: '--table-text-input-padding',
            property: 'paddding',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--table-drag-background-hover',
            property: 'background-color',
        },
        {
            default: 'var(--s4)',
            name: '--table-drag-height',
            property: 'height',
        },
        {
            default: 'calc((var(--s-3) + 2.23px) * -1)',
            name: '--table-drag-top',
            property: 'top',
        },
        {
            default: 'calc(var(--s0) * -1)',
            name: '--table-drag-left',
            property: 'left',
        },
        {
            default: 'calc(var(--s-1) + 1px)',
            name: '--table-drag-padding-top',
            property: 'padding-top',
        },
        {
            default: 'var(--s-2)',
            name: '--table-drag-padding-right',
            property: 'padding-right',
        },
        {
            default: 'calc(var(--s-3) + 4px)',
            name: '--table-drag-padding-left',
            property: 'padding-left',
        },
        {
            default: 'var(--s4)',
            name: '--table-drag-check-height',
            property: 'height',
        },
        {
            default: 'calc(var(--s-2) + .77px)',
            name: '--table-drag-check-padding-top',
            property: 'padding-top',
        },
        {
            default: '3px',
            name: '--table-drag-check-padding-left',
            property: 'padding-left',
        },
        {
            default: 'calc((var(--s-3) + 1.23px) * -1)',
            name: '--table-drag-check-top',
            property: 'top',
        },
        {
            default: 'calc(var(--s0) * -1)',
            name: '--table-drag-check-left',
            property: 'left',
        },
        {
            default: 'var(--c_secondaryDark)',
            name: '--table-background-healthy',
            property: 'background-color',
        },
        {
            default: 'var(--c_secondaryLight)',
            name: '--table-color-healthy',
            property: 'color',
        },
        {
            default: 'var(--c_subTwoDark)',
            name: '--table-background-warning',
            property: 'backgrond-color',
        },
        {
            default: 'var(--c_subTwoLight)',
            name: '--table-color-warning',
            property: 'color',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--table-background-critical',
            property: 'background-color',
        },
        {
            default: 'var(--c_primaryLighter)',
            name: '--table-color-critical',
            property: 'color',
        },
        {
            default: 'var(--c_subOneDark)',
            name: '--table-background-info',
            property: 'backgrond-color',
        },
        {
            default: 'var(--c_subOneLight)',
            name: '--table-color-info',
            property: 'color',
        },
        {
            default: 'url(\'../../../global-styles/assets/images/td-processing.gif\')',
            name: '--table-background-processing',
            property: 'background-image',
        },
        {
            default: 'var(--table-td-color)',
            name: '--table-color-processing',
            property: 'color',
        },
        {
            default: '15px',
            name: '--table-sort-padding-right',
            property: 'padding-right',
        },
        {
            default: 'right 0 top calc(var(--s-5) - 2px)',
            name: '--table-sort-icon-position',
            property: 'background-position',
        },
        {
            default: 'right 0 top calc(var(--s0) - 1px)',
            name: '--table-fixed-header-sort-icon-position',
            property: 'backgrouond-position',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="\%23FFFFFF" fill-rule="evenodd"><path d="M3.5 0L7 5H0zM0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-none',
            property: 'background-image',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="\%23FFF" d="M3.5 0L7 5H0z"/><path fill="\%23E85358" d="M0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-desc',
            property: 'background-image',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="\%23E85358" d="M3.5 0L7 5H0z"/><path fill="\%23FFF" d="M0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-asc',
            property: 'background-image',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--table-mobile-label-color',
            property: 'color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--table-mobile-label-font-family',
            property: 'font-family',
        },
    ];

    public tableThemeProperties3 = [
        {
            default: 'var(--c_marshmellow)',
            name: '--table-action-color',
            property: 'color',
        },
        {
            default: 'var(--s-2)',
            name: '--table-truncate-margin-right',
            property: 'margin-right',
        },
        {
            default: 'var(--s0)',
            name: '--table-truncate-height',
            property: 'height',
        },
    ];
}
