/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';

import {authState} from '../../../../decorators/auth-state';

import {lazyLoadCheck} from '../../../../helpers/lazy-load-check';
import multiIndexSplicer from '../../../../helpers/multi-index-splicer';

import * as styles from './c-form-select.css.json';

@authState
@inject(Element)
export class CFormSelect {
    @bindable
    public actions;
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

    public styles = styles;
    public filteredOptions = [];

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
    }

    public optionsChanged() {
        this.filteredOptions = _.cloneDeep(this.options);
    }

    public selectValueChanged() {
        if (this.actions && this.actions.onChange) {
            this.actions.onChange();
        }
    }

    public filterSearch(searchText) {
        this.selectValue = [];
        this.filteredOptions = [];

        const regex = new RegExp(searchText, 'i');

        _.forEach(this.options, option => {
            if (!this.simple && regex.test(option.text)) {
                this.filteredOptions.push(option);
            } else if (this.simple && regex.test(option)) {
                this.filteredOptions.push(option);
            }
        });
    }

    public searchSelect(textValue) {
        // do backend search if actions.onSearch availale otherwise do simple filter search.
        if (this.actions && this.actions.onSearch) {
            this.actions.onSearch(textValue);
        } else {
            this.filterSearch(textValue);
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
