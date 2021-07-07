/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {PLATFORM} from 'aurelia-pal';

export class Body {
    public testCols = [
        {
            _class: 'dragCheck',
            colClass: 't30',
            colHeadName: 'dragCheck',
            colHeadSelectedChanged: () => null,
            colHeadValue: 'Select',
            view: PLATFORM.moduleName(
                '@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check.html',
            ),
            viewModel: PLATFORM.moduleName(
                '@bindable-ui/bindable/components/tables/td-contents/c-td-drag-check/c-td-drag-check',
            ),
        },
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
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            _status: 'healthy',
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
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


    public controller;

    public activate(model) {
        this.controller = model.controller;
    }
}
