/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export interface ITimelineActions {
    scrollTop?(): void;
    scrollBottom?(): void;
}

export interface ITimeEntryBasic {
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
    contentViewModel?: string;
    endTime: string;
    height: number;
    rightCalc?: number;
    startTime: string;
    top: number;
    widthCalc?: string;
}

export interface ITimeBlock {
    addNewMiddle?: boolean;
    addNewTop?: boolean;
    isoTime?: string;
    showTime?: boolean;
    time: string;
}

export interface ITimeDay {
    currentTimeLine?: number;
    blocks: ITimeBlock[];
    date: string;
    entries: ITimeEntry[];
    parsedDate?: string;
    today?: boolean;
}
