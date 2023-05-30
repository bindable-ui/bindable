export function highlightSearchPhrases(searchPhrases: string[], desc: string = ''): string {
    if (desc === '') {
        return '';
    }

    const openTag = '<span style="background-color: #226684;">';
    const closeTag = '</span>';

    let highlightedDesc = _.escape(desc);

    searchPhrases.forEach(phrase => {
        const regex = new RegExp(`(${phrase})(?![^<]*>|[^<>]*<\/)`, 'gi');
        highlightedDesc = highlightedDesc.replace(regex, `${openTag}$1${closeTag}`);
    });

    return highlightedDesc;
}
