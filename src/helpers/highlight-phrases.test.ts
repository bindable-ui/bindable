import {highlightSearchPhrases} from './highlight-phrases';

describe('Highlight Search Phrases Helper', () => {
    it('should highlight selected search phrases', () => {
        const searchPhrases = ['dumb', 'and'];
        const desc = 'Dumb and Dumber';
        const highlighted = highlightSearchPhrases(searchPhrases, desc);
        expect(highlighted).toEqual(
            '<span style="background-color: #226684;">Dumb</span> ' +
                '<span style="background-color: #226684;">and</span> ' +
                '<span style="background-color: #226684;">Dumb</span>er',
        );
        const empty = highlightSearchPhrases(searchPhrases);
        expect(empty).toEqual('');
    });
});
