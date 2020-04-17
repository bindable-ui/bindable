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
            colClass: 't450',
            colHeadName: 'default',
            colHeadValue: 'Default',
        },
    ];

    public tableThemeProperties = [
        {
            default: 'var(--c_soot)',
            name: '--table-th-background',
        },
        {
            default: 'var(--c_white)',
            name: '--table-th-color',
        },
        {
            default: 'inherit',
            name: '--table-th-font-family',
        },
    ];

    public tableThemeProperties2 = [
        {
            default: '1px solid var(--c_charcoal)',
            name: '--table-border',
        },
        {
            default: 'var(--s-1)',
            name: '--table-font-size',
        },
        {
            default: 'var(--table-font-size)',
            name: '--table-th-font-size',
        },
        {
            default: 'calc(var(--s-1) - 2px) var(--s0)',
            name: '--table-td-padding',
        },
        {
            default: '1px solid var(--c_charcoal)',
            name: '--table-td-border',
        },
        {
            default: '--table-border',
            name: '--table-td-border-top',
        },
        {
            default: '--table-border',
            name: '--table-td-border-right',
        },
        {
            default: '--table-border',
            name: '--table-td-border-bottom',
        },
        {
            default: '--table-border',
            name: '--table-td-border-left',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--table-td-color',
        },
        {
            default: 'var(--table-td-padding)',
            name: '--table-td-padding',
        },
        {
            default: '#3A3A3A',
            name: '--table-striped-background',
        },
        {
            default: '#444',
            name: '--table-hover-background',
        },
        {
            default: '#5f5f5f',
            name: '--table-active-background',
        },
        {
            default: 'var(--s-4)',
            name: '--table-text-input-cell-padding',
        },
        {
            default: 'var(--s2)',
            name: '--table-text-input-height',
        },
        {
            default: 'var(--s-5) var(--s-4)',
            name: '--table-text-input-padding',
        },
        {
            default: 'var(--c_darkGray)',
            name: '--table-drag-background-hover',
        },
        {
            default: 'var(--s4)',
            name: '--table-drag-height',
        },
        {
            default: 'calc(var(--s-1) + 1px)',
            name: '--table-drag-padding-top',
        },
        {
            default: 'var(--s-2)',
            name: '--table-drag-padding-right',
        },
        {
            default: 'var(--s-3)',
            name: '--table-drag-padding-left',
        },
        {
            default: 'calc(var(--s4) + 3%)',
            name: '--table-drag-check-height',
        },
        {
            default: 'var(--s-2)',
            name: '--table-drag-check-padding-top',
        },
        {
            default: 'var(--c_secondaryDark)',
            name: '--table-background-healthy: var(--c_secondaryDark)',
        },
        {
            default: 'var(--c_secondaryLight)',
            name: '--table-color-healthy',
        },
        {
            default: 'var(--c_subTwoDark)',
            name: '--table-background-warning',
        },
        {
            default: 'var(--c_subTwoLight)',
            name: '--table-color-warning',
        },
        {
            default: 'var(--c_primaryDark)',
            name: '--table-background-critical',
        },
        {
            default: 'var(--c_primaryLighter)',
            name: '--table-color-critical',
        },
        {
            default: 'var(--c_subOneDark)',
            name: '--table-background-info',
        },
        {
            default: 'var(--c_subOneLight)',
            name: '--table-color-info',
        },
        {
            default: 'url(\'../../../global-styles/assets/images/td-processing.gif\')',
            name: '--table-background-processing',
        },
        {
            default: 'var(--table-td-color)',
            name: '--table-color-processing',
        },
        {
            default: '15px',
            name: '--table-sort-padding-right',
        },
        {
            default: 'right 0 top calc(var(--s-5) - 2px)',
            name: '--table-sort-icon-position',
        },
        {
            default: 'right 0 top calc(var(--s0) - 1px)',
            name: '--table-fixed-header-sort-icon-position',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="\%23FFFFFF" fill-rule="evenodd"><path d="M3.5 0L7 5H0zM0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-none',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="\%23FFF" d="M3.5 0L7 5H0z"/><path fill="\%23E85358" d="M0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-desc',
        },
        {
            default: 'url(\'data:image/svg+xml;utf8,<svg width="7" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="\%23E85358" d="M3.5 0L7 5H0z"/><path fill="\%23FFF" d="M0 8h7l-3.5 5z"/></g></svg>\')',
            name: '--table-sort-icon-asc',
        },
        {
            default: 'var(--c_marshmellow)',
            name: '--table-mobile-label-color',
        },
        {
            default: 'var(--ff_primary-bold)',
            name: '--table-mobile-label-font-family',
        },
    ];

    public tableThemeProperties3 = [
        {
            default: 'var(--c_marshmellow)',
            name: '--table-action-color',
        },
        {
            default: 'var(--s-2)',
            name: '--table-truncate-margin-right',
        },
        {
            default: 'var(--s0)',
            name: '--table-truncate-height',
        },
    ];
}
