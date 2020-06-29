/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

// Setup jQuery
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import * as $ from 'jquery';

$.fn.extend({
    datetimepicker,
});

import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

// Helpers
import {copyToClipboard} from './helpers/copy-to-clipboard';
import {generateRandom} from './helpers/generate-random';
import {lazyLoadCheck} from './helpers/lazy-load-check';
import {LocalStorageHelper} from './helpers/local-storage';
import multiIndexSplicer from './helpers/multi-index-splicer';
import sortDropData from './helpers/sort-drop-data';
import sorting from './helpers/sorting';

// Misc
import {SharedNav} from './components/navs/c-nav-vertical-sliding/shared-nav-service';
import {CPopoverService, ICPopover} from './components/popover/c-popover/c-popover-service';
import {CToastsService} from './components/toasts/c-toasts/c-toasts-service';
import {dirtyCheckPrompt} from './decorators/dirty-check-prompt/index';

// Value Converters
import {TransformEntriesValueConverter} from './components/timeline/c-timeline/c-time-entries-value-converter';
import {AsyncBindingBehavior} from './value-converters/async-binding';
import {BooleanYesNoValueConverter} from './value-converters/boolean-yes-no';
import {CapitalizeValueConverter} from './value-converters/capitalize';
import {CountValueConverter} from './value-converters/count';
import {CSVToArrayValueConverter} from './value-converters/csv-to-array';
import {
    AltTimestampToDMYValueConverter,
    DateToMsValueConverter,
    IsoToDayWeekValueConverter,
    IsoToFormattedMomentValueConverter,
    MonthYearValueConverter,
    MsToFormattedMomentValueConverter,
    MsToHmsValueConverter,
    SecondsToHmsValueConverter,
    StandardDateValueConverter,
    StandardTimeValueConverter,
    TimestampToDMYValueConverter,
    TimezoneTimeToStandardDateTimeMSValueConverter,
} from './value-converters/datetime';
import {DefaultValueValueConverter} from './value-converters/default-value';
import {EmptyNumberNullValueConverter} from './value-converters/empty-number-null';
import {EmptyStringNullValueConverter} from './value-converters/empty-string-null';
import {FilterFunctionValueConverter, FilterValueConverter} from './value-converters/filter';
import {KeysValueConverter} from './value-converters/keys';
import {MetaValueConverter} from './value-converters/meta';
import {METRIC_NAME_MAP, MetricNameValueConverter} from './value-converters/metric-name-chart';
import {MetricValueValueConverter} from './value-converters/metric-value';
import {MillisecToDateValueConverter} from './value-converters/millisec-to-date';
import {MillisecToDurationValueConverter} from './value-converters/millisec-to-duration';
import {MoneyFormatValueConverter} from './value-converters/money-format';
import {NotApplicableValueConverter} from './value-converters/not-applicable';
import {ObjectKeysValueConverter} from './value-converters/object-keys';
import {PagerValueConverter} from './value-converters/pager';
import {PluralizeValueConverter} from './value-converters/pluralize';
import {EscapeRegexValueConverter} from './value-converters/regex-escape';
import {SanitizeValueConverter} from './value-converters/sanitize';
import {SlicerHealthValueConverter} from './value-converters/slicer-health';
import {SlicerHealthClassificationValueConverter} from './value-converters/slicer-health-classification';
import {SortValueConverter} from './value-converters/sort';
import {StringToNumberValueConverter} from './value-converters/string-to-number';
import {ThClassForValueConverter} from './value-converters/th-class-for';
import {CsortValueConverter} from './value-converters/vsort';

// Interfaces
import {CFormAddRemoveActions} from './components/forms/select/c-form-add-remove/c-form-add-remove-interfaces';
import {
    // IDropzoneActions,
    IVNavSliderNavDropzone,
    IVNavSliderNavList,
    IVNavSliderObj,
    IVNavSliderPageDropzoneList,
    IVNavSliderPageList,
} from './components/navs/c-nav-vertical-sliding/c-nav-vertical-sliding-interfaces';
import {CTableActions, CTableCol} from './components/tables/c-table/c-table-interfaces';
import {CTimeline, ZOOM_LEVELS} from './components/timeline/c-timeline/c-timeline';
import {ITimeEntryBasic, ITimelineActions} from './components/timeline/c-timeline/c-timeline-interfaces';
import {CTipActions} from './components/tip/c-tip/c-tip-interfaces';
import {IDragOptions} from './custom-attributes/drag-draggable';
import {IDropzoneActions} from './custom-attributes/drag-dropzone';

// Styles
import './global-styles/global.css';
import './global-styles/reset.css';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        // Custom Attributes
        PLATFORM.moduleName('./custom-attributes/drag-draggable'),
        PLATFORM.moduleName('./custom-attributes/drag-dropzone'),

        // Value Converters
        PLATFORM.moduleName('./value-converters/boolean-yes-no'),
        PLATFORM.moduleName('./value-converters/capitalize'),
        PLATFORM.moduleName('./value-converters/count'),
        PLATFORM.moduleName('./value-converters/csv-to-array'),
        PLATFORM.moduleName('./value-converters/datetime'),
        PLATFORM.moduleName('./value-converters/default-value'),
        PLATFORM.moduleName('./value-converters/empty-number-null'),
        PLATFORM.moduleName('./value-converters/empty-string-null'),
        PLATFORM.moduleName('./value-converters/filter'),
        PLATFORM.moduleName('./value-converters/keys'),
        PLATFORM.moduleName('./value-converters/meta'),
        PLATFORM.moduleName('./value-converters/metric-name-chart'),
        PLATFORM.moduleName('./value-converters/metric-name'),
        PLATFORM.moduleName('./value-converters/metric-value'),
        PLATFORM.moduleName('./value-converters/millisec-to-date'),
        PLATFORM.moduleName('./value-converters/millisec-to-duration'),
        PLATFORM.moduleName('./value-converters/money-format'),
        PLATFORM.moduleName('./value-converters/not-applicable'),
        PLATFORM.moduleName('./value-converters/object-keys'),
        PLATFORM.moduleName('./value-converters/pager'),
        PLATFORM.moduleName('./value-converters/pluralize'),
        PLATFORM.moduleName('./value-converters/regex-escape'),
        PLATFORM.moduleName('./value-converters/sanitize'),
        PLATFORM.moduleName('./value-converters/slicer-health-classification'),
        PLATFORM.moduleName('./value-converters/slicer-health'),
        PLATFORM.moduleName('./value-converters/sort'),
        PLATFORM.moduleName('./value-converters/string-to-number'),
        PLATFORM.moduleName('./value-converters/th-class-for'),
        PLATFORM.moduleName('./value-converters/vsort'),
        PLATFORM.moduleName('./value-converters/async-binding'),
        PLATFORM.moduleName('./components/timeline/c-timeline/c-time-entries-value-converter'),

        // Components
        PLATFORM.moduleName('./components/copy/c-copy/c-copy'),
        PLATFORM.moduleName('./components/buttons/c-button/c-button'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/checkbox/c-checkbox-input/c-checkbox-input'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/checkbox/c-checkbox-label/c-checkbox-label'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/checkbox/c-form-checkbox/c-form-checkbox'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/radio/c-form-radio/c-form-radio'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/radio/c-radio-input/c-radio-input'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/radio/c-radio-label/c-radio-label'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/toggle/c-form-toggle/c-form-toggle'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/toggle/c-toggle-input/c-toggle-input'),
        PLATFORM.moduleName('./components/forms/checkbox-radio/toggle/c-toggle-label/c-toggle-label'),
        PLATFORM.moduleName(
            './components/forms/checkbox-radio/c-form-checkbox-radio-container/c-form-checkbox-radio-container',
        ),
        PLATFORM.moduleName('./components/forms/date/c-form-date/c-form-date'),
        PLATFORM.moduleName('./components/forms/file/c-file-input/c-file-input'),
        PLATFORM.moduleName('./components/forms/file/c-form-file/c-form-file'),
        PLATFORM.moduleName('./components/forms/select/c-form-add-remove/c-form-add-remove'),
        PLATFORM.moduleName('./components/forms/select/c-form-select/c-form-select'),
        PLATFORM.moduleName('./components/forms/slider/c-form-slider/c-form-slider'),
        PLATFORM.moduleName('./components/forms/slider/c-slider/c-slider'),
        PLATFORM.moduleName('./components/forms/text/c-form-text/c-form-text'),
        PLATFORM.moduleName('./components/forms/text/c-text-input/c-text-input'),
        PLATFORM.moduleName('./components/forms/textarea/c-form-textarea/c-form-textarea'),
        PLATFORM.moduleName('./components/forms/textarea/c-textarea-input/c-textarea-input'),
        PLATFORM.moduleName('./components/forms/c-disabled/c-disabled'),
        PLATFORM.moduleName('./components/forms/c-form-error/c-form-error'),
        PLATFORM.moduleName('./components/forms/c-form-warning/c-form-warning'),
        PLATFORM.moduleName('./components/forms/c-form-info/c-form-info'),
        PLATFORM.moduleName('./components/forms/c-form-image/c-form-image'),
        PLATFORM.moduleName('./components/forms/c-label/c-label'),
        PLATFORM.moduleName('./components/modal/c-modal/c-modal'),
        PLATFORM.moduleName('./components/navs/c-nav-horizontal-item/c-nav-horizontal-item'),
        PLATFORM.moduleName('./components/navs/c-nav-horizontal/c-nav-horizontal'),
        PLATFORM.moduleName('./components/navs/c-nav-vertical-item/c-nav-vertical-item'),
        PLATFORM.moduleName('./components/navs/c-nav-vertical-sliding/c-nav-vertical-sliding'),
        PLATFORM.moduleName('./components/navs/c-nav-vertical/c-nav-vertical'),
        PLATFORM.moduleName('./components/notifications/c-notification/c-notification'),
        PLATFORM.moduleName('./components/pills/c-pill/c-pill'),
        PLATFORM.moduleName('./components/popover/c-popover/c-popover'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-toggle/c-td-toggle'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-button/c-td-button'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-action/c-td-action'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-check/c-td-check'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-drag-check/c-td-drag-check'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-image/c-td-image'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-pill/c-td-pill'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-text-input/c-td-text-input'),
        PLATFORM.moduleName('./components/tables/td-contents/c-td-truncate/c-td-truncate'),
        PLATFORM.moduleName('./components/tables/c-table-fixed-header/c-table-fixed-header'),
        PLATFORM.moduleName('./components/tables/c-table/c-table'),
        PLATFORM.moduleName('./components/tables/c-td/c-td'),
        PLATFORM.moduleName('./components/tile/c-tile/c-tile'),
        PLATFORM.moduleName('./components/timeline/c-time-entry/c-time-entry'),
        PLATFORM.moduleName('./components/timeline/c-timeline-block/c-timeline-block'),
        PLATFORM.moduleName('./components/timeline/c-timeline-container/c-timeline-container'),
        PLATFORM.moduleName('./components/timeline/c-timeline-week-container/c-timeline-week-container'),
        PLATFORM.moduleName('./components/timeline/c-timeline-month-container/c-timeline-month-container'),
        PLATFORM.moduleName('./components/timeline/c-timeline-month-item/c-timeline-month-item'),
        PLATFORM.moduleName('./components/timeline/c-timeline/c-timeline'),
        PLATFORM.moduleName('./components/tip/c-tip/c-tip'),
        PLATFORM.moduleName('./components/toasts/c-toasts/c-toasts'),
        PLATFORM.moduleName('./components/type/code-sample/c-code-sample'),
        PLATFORM.moduleName('./components/type/code/c-code'),
        PLATFORM.moduleName('./components/type/h1/c-h1'),
        PLATFORM.moduleName('./components/type/h2/c-h2'),
        PLATFORM.moduleName('./components/type/h3/c-h3'),
        PLATFORM.moduleName('./components/type/h4/c-h4'),
        PLATFORM.moduleName('./components/type/h5/c-h5'),
        PLATFORM.moduleName('./components/type/list/c-list-container/c-list-container'),
        PLATFORM.moduleName('./components/type/list/c-list-item/c-list-item'),
        PLATFORM.moduleName('./components/type/list/c-list/c-list'),
        PLATFORM.moduleName('./components/type/p/c-p'),
        PLATFORM.moduleName('./components/utilities/c-divider/c-divider'),
        PLATFORM.moduleName('./components/utilities/c-drag-handle/c-drag-handle'),
        PLATFORM.moduleName('./components/utilities/c-label-box/c-label-box'),
        PLATFORM.moduleName('./components/utilities/c-spinner/c-spinner'),
        PLATFORM.moduleName('./components/utilities/c-status/c-status'),

        // Elements
        PLATFORM.moduleName('./elements/delete-confirm/e-delete-confirm/e-delete-confirm'),

        // Layouts
        PLATFORM.moduleName('./layouts/l-box/l-box'),
        PLATFORM.moduleName('./layouts/l-box-link/l-box-link'),
        PLATFORM.moduleName('./layouts/l-center/l-center'),
        PLATFORM.moduleName('./layouts/l-cluster/l-cluster'),
        PLATFORM.moduleName('./layouts/l-cover/l-cover'),
        PLATFORM.moduleName('./layouts/l-grid/l-grid'),
        PLATFORM.moduleName('./layouts/l-icon/l-icon'),
        PLATFORM.moduleName('./layouts/l-sidebar/l-sidebar'),
        PLATFORM.moduleName('./layouts/l-stack/l-stack'),
        PLATFORM.moduleName('./layouts/l-switcher/l-switcher'),
    ]);
}

// Helpers
export {copyToClipboard, generateRandom, lazyLoadCheck, LocalStorageHelper, multiIndexSplicer, sorting, sortDropData};

// Misc
export {SharedNav, CToastsService, dirtyCheckPrompt, CPopoverService, ZOOM_LEVELS};

// Value converters
export {
    BooleanYesNoValueConverter,
    CapitalizeValueConverter,
    CountValueConverter,
    CSVToArrayValueConverter,
    AltTimestampToDMYValueConverter,
    DateToMsValueConverter,
    IsoToDayWeekValueConverter,
    IsoToFormattedMomentValueConverter,
    MonthYearValueConverter,
    MsToFormattedMomentValueConverter,
    MsToHmsValueConverter,
    SecondsToHmsValueConverter,
    StandardDateValueConverter,
    StandardTimeValueConverter,
    TimestampToDMYValueConverter,
    TimezoneTimeToStandardDateTimeMSValueConverter,
    DefaultValueValueConverter,
    EmptyNumberNullValueConverter,
    EmptyStringNullValueConverter,
    FilterFunctionValueConverter,
    FilterValueConverter,
    KeysValueConverter,
    MetaValueConverter,
    METRIC_NAME_MAP,
    MetricNameValueConverter,
    MetricValueValueConverter,
    MillisecToDateValueConverter,
    MillisecToDurationValueConverter,
    MoneyFormatValueConverter,
    NotApplicableValueConverter,
    ObjectKeysValueConverter,
    PagerValueConverter,
    PluralizeValueConverter,
    EscapeRegexValueConverter,
    SanitizeValueConverter,
    SlicerHealthClassificationValueConverter,
    SlicerHealthValueConverter,
    SortValueConverter,
    StringToNumberValueConverter,
    ThClassForValueConverter,
    CsortValueConverter,
    AsyncBindingBehavior,
    TransformEntriesValueConverter,
};

// Interfaces
export {
    IDragOptions,
    IDropzoneActions,
    ITimelineActions,
    ITimeEntryBasic,
    IVNavSliderNavDropzone,
    IVNavSliderNavList,
    IVNavSliderObj,
    IVNavSliderPageDropzoneList,
    IVNavSliderPageList,
    CFormAddRemoveActions,
    CTableActions,
    CTableCol,
    CTimeline,
    CTipActions,
    ICPopover,
};
