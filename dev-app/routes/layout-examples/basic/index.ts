/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import * as moment from 'moment';

export class BasicLayout {
    public today = moment().startOf('day').startOf('week').add(3, 'days').toISOString();

    public entries = [
        {
            background: 'var(--c_subOneDark)',
            color: 'var(--c_white)',
            duration: 5500,
            start: moment(this.today).add(8, 'hours').toISOString(),
            title: 'Overlap',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(2, 'minutes').toISOString(),
            title: 'Overlap 1',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(4, 'minutes').toISOString(),
            title: 'Overlap 2',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(8, 'minutes').toISOString(),
            title: 'Overlap 3',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(16, 'minutes').toISOString(),
            title: 'Overlap 4',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(20, 'minutes').toISOString(),
            title: 'Overlap 5',
        },
        {
            duration: 1000,
            start: moment(this.today).add(8, 'hours').add(37, 'minutes').toISOString(),
            title: 'Overlap 6',
        },
        {
            duration: 1700,
            small: true,
            start: moment(this.today).add(9, 'hours').toISOString(),
        },
        {
            duration: 1200,
            start: moment(this.today).add(9, 'hours').toISOString(),
            title: 'Overlap',
        },
        {
            duration: 1700,
            expandable: true,
            start: moment(this.today).add(9, 'hours').toISOString(),
        },
        {
            duration: 2500,
            expandable: true,
            icons: ['time', 'rules'],
            start: moment(this.today).add(10, 'hours').add(15, 'minutes').toISOString(),
            title: 'Should collapse',
        },
        {
            duration: 1930,
            icons: ['signal', 'play'],
            small: true,
            start: moment(this.today).add(11, 'hours').add(20, 'minutes').toISOString(),
            title: 'Should be small',
        },
        {
            duration: 60000,
            icons: ['signal', 'play'],
            start: moment(this.today).add(22, 'hours').add(45, 'minutes').toISOString(),
            title: 'Should be rolled-over',
        },
    ];
}
