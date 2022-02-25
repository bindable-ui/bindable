export const highlightSearchText = (search: string, matchAgainst?: string): string => {
    let title = matchAgainst || '';
    title = title
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');
    if (search && search.length > 0) {
        // iterate over each part of the search term - have to do the search in two steps: find
        // all matches for all terms and /then/ replace them with highlighted versions,
        // otherwise a search term could find the <span> we added from an earlier search term
        // (e.g. if the user searched for 'm a', the 'a' term would match
        // '<span class="searchTerm">m</span>s added after searching for 'm').
        const repls = [];
        const query = search
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;');
        const parts = query.split(' ');
        parts.forEach(part => {
            function escapeRegex(str: string) {
                return str.replace(/[-\/\\^$*+?.:()|[\]{}]/g, '\\$&');
            }
            const repl = function foo(orig: string) {
                repls.push(orig);
                return `<${orig}>`;
            };
            if (part.length) {
                title = title.replace(new RegExp(escapeRegex(part), 'ig'), repl);
            }
        });

        // go back and insert the highlight spans
        repls.forEach(orig => {
            title = title.replace(`<${orig}>`, `<span style="background-color: #226684;">${orig}</span>`);
        });
    }
    return title;
};
