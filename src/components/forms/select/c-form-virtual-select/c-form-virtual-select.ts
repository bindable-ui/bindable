/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';

import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';
import {lazyLoadCheck} from '../../../../helpers/lazy-load-check';
import multiIndexSplicer from '../../../../helpers/multi-index-splicer';

import * as styles from './c-form-virtual-select.css.json';

declare let $: any;

@authState
@inject(Element)
export class CFormVirtualSelect {
    @bindable
    public actions;
    @bindable
    public id = generateRandom();
    @bindable
    public errorMsg;
    @bindable
    public warningMsg;
    @bindable
    public isLoadingMore = false;
    @bindable
    public isLoading = false;
    @bindable
    public label;
    @bindable
    public multiple = false;
    @bindable
    public options = [];
    @bindable
    public reorder = false;
    @bindable
    public scrollToLoad = false;
    @bindable
    public search = false;
    @bindable
    public searchText = '';
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public selectValue;
    @bindable
    public simple = false;
    @bindable
    public state;
    @bindable
    public enableSelect2 = false;
    @bindable
    public select2Tags = false;
    @bindable
    public select2AllowClear = false;
    @bindable({defaultBindingMode: bindingMode.twoWay})
    public select2Changed = 0;
    @bindable
    public select2MaxInput = 0;
    @bindable
    public searchPlaceholder = 'Search';
    @bindable
    public tagAdd;

    public optionsData = [];
    public styles = styles;
    public filteredOptions = [];
    public disableDisplay = null;
    public lastClicked = null;

    constructor(public element: Element) {}

    public attached() {
        if (typeof this.multiple !== 'boolean') {
            this.multiple = false;
        }

        if (typeof this.search !== 'boolean') {
            this.search = false;
        }

        if (typeof this.simple !== 'boolean') {
            this.simple = false;
        }

        if (typeof this.isLoading !== 'boolean') {
            this.isLoading = false;
        }

        if (typeof this.isLoadingMore !== 'boolean') {
            this.isLoadingMore = false;
        }

        if (typeof this.reorder !== 'boolean') {
            this.reorder = false;
        }

        this.init();
    }

    public optionsChanged() {
        this.init();
    }

    public init() {
        if (typeof this.options[0] === 'object') {
            this.options.forEach(obj => {
                this.optionsData.push({value: obj.value, text: obj.text, selected: false});
            });
        } else {
            this.options.forEach(val => {
                this.optionsData.push({value: val, text: val, selected: false});
            });
        }

        const selects = document.getElementsByClassName('virtual-select');
        if (selects.length) {
            Array.from(selects).forEach(s => {
                // @ts-ignore
                s.onselectstart = () => false;
            });
        }
    }

    public select(event, opt, idx) {
        const selected = !opt.selected;

        if (this.multiple) {
            if (event.shiftKey && this.lastClicked !== null) {
                let start = this.lastClicked;
                let end = idx;
                if (start > end) {
                    start = end;
                    end = this.lastClicked;
                }
                for (let i = start; i <= end; i += 1) {
                    this.optionsData[i].selected = selected;
                }
            } else {
                opt.selected = selected;
            }
            this.lastClicked = idx;
        } else {
            this.selectNone();
            opt.selected = selected;
        }
    }

    public selectAll() {
        this.optionsData.forEach(o => (o.selected = true));
    }

    public selectNone() {
        this.optionsData.forEach(o => (o.selected = false));
    }

    public removeSelected() {
        const res = this.optionsData.filter(o => o.selected === false);
        this.optionsData = res;
    }

    public selectValueChanged(newVal, oldVal) {
        if (this.selectValue) {
            _.forEach(this.options, option => {
                if (!this.simple && option.value === this.selectValue) {
                    this.disableDisplay = option.text;
                } else if (this.simple && option === this.selectValue) {
                    this.disableDisplay = option;
                }
            });
        }

        if (_.isUndefined(oldVal) || newVal === oldVal) {
            return;
        }

        if (this.actions && this.actions.onChange) {
            this.actions.onChange();
        }
    }

    public onScroll() {
        if (!this.scrollToLoad) {
            return;
        }

        const elem = $(this.element).find(`.${this.styles.select}`);

        if (lazyLoadCheck(elem, 100) && this.actions && this.actions.onScrollBottom) {
            this.actions.onScrollBottom();
        }
    }

    public moveItems(dir) {
        const indexes = [];

        _.forEach(this.selectValue, val => {
            let currentIndex = -1;

            if (this.simple) {
                currentIndex = _.findIndex(this.filteredOptions, option => option === val);
            } else {
                currentIndex = _.findIndex(this.filteredOptions, {value: val});
            }

            if (currentIndex !== -1) {
                indexes.push(currentIndex);
            }
        });

        const selectOptions = $(this.element).find('select > option');
        selectOptions.each((idx, elem) => {
            $(elem).prop('selected', false);
            _.forEach(indexes, index => {
                if (index + dir === idx) {
                    $(elem).prop('selected', true);
                    return false;
                }
                return true;
            });
        });

        this.options = multiIndexSplicer(this.filteredOptions, indexes, dir);
    }
}
