/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Humanize health metric values.
 */

const SINGULARS_MAP = {
    frames: 'frame',
    seconds: 'second',
    slices: 'slice',
};

function pluralize(plural, value) {
    return ((value === 1 || value === -1) && SINGULARS_MAP[plural]) || plural;
}

function valueWithUnits(units) {
    return function toDuration(value) {
        return `${value} ${pluralize(units, value)}`;
    };
}

function ccLastSeenDelta(value) {
    return Object.keys(value)
        .map(d => {
            const units = pluralize('seconds', value[d]);
            return `CC${d}: ${value[d]} ${units}`;
        })
        .join(', ');
}

function passthrough(value) {
    return value;
}

const METRIC_RULE_MAP = {
    cc_last_seen_delta: ccLastSeenDelta,
    dropped_since_last: valueWithUnits('frames'),
    lastmod_delta: valueWithUnits('seconds'),
    luma: valueWithUnits('seconds'),
    signal: passthrough,
    signal_status: passthrough,
    source_queue_depth: valueWithUnits('slices'),
    vol: valueWithUnits('seconds'),
    waiting: valueWithUnits('slices'),
};

export class MetricValueValueConverter {
    public toView(value, metricRule) {
        const transform = METRIC_RULE_MAP[metricRule];
        return transform ? transform(value) : value;
    }
}
