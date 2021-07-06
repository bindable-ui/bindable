/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface IVNavSliderObj {
    activeIndex: number;
    shownIndex: number;
    pages: IVNavSliderPageList[];
}

export interface IVNavSliderPageList {
    isLoading?: boolean;
    navs: IVNavSliderNavList[];
    title?: string;
    prevText?: string;
    nextText?: string;

    searchPlaceholder?: string;
    searchQuery?: string;
    searchFn?(query?: string): any;
    loadMore?(): any;
}

export interface IVNavSliderNavList {
    title?: string;
    href?: string;
    active?: boolean;
    sectionTitle?: string;
    icon?: string;
    subText?: string;
    isAccordion?: boolean;
    accordionState?: string;
    navs?: IVNavSliderNavList[];
    iconAction?(args?: any): any;
    clickAction?(args?: any): any;
}

export interface IVNavSliderPageDropzoneList extends IVNavSliderPageList {
    navs: IVNavSliderNavDropzone[];
}

export interface IVNavSliderNavDropzone extends IVNavSliderNavList {
    dropzone?: boolean;

    dropzoneActions?: IDropzoneActions;
}

export interface IDropzoneActions {
    onDrop(event: any, data: any): boolean;
    onDragEnter(event: any): boolean;
    onDragLeave(event: any): boolean;
    onDragOver?(event: any): boolean;
}
