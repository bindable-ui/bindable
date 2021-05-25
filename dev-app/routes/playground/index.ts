import {PLATFORM} from 'aurelia-pal';

export class Playground {
    public basicCols = [
        {
            checkChanged: row => console.log(row),
            colClass: 't30',
            colHeadName: 'checkbox',
            colHeadSelectedChanged: isChecked => {
                this.basicRows.forEach(row => {row.checkbox = isChecked});
            },
            colHeadSelectedVal: false,
            colHeadValue: '',
            view: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check.html'),
            viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/tables/td-contents/c-td-check/c-td-check'),
        },
        {
            colClass: 't270',
            colHeadName: 'name',
            colHeadValue: 'Name',
        },
        {
            colHeadName: 'ship',
            colHeadValue: 'Ship',
        },
        {
            colClass: 't85',
            colHeadName: 'gender',
            colHeadValue: 'Gender',
        },
    ];

    public basicRows: any[] = [
        {
            checkbox: false,
            gender: 'Male',
            name: 'Luke Skywalker',
            ship: 'X-Wing',
        },
        {
            checkbox: false,
            gender: 'Male',
            name: 'Han Solo',
            ship: 'M.Falcon',
        },
        {
            checkbox: false,
            gender: 'Male',
            name: 'Fin',
            ship: 'M. Falcon',
        },
        {
            checkbox: false,
            gender: 'Female',
            name: 'Rey',
            ship: 'M. Falcon',
        },
        {
            checkbox: false,
            gender: 'Male',
            name: 'Yoda',
            ship: 'Any',
        },
    ];
}