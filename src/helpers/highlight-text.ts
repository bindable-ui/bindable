/*
Copyright 2021, Yahoo EdgeCast
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export const highlightSearchText = (search: string, matchAgainst?: string): string => {
    let title = matchAgainst || '';
    title = title
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('&', '&amp;');

    if (search && search.length > 0) {
        // iterate over each part of the search term - have to do the search in two steps: find
        // all matches for all terms and /then/ replace them with highlighted versions,
        // otherwise a search term could find the <span> we added from an earlier search term
        // (e.g. if the user searched for 'm a', the 'a' term would match
        // '<span class="searchTerm">m</span>s added after searching for 'm').
        const repls = [];
        const parts = search.split(' ');
        parts.forEach(part => {
            const repl = function foo(orig) {
                const index = repls.length;
                repls.push(orig);
                return `^^${index}^^`;
            };
            if (part.length) {
                title = title.replace(new RegExp(part, 'ig'), repl);
            }
        });

        // go back and insert the highlight spans
        repls.forEach((orig, i) => {
            title = title.replace(`^^${i}^^`, `<span style="background-color: #226684;">${orig}</span>`);
        });
    }
    return title;
};
