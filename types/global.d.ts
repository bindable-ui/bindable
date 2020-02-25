import {LoDashStatic} from 'lodash';

// Global lodash
declare global {
    const _: LoDashStatic;
    const lodash: LoDashStatic;
    const bootStrapEnvironment: any;
}

// Global jquery
declare const $: JQueryStatic;
declare const jQuery: JQueryStatic;