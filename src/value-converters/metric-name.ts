/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Humanize health metric IDs.
 */

export const METRIC_NAME_MAP = {
    ad: 'Extended Ad Break',
    cc_last_seen_delta: 'Closed Captions Last Seen',
    dropped_since_last: 'Dropped Frames',
    lastmod_delta: 'Time since last update',
    luma: 'Black Video',
    nielsen_last_seen_delta: 'Nielsen Tag Last Seen',
    signal: 'Signal',
    signal_status: 'Signal',
    source_queue_depth: 'Processing Backlog',
    static_audio_start: 'Static Audio',
    static_video_start: 'Static Video',
    vol: 'Loss of Audio',
    waiting: 'Upload Queue',
};

export class MetricNameValueConverter {
    public toView(value) {
        return METRIC_NAME_MAP[value] || value;
    }
}
