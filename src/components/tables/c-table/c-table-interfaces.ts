/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface CTableCol {
    /** Set a class for specific use cases */
    _class?: string;
    /** These will place a colored bar on the left of the row.  */
    _status?: string;
    /** If column is hidden or not */
    _hidden?: boolean;
    /** This will set a width on a col. At least one col needs to be left blank to take the extra space. ex: 't30'. */
    colClass?: string;
    /** Name identifier of column. */
    colHeadName: string;
    /** If using a 'Select All' type selector box in the column, this is the default value. */
    colHeadSelectedVal?: boolean;
    /** What will display in the th element */
    colHeadValue?: string;
    /** Fixed width for a column. */
    colWidth?: number;
    /** Make this column sortable */
    sort?: boolean;
    /** Makes initial sort order descending for this column */
    reverseSort?: boolean;
    /** Use a custom ValueConverter */
    valueConverter?: string;
    /** Custom ValueConverter format */
    valueConverterFormat?: any;
    /** View template for column. Must be a PLATFORM.moduleName(...) */
    view?: string;
    /** ViewModel for the column. Must be a PLATFORM.moduleName(...) */
    viewModel?: string;

    /**
     * If using the `c-td-action` View, this is the function that runs when it's clicked.
     * @param row
     */
    colAction?(row: any): void;

    /**
     * If using the `c-td-check` View, this function will trigger when checkbox is toggled.
     * @param row
     */
    checkChanged?(row: any): void;

    /**
     * If using the `c-td-text-input`, this function will trigger when input is changed.
     * @param row
     */
    rowValChanged?(row: any): void;

    /**
     * When using the 'Select All' selector box, this function will trigger when the checkbox in the th is toggled.
     * @param isChecked
     */
    colHeadSelectedChanged?(isChecked: boolean): void;

    /**
     * If you need to highlight a search string in the table (currently only supported on c-td-truncate)
     */
    getSearchVal?(): string;
}

export interface CTableActions {
    /**
     * Sets colored bar of tr.
     * @param row
     * @param col
     */
    getBarColor?(row: any, col?: CTableCol): void;

    /**
     * Assignes class to a tr.
     * @param row
     */
    getRowClass?(row: any): void;

    /**
     * Assigns class to a td
     * @param row
     * @param col
     */
    getColClass?(row: any, col: CTableCol): void;

    /**
     * Gives runtime value to td.
     * @param row
     * @param col
     */
    getColValue?(row: any, col?: CTableCol): string | number;

    /**
     * If this function exists, it will trigger when a row is clicked
     * @param row
     * @param col optional
     */
    rowClick?(row: any, col?: CTableCol): void;

    /**
     * Used for custom sort logic if the built-in one doesn't suit your needs. ex: Server sort
     * @param col
     */
    sortColumn?(col: CTableCol, sortDir?: boolean): void;

    /**
     * Exclusive for `c-table-fixed-header`. This will fire off when the bottom of the list is scrolled to.
     */
    onScrollBottom?(): void;
}
