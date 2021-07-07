/*
Copyright 2021, Yahoo
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export const lazyLoadCheck = (elem, pxFromBottom = 10) => {
    if (!elem) {
        return false;
    }

    const jqElem = $(elem);

    try {
        return jqElem[0].scrollHeight - (jqElem.scrollTop() + jqElem.outerHeight()) < pxFromBottom;
    } catch (err) {
        return null;
    }
};
