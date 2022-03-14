import {CTableCol} from 'components/tables/c-table/c-table-interfaces';
import {CTdRadio} from './c-td-radio';

describe('c-td-radio component', () => {
    const test_col = {} as CTableCol;
    const test_row = {};
    let component;

    beforeEach(() => {
        component = new CTdRadio();
        component.activate({
            col: test_col,
            row: test_row,
        });
    });

    it('activates successfully', () => {
        expect(component.col).toStrictEqual(test_col);
        expect(component.row).toBe(test_row);
    });

    describe('.onChange', () => {
        it('calls radioChanged when defined', () => {
            component.col.radioChanged = jest.fn();
            component.onChange();
            expect(component.col.radioChanged).toHaveBeenCalledTimes(1);
        });
        it('does not call radioChanged when undefined', () => {
            component.col.radioChanged = undefined;
            component.onChange();
        });
    });

    describe('.state', () => {
        it('returns value of `${colHeadName}State`', () => {
            component.col.colHeadName = 'test';
            component.row.testState = 'disabled';
            const result = component.state;
            expect(result).toBe('disabled');
        });
    });
});
