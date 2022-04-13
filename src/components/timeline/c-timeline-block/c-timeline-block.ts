/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {bindable} from 'aurelia-framework';

import * as styles from './c-timeline-block.css.json';

export class CTimelineBlock {
    @bindable
    public time: string;

    public styles = styles;
}
