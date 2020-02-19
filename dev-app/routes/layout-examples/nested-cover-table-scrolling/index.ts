/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class NestedCoverTableScrolling {
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
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _status: 'critical',
        },
        {
            name: 'Ray',
            ship: 'M. Falcon',
            gender: 'Female',
            _status: 'neutral',
        },
    ];

    public colorData = [
        {
            name: 'Luke Skywalkerrr aksjdfkajshd flkajshdf lakjshd flkajhs dflkjah sd',
            ship: 'X-Wing',
            gender: 'Male',
            _class: 'bgHealthy',
        },
        {
            name: 'Han Solo',
            ship: 'M. Falcon',
            gender: 'Male',
            _class: 'bgWarning',
        },
        {
            name: 'Fin',
            ship: 'Tie Fighter',
            gender: 'Male',
            _class: 'bgCritical',
        },
        {
            name: 'Ray',
            ship: 'M. Falcon',
            gender: 'Female',
            _class: 'bgInfo',
        },
    ];

    public tableActions = {
        // getRowClass: row => {
        //     let cls = row._class;
        //     if (row._color && row._color === 'bg-healthy') {
        //         cls += ' bg-healthy';
        //     }
        //     return cls;
        // },

        getColClass: (row, col) => {
            let cls = col._class;

            if (col.colHeadName === 'name') {
                cls = `${cls} ${row._status}`;

                // if (row._status === 'healthy') {
                //     cls += ' healthy';
                // } else if (row._status === 'warning') {
                //     cls += ' warning';
                // } else if (row._status === 'critical') {
                //     cls += ' critical';
                // } else if (row._status === 'neutral') {
                //     cls += ' neutral';
                // }
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
