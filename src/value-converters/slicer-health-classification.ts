/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Converts slicer health strings to human-friendly strings.
 */

const CLASSIFICATION_MAP = {
    'at-risk': 'warning',
    critical: 'critical',
    healthy: 'healthy',
    inactive: 'neutral',
};

export class SlicerHealthClassificationValueConverter {
    public toView(value) {
        return CLASSIFICATION_MAP[value] || value;
    }
}
