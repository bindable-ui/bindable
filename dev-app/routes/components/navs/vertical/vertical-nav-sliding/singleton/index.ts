/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class VerticalSlidingSingleton {
    public verticalCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'method',
            colHeadValue: 'Method Name',
        },
        {
            _class: 'monospaced',
            colClass: 't240',
            colHeadName: 'arguments',
            colHeadValue: 'Arguments',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public verticalOptions = [
        {
            arguments: 'router',
            description: 'Initializes the first page of the slider with the router list.',
            method: 'initMainNav',
        },
        {
            arguments: 'page: IVNavSliderPageList, pageIndex: number',
            description: 'Replaces the page in the nav.',
            method: 'replacePage',
        },
        {
            arguments: 'pageIndex: number, index: number',
            description: 'Set an individual route with an active state.',
            method: 'setActive',
        },
        {
            arguments: 'text: string',
            description: 'Set what the text says to transtion to the next nav.',
            method: 'setNextText',
        },
    ];
}
