export const highlightSearchPhrases = (searchPhrases: string[], matchAgainst?: string): string => {
    let title = matchAgainst || '';
    title = title
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');
    if (searchPhrases && searchPhrases.length > 0) {
        searchPhrases.forEach(sp => {
            const regEx = new RegExp(sp, 'gi');
            title = title.replace(regEx, '<span style="background-color: #226684;">$&</span>');
        });
    }
    return title;
};
