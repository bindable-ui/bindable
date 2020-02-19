/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface CFormAddRemoveActions {
    /**
     * This will fire off when the bottom of either left list is scrolled to.
     */
    onScrollBottom?(): void;

    /**
     * This will fire off when either left search button is clicked.
     */
    onSearch?(searchText): void;
}
