/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {StageComponent} from 'aurelia-testing';
import {CTable} from './c-table';

describe('c-table component', () => {
    let component;

    describe('Integration', () => {
        afterEach(() => {
            component.dispose();
        });

        it('is hover', async done => {
            component = StageComponent.withResources()
                .inView('<c-table hover.bind="isHover"></c-table>')
                .boundTo({
                    isHover: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.hover).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is no vertical borders enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-table no-vertical-borders.bind="isNoVerticalBorders"></c-table>')
                .boundTo({
                    isNoVerticalBorders: 1,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.noVerticalBorders).toBe(false);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('is responsive enabled', async done => {
            component = StageComponent.withResources()
                .inView('<c-table responsive.bind="isResponsive"></c-table>')
                .boundTo({
                    isResponsive: 0,
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.responsive).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing with action bindables', async done => {
            const template = `
            <c-table
                actions.bind=colorCellActions
                cols.bind=tableCols
                rows.bind=tableOptions
                sortable="true">
            </c-table><c-table
                actions.bind=rowStatusActions
                cols.bind=tableCols
                rows.bind=tableOptions
                sortable="true">
            </c-table>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    tableCols: [
                        {
                            _class: 'code',
                            _status: 'warning',
                            colClass: 't150',
                            colHeadName: 'name',
                            colHeadValue: 'Name',
                            sort: true,
                        },
                        {
                            _class: 'code',
                            _status: 'warning',
                            colHeadName: 'value',
                            colHeadValue: 'Value',
                        },
                        {
                            _status: 'warning',
                            colHeadName: 'description',
                            colHeadValue: 'Description',
                        },
                        {
                            _class: 'code',
                            colClass: 't120',
                            colHeadName: 'default',
                            colHeadValue: 'Default',
                        },
                        {
                            colClass: 't120',
                            colHeadName: '',
                            colHeadValue: 'XXX Count',
                        },
                    ],
                    tableOptions: [
                        {
                            _class: 'active',
                            _status: 'healthy',
                            default: '/',
                            description: 'Set where the logo will link to.',
                            name: 'href',
                            value: 'Any URL',
                        },
                    ],

                    colorCellActions: {
                        getRowClass: row => {
                            let cls = row._class;
                            if (row._color && row._color === 'bg-healthy') {
                                cls += 'bghealthy';
                            }
                            return cls;
                        },

                        getColClass: (row, col) => {
                            let cls = col._class;

                            if (col.colHeadName === 'name') {
                                if (row.ship === 'X-Wing') {
                                    cls += ' bgInfo';
                                }
                            }

                            return cls;
                        },
                        sortColumn: col => col,
                    },

                    rowStatusActions: {
                        getColClass: (row, col) => {
                            let cls = col._class;

                            if (col.colHeadName === 'name') {
                                cls = `${cls} ${row._status}`;
                            }

                            return cls;
                        },
                        getColValue: (row, col) => {
                            if (col.colHeadValue === 'XXX Count') {
                                return row.xxxx ? row.xxxx.length : 0;
                            }
                            return '';
                        },
                    },
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.sort).not.toBe(undefined);
                const col = {sort: true};
                component.viewModel.columnClick(col);
                component.viewModel.actions = undefined;
                component.viewModel.columnClick(col);
                component.viewModel.columnClick(col);
                col.sort = false;
                component.viewModel.columnClick(col);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('testing with no action bindable', async done => {
            const template = `
            <c-table
                cols.bind=tableCols
                rows.bind=tableOptions
                sortable="true">
            </c-table><c-table
                actions.bind=rowStatusActions
                cols.bind=tableCols
                rows.bind=tableOptions
                sortable="true"></c-table>
        `;
            component = StageComponent.withResources()
                .inView(template)
                .boundTo({
                    tableCols: [
                        {
                            _class: 'code',
                            _status: 'warning',
                            colClass: 't150',
                            colHeadName: 'name',
                            colHeadValue: 'Name',
                            sort: true,
                        },
                        {
                            _class: 'code',
                            _status: 'warning',
                            colHeadName: 'value',
                            colHeadValue: 'Value',
                        },
                        {
                            _status: 'warning',
                            colHeadName: 'description',
                            colHeadValue: 'Description',
                        },
                        {
                            _class: 'code',
                            colClass: 't120',
                            colHeadName: 'default',
                            colHeadValue: 'Default',
                        },
                    ],
                    tableOptions: [
                        {
                            _class: 'active',
                            _status: 'healthy',
                            default: '/',
                            description: 'Set where the logo will link to.',
                            name: 'href',
                            value: 'Any URL',
                        },
                    ],

                    rowStatusActions: {
                        getColClass: (row, col) => {
                            let cls = col._class;

                            if (col.colHeadName === 'name') {
                                cls = `${cls} ${row._status}`;
                            }

                            return cls;
                        },
                    },
                });

            try {
                await bootStrapEnvironment(component);
                expect(component.viewModel.styles.sort).not.toBe(undefined);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('tests rowClicked, but not action handlers', async done => {
            component = StageComponent.withResources().inView('<c-table></c-table>');

            try {
                await bootStrapEnvironment(component);
                const result = component.viewModel.rowClick({}, {});
                expect(result).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('attempts call an action on rowclick using default viewModel', async done => {
            const mockFn = jest.fn();
            component = StageComponent.withResources()
                .inView('<c-table actions.bind="actions"></c-table>')
                .boundTo({
                    actions: {rowClick: mockFn},
                });

            try {
                await bootStrapEnvironment(component);
                const result = component.viewModel.rowClick({}, {});
                expect(mockFn).toHaveBeenCalled();
                expect(result).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        it('attempts call an action on rowclick using custom viewModel', async done => {
            const mockFn = jest.fn();
            component = StageComponent.withResources()
                .inView('<c-table actions.bind="actions"></c-table>')
                .boundTo({
                    actions: {rowClick: mockFn},
                });

            try {
                await bootStrapEnvironment(component);
                const result = component.viewModel.rowClick({}, {view: {}});
                expect(mockFn).not.toHaveBeenCalled();
                expect(result).toBe(true);
                done();
            } catch (e) {
                done.fail(e);
            }
        });

        describe('CSS Classes', () => {
            it('css class: table', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.table).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            }, 50000);

            it('css class: striped', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.striped).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('is striped', async done => {
                component = StageComponent.withResources()
                    .inView('<c-table striped.bind="isStriped"></c-table>')
                    .boundTo({
                        isStriped: 1,
                    });

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.striped).toBe(false);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: hover', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.hover).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: active', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.active).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            it('css class: no-vertical-borders', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles['no-vertical-borders']).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            const existingCellWidthsClasses = [
                't30',
                't40',
                't50',
                't65',
                't75',
                't85',
                't90',
                't105',
                't120',
                't150',
                't175',
                't190',
                't215',
                't240',
                't270',
                't350',
            ];
            existingCellWidthsClasses.forEach(width => {
                it(`css class: ${width}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[width]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            // Row Status Tests
            const existingRowStatusClasses = ['healthy', 'info', 'warning', 'critical', 'neutral'];
            existingRowStatusClasses.forEach(status => {
                it(`css class: ${status}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[status]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            // Font Tests
            const existingFontClasses = ['monospaced'];
            existingFontClasses.forEach(font => {
                it(`css class: ${font}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[font]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            // Background Tests
            const existingBackgroundClasses = ['bgHealthy', 'bgWarning', 'bgCritical', 'bgInfo', 'notAllowed'];
            existingBackgroundClasses.forEach(background => {
                it(`css class: ${background}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[background]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            // Align Right Test
            it('css class: alignRight', async done => {
                component = StageComponent.withResources().inView('<c-table></c-table>');

                try {
                    await bootStrapEnvironment(component);
                    expect(component.viewModel.styles.alignRight).not.toBe(undefined);
                    done();
                } catch (e) {
                    done.fail(e);
                }
            });

            // Sort Tests
            const existingSortClasses = ['sort', 'sortNone', 'sortDesc', 'sortAsc'];
            existingSortClasses.forEach(sort => {
                it(`css class: ${sort}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[sort]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });

            // Drag Tests
            const existingDragClasses = ['drag', 'dragCheck'];
            existingDragClasses.forEach(drag => {
                it(`css class: drag ${drag}`, async done => {
                    component = StageComponent.withResources().inView('<c-table></c-table>');

                    try {
                        await bootStrapEnvironment(component);
                        expect(component.viewModel.styles[drag]).not.toBe(undefined);
                        done();
                    } catch (e) {
                        done.fail(e);
                    }
                });
            });
        });
    });

    describe('Unit', () => {
        describe('#setColSortClass', () => {
            beforeEach(() => {
                component = new CTable();
            });

            it('will return default', () => {
                const col: any = {
                    _class: 'code',
                    _status: 'warning',
                    colClass: 't150',
                    colHeadName: 'name',
                    colHeadValue: 'Name',
                    sort: true,
                };

                component.setColSortClass(col);

                expect(col.sortClass).toBe(component.styles.sortNone);
            });

            it('will do nothing if the col is not sortable', () => {
                const col: any = {
                    _class: 'code',
                    _status: 'warning',
                    colClass: 't150',
                    colHeadName: 'name',
                    colHeadValue: 'Name',
                };

                component.setColSortClass(col);

                expect(col.sortClass).toBeUndefined();
            });

            it('will sort on asc defaultSortCol', () => {
                const col: any = {
                    _class: 'code',
                    _status: 'warning',
                    colClass: 't150',
                    colHeadName: 'name',
                    colHeadValue: 'Name',
                    sort: true,
                };

                component.defaultSortCol = `${col.colHeadName}`;

                component.setColSortClass(col);

                expect(col.sortClass).toBe(component.styles.sortAsc);
            });

            it('will sort on desc defaultSortCol is reversed', () => {
                const col: any = {
                    _class: 'code',
                    _status: 'warning',
                    colClass: 't150',
                    colHeadName: 'name',
                    colHeadValue: 'Name',
                    sort: true,
                };

                component.defaultSortCol = `-${col.colHeadName}`;

                component.setColSortClass(col);

                expect(col.sortClass).toBe(component.styles.sortDesc);
            });

            it('will sort asc still when col reverseSort', () => {
                const col: any = {
                    _class: 'code',
                    _status: 'warning',
                    colClass: 't150',
                    colHeadName: 'name',
                    colHeadValue: 'Name',
                    reverseSort: true,
                    sort: true,
                };

                component.defaultSortCol = `${col.colHeadName}`;

                component.setColSortClass(col);

                expect(col.sortClass).toBe(component.styles.sortAsc);
            });
        });

        describe('#getClasses', () => {
            it('will update with css class names from styles', () => {
                const str = 'bgWarning';

                const classes = component.getClasses(str);

                expect(classes.split(' ')).toHaveLength(1);
                expect(classes).toContain(component.styles.bgWarning);
            });

            it("will keep CSS class names applied that aren't in styles", () => {
                const str = 'bgWarning my-custom-class';

                const classes = component.getClasses(str);

                expect(classes.split(' ')).toHaveLength(2);
                expect(classes).toContain(component.styles.bgWarning);
                expect(classes).toContain('my-custom-class');
            });
        });
    });
});
