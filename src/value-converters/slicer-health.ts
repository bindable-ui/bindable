/*
Copyright 2019, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/**
 * Converts slicer health strings to human-friendly strings.
 */
export class SlicerHealthValueConverter {
    public toView(value) {
        const values = {
            'at-risk': 'At risk',
            critical: 'Critical',
            healthy: 'Healthy',
            inactive: 'Inactive',
            neutral: 'Neutral',
            warning: 'Warning',
        };
        return values[value];
    }
}
