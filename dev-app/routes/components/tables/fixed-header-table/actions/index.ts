/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FixedHeaderTableActions {
    public fixedHeaderTableCols = [
        {
            _class: 'monospaced',
            colClass: 't150',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            _class: 'monospaced',
            colClass: 't190',
            colHeadName: 'value',
            colHeadValue: 'Value',
        },
        {
            colHeadName: 'description',
            colHeadValue: 'Description',
        },
    ];

    public fixedHeaderTableProperties = [
        {
            default: '',
            description: 'In this object you would define onScrollBottom and any other actions.',
            name: 'actions',
            value: 'object',
        },
    ];

    public testCols = [
        {
            colClass: 't270',
            colHeadName: 'name',
            colHeadValue: 'Name',
            sort: true,
        },
        {
            colHeadName: 'ship',
            colHeadValue: 'Ship',
            sort: true,
        },
        {
            colClass: 't50',
            colHeadName: 'gender',
            colHeadValue: 'Gender',
        },
    ];

    public testData = [
        {
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            _class: 'active',
            _status: 'warning',
            gender: 'Male',
            name: 'Han Solo',
            ship: 'M. Falcon',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'critical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _status: 'neutral',
            gender: 'Female',
            name: 'Rey',
            ship: 'M. Falcon',
        },
    ];

    public colorData = [
        {
            _class: 'bgHealthy',
            gender: 'Male',
            name: 'Luke Skywalkerrr aksjdfkajshd flkajshdf lakjshd flkajhs dflkjah sd',
            ship: 'X-Wing',
        },
        {
            _class: 'bgWarning',
            gender: 'Male',
            name: 'Han Solo',
            ship: 'M. Falcon',
        },
        {
            _class: 'bgCritical',
            gender: 'Male',
            name: 'Fin',
            ship: 'Tie Fighter',
        },
        {
            _class: 'bgInfo',
            gender: 'Female',
            name: 'Rey',
            ship: 'M. Falcon',
        },
    ];

    public tableActions = {
        getColClass: (row, col) => {
            let cls = col._class;

            if (col.colHeadName === 'name') {
                cls = `${cls} ${row._status}`;
            }

            return cls;
        },
    };

    public colorActions = {
        getRowClass: row => {
            let cls = row._class;
            if (row._color && row._color === 'bg-healthy') {
                cls += ' bgHealthy';
            }
            return cls;
        },

        getColClass: (row, col) => {
            let cls = col._class;

            if (col.colHeadName === 'ship') {
                if (row.ship === 'X-Wing') {
                    cls += ' bgInfo';
                }
            }

            return cls;
        },
    };
}
