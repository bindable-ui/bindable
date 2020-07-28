/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable, bindingMode, inject} from 'aurelia-framework';

import {authState} from '../../../../decorators/auth-state';
import {generateRandom} from '../../../../helpers/generate-random';
import {lazyLoadCheck} from '../../../../helpers/lazy-load-check';
import multiIndexSplicer from '../../../../helpers/multi-index-splicer';

import * as styles from './c-form-select.css.json';

declare let $: any;

@authState
@inject(Element)
export class CFormSelect {
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
    @bindable
    public select2Placeholder = null;
    @bindable
    public select2Changed = 0;
    @bindable
    public select2MaxInput = 0;
    @bindable
    public searchPlaceholder = 'Search';
    @bindable
    public tagAdd;

    public styles = styles;
    public filteredOptions = [];

    private setupSelect2 = _.throttle(
        () => {
            this.cleanupSelect2();

            if (this.isLoading || !this.enableSelect2) {
                return;
            }

            $(`#${this.id}`)
                .select2({
                    allowClear: this.select2AllowClear,
                    maximumInputLength: this.select2MaxInput,
                    placeholder: this.searchPlaceholder,
                    tags: this.select2Tags,
                })
                .on('change', event => {
                    if (event.originalEvent) return; // http://stackoverflow.com/a/34121891/4354884
                    this.select2Changed = Date.now(); // Flag to signal change upstream
                    this.element.dispatchEvent(new Event('change'));

                    // Callback for adding tags
                    // Make sure you add the new tag to the array and select it yourself
                    const isNew = $(this.element).find('[data-select2-tag="true"]');
                    if (isNew.length && this.tagAdd && _.isFunction(this.tagAdd)) {
                        const tag = isNew.val();
                        this.tagAdd({tag});
                        $(isNew).remove();
                    }
                })
                .on('select2:open', () => {
                    if (this.select2MaxInput > 0) {
                        // Workaround to limit like an input box
                        $('.select2-search__field').attr('maxlength', this.select2MaxInput);
                    }
                    $('.select2-search__field').attr('placeholder', this.searchPlaceholder);
                })
                .on('select2:closing', () => {
                    $('.select2-search__field').attr('placeholder', '');
                })
                .on('select2:close', () => {
                    $(':focus').blur();
                });
        },
        500,
        {leading: false, trailing: true},
    );

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

        this.setupSelect2();
    }

    public detached() {
        this.cleanupSelect2();
    }

    public optionsChanged() {
        this.filteredOptions = _.cloneDeep(this.options);
    }

    public selectValueChanged() {
        if (this.actions && this.actions.onChange) {
            this.actions.onChange();
        }
    }

    public isLoadingChanged() {
        this.setupSelect2();
    }

    public enableSelect2Changed() {
        this.setupSelect2();
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

    private cleanupSelect2() {
        if ($(`#${this.id}`).hasClass('select2-hidden-accessible')) {
            $(`#${this.id}`).select2('destroy');
            $(`#${this.id}`).off('select2:select');
        }
    }
}
