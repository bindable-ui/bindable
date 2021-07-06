/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

/*
Examples:
source${sourceCount | pluralize}
${num} Octop${num | pluralize:'i':'us'} ha${num | pluralize:'ve':'s'} ${8 * num} leg${(8 * num) | pluralize}
1 Octopus has 8 legs
3 Octopi have 24 legs
 */
export class PluralizeValueConverter {
    public toView(value, plural = 's', singular = '') {
        if (value === 1) {
            return singular;
        }
        return plural;
    }
}
