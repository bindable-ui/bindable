/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as moment from 'moment';

export class TimelineExample {
    public today = moment().startOf('day').startOf('week').add(4, 'days').toISOString();
    public entries: any = [
        {
            accentColor: '#8E5DB2',
            duration: 6000,
            icons: ['play', 'rules'],
            start: moment(this.today).add(8, 'hours').toISOString(),
            title: 'Dumb and Dumber',
        },
        {
            accentColor: '#359AC5',
            duration: 480,
            icons: ['ad-break'],
            start: moment(this.today).add(9, 'hours').add(40, 'minutes').toISOString(),
            title: 'Ad Break',
        },
        {
            accentColor: '#8E5DB2',
            duration: 6000,
            icons: ['play'],
            start: moment(this.today).add(9, 'hours').add(48, 'minutes').toISOString(),
            title: 'Ace Ventura',
        },
        {
            background: '#111',
            duration: 2500,
            icons: ['time', 'rules'],
            sizeDay: 'small',
            sizeWeek: 'expandable',
            start: moment(this.today).add(8, 'hours').add(15, 'minutes').toISOString(),
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
    ];

    public zoomLevel = 2;
    public displayView = 'day';
    public loading = false;
    public preventCreate = false;

    public actions = {
        getEntries: (start, _end) =>
            _.map(_.times(this.genRandom(5000, 5000), () => {
                const color = this.genHex();

                return {
                    accentColor: color,
                    altTime: ' ',
                    background: color,
                    duration: this.genRandom(600, 5000),
                    title: '',
                    start: moment(start).add(this.genRandom(-5, 23), 'hours').toISOString(),
                };
            })),
    };

    private genRandom = (min, max) => Math.random() * (max - min + 1) + min;
    private hexVals = '0123456789ABCDEF';
    private genHex = () => {
        let color = '';

        for (let i = 0; i < 6; i++) {
            color += this.hexVals[(Math.floor(Math.random() * 16))];
        }

        return `#${color}`;
    }
}
