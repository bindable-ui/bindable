/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as moment from 'moment';

export class TimelineExample {
    public today = moment().startOf('day').startOf('week').add(2, 'days').toISOString();
    public entries = [
        {
            accentColor: '#8E5DB2',
            duration: 6000,
            icons: ['play', 'rules'],
            start: moment(this.today).add(8, 'hours').toISOString(),
            title: 'Dumb and Dumber',
        },
        {
            accentColor: '#359AC5',
            duration: 500,
            icons: ['ad-break'],
            start: moment(this.today).add(9.67, 'hours').toISOString(),
            title: 'Ad Break',
        },
        {
            accentColor: '#8E5DB2',
            duration: 6000,
            icons: ['play'],
            start: moment(this.today).add(9.81, 'hours').toISOString(),
            title: 'Ace Ventura',
        },
        {
            background: '#111',
            duration: 2500,
            icons: ['time', 'rules'],
            sizeDay: 'small',
            sizeWeek: 'expandable',
            start: moment(this.today).add(10, 'hours').add(15, 'minutes').toISOString(),
            title: 'Match Time',
        },
        {
            accentColor: '#38A56C',
            active: true,
            duration: 6500,
            icons: ['slicer', 'rules'],
            start: moment(this.today).add(11, 'hours').add(15, 'minutes').toISOString(),
            title: 'Ace Ventura 2',
        },
        {
            accentColor: '#359AC5',
            duration: 700,
            icons: ['ad-break'],
            start: moment(this.today).add(11, 'hours').add(15, 'minutes').add(6500, 'seconds').toISOString(),
            title: 'Ad Break',
        },
        {
            accentColor: '#38A56C',
            duration: 6500,
            icons: ['slicer', 'rules'],
            start: moment(this.today).add(11, 'hours').add(15, 'minutes').add(7200, 'seconds').toISOString(),
            title: 'The Mask',
        },
        {
            background: '#111',
            duration: 2500,
            icons: ['signal', 'rules'],
            sizeDay: 'small',
            sizeWeek: 'expandable',
            start: moment(this.today).add(14, 'hours').add(15, 'minutes').toISOString(),
            title: 'Match Signal',
        },
        {
            background: '#111',
            duration: 2500,
            icons: ['signal', 'rules'],
            sizeDay: 'small',
            sizeWeek: 'expandable',
            start: moment(this.today).add(15, 'hours').add(15, 'minutes').toISOString(),
            title: 'Match Signal 2',
        },
        // {
        //     background: 'var(--c_subOneDark)',
        //     color: 'var(--c_white)',
        //     duration: 5500,
        //     start: moment(this.today).add(8, 'hours').toISOString(),
        //     title: 'Overlap 1',
        // },
        // {
        //     duration: 1000,
        //     start: moment(this.today).add(8, 'hours').add(2, 'minutes').toISOString(),
        //     title: 'Overlap 2',
        // },
        // {
        //     duration: 1000,
        //     start: moment(this.today).add(8, 'hours').add(4, 'minutes').toISOString(),
        //     title: 'Overlap 3',
        // },
        // {
        //     duration: 1000,
        //     start: moment(this.today).add(8, 'hours').add(8, 'minutes').toISOString(),
        //     title: 'Overlap 4',
        // },
        // {
        //     duration: 1000,
        //     start: moment(this.today).add(8, 'hours').add(16, 'minutes').toISOString(),
        //     title: 'Overlap 5',
        // },
        // {
        //     duration: 1000,
        //     start: moment(this.today).add(8, 'hours').add(20, 'minutes').toISOString(),
        //     title: 'Overlap 6',
        // },
        // {
        //     duration: 1700,
        //     start: moment(this.today).add(12, 'hours').toISOString(),
        // },
        // {
        //     duration: 2200,
        //     start: moment(this.today).add(15, 'hours').toISOString(),
        //     title: 'Click me',
        // },
        // {
        //     background: 'var(--c_secondaryDark)',
        //     duration: 1700,
        //     start: moment(this.today).add(12, 'hours').toISOString(),
        //     title: 'Same Time Entry',
        // },
        // {
        //     duration: 1700,
        //     start: moment(this.today).add(12, 'hours').toISOString(),
        //     title: 'Same Time Entry',
        // },
        // {
        //     duration: 1700,
        //     expandable: true,
        //     start: moment(this.today).add(12, 'hours').toISOString(),
        //     title: 'Same Time Entry',
        // },
        // {
        //     duration: 2500,
        //     icons: ['time', 'rules'],
        //     sizeDay: 'small',
        //     sizeWeek: 'expandable',
        //     start: moment(this.today).add(10, 'hours').add(15, 'minutes').toISOString(),
        //     title: 'Small/Expandable Entry',
        // },
        // {
        //     duration: 1930,
        //     icons: ['signal', 'play'],
        //     sizeDay: 'small',
        //     sizeWeek: 'small',
        //     start: moment(this.today).add(11, 'hours').add(20, 'minutes').toISOString(),
        //     title: 'Small Entry',
        // },
        // {
        //     duration: 1930,
        //     icons: ['signal', 'play'],
        //     sizeDay: 'expandable',
        //     sizeWeek: 'expandable',
        //     start: moment(this.today).add(17, 'hours').add(20, 'minutes').toISOString(),
        //     title: 'Expandable Entry',
        // },
        // {
        //     duration: 60000,
        //     icons: ['signal', 'play'],
        //     start: moment(this.today).add(22, 'hours').add(45, 'minutes').toISOString(),
        //     title: 'Bottom Entry',
        // },
    ];

    public zoomLevel = 2;
    public displayView = 'week';
    public loading = false;
    public preventCreate = _isoTime => false;
}
