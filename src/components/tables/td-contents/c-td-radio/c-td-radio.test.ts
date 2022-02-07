import {StageComponent} from 'aurelia-testing';

describe('c-td-radio component', () => {
    let component;
    let viewModel;
    const model = {
        col: {},
        row: 0,
        value: 1,
    };

    beforeEach(async done => {
        component = StageComponent.withResources().inView('<c-td-radio></c-td-radio>');

        await bootStrapEnvironment(component).then(() => {
            viewModel = component.viewModel;
            done();
        });
    });

    describe('Integration', () => {
        // Base Test
        it('testing for radio component', async done => {
            expect(document.querySelector('c-form-radio')).toBeDefined();
            done();
        });

        // activate with model
        it('tests activate', async done => {
            viewModel.activate(model);
            expect(viewModel.col).toStrictEqual({});
            expect(viewModel.row).toBe(0);
            done();
        });

        // activate value change with checkChanged
        it('tests activate valueChanged with col.checkChanged', async done => {
            const mockFn = jest.fn();
            viewModel.activate({
                col: {
                    checkChanged: mockFn,
                },
                row: {},
            });
            viewModel.actions.onChange();
            expect(mockFn).toHaveBeenCalled();
            done();
        });

        // activate value change without checkChanged
        it('tests activate valueChanged with col.checkChanged', async done => {
            const mockFn = jest.fn();
            viewModel.activate({
                col: {},
                row: {},
            });
            viewModel.actions.onChange();
            expect(mockFn).toHaveBeenCalledTimes(0);
            done();
        });

        afterEach(() => {
            component.dispose();
        });
    });
});
