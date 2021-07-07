/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FilterValueConverter {
    public static transform(array, filterKeyMap, filterByKey, dropUndefined = true) {
        if (!array || !array.filter) {
            return array;
        }
        return array.filter(d => {
            const itBe = filterKeyMap[d[filterByKey]];
            return itBe !== undefined ? itBe : !dropUndefined;
        });
    }

    public toView(array, filterKeyMap, filterByKey, dropUndefined = true) {
        return FilterValueConverter.transform(array, filterKeyMap, filterByKey, dropUndefined);
    }
}

/**
 * This will filter an array based on a function.  Gives greater control to the developer.
 *
 * The example below has an array that contains an object.
 *
 * Example usage (viewmodel):
 *
 * var usersList = [
 *  {id: '1', username: 'cam'},
 *  {id: '2', username: 'dave'}];
 *
 * this.usernameSearch = '';
 *
 * filterByUserName(searchValue, recordValue) {
 *       const itemValue = recordValue.username;
 *       if (!searchValue || !itemValue) {
 *           return false;
 *       }
 *       return itemValue.toLowerCase().match(searchValue.toLowerCase());
 *   }
 *
 * Example usage (view):
 *      <input type="text" value.bind="usernameSearch">
 *      <ul with.bind="usersList | filterFunction:usernameSearch:filterByUserName">
 *          <li repeat.for="item of $this" click.delegate="handleClick(item)">${item.username}</li>
 *      </ul>
 */
export class FilterFunctionValueConverter {
    public toView(array, searchValue, filterFunction) {
        return array.filter(item => {
            const bool = searchValue && searchValue.length > 0 ? filterFunction(searchValue, item) : true;
            return bool;
        });
    }
}
