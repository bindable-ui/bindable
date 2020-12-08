/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface ITimelineActions {
    getEntries?(start, end): Promise<any[]>;
    pollEntries?(start, end): Promise<any[]>;
}

export interface ITimeEntryBasic {
    accentColor?: string;
    active?: boolean;
    altTime?: string;
    background?: string;
    color?: string;
    duration: number;
    end?: string;
    icons?: string[];
    sizeDay?: string;
    sizeWeek?: string;
    start: string;
    title: string;
}

export interface ITimeEntry extends ITimeEntryBasic {
    column?: number;
    contentViewModel?: string;
    endTime: string;
    height: number;
    isoTime?: string;
    priority?: number;
    placeholder?: boolean;
    rightCalc?: number | string;
    shiftIcons?: boolean;
    startTime: string;
    top: number;
    virtualColumn?: number;
    widthCalc?: number | string;
}

export interface ITimeBlock {
    isoTime?: string;
    time: string;
    newItem?: any;
}

export interface ITimeDay {
    currentTimeLine?: number;
    blocks: ITimeBlock[];
    date: string;
    endTime?: string;
    entries: ITimeEntry[];
    hidden?: boolean;
    isLoading?: boolean;
    newItem?: any;
    parsedDate?: string;
    placeholderEntry?: any;
    pollingTracker?: any;
    startTime?: string;
    today?: boolean;
}
