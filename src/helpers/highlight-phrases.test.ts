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

    it('should should not highlight span tags', () => {
        const searchPhrases = ['pan', 'span', 'color'];
        const desc = 'Peter Pan';
        const highlighted = highlightSearchPhrases(searchPhrases, desc);
        expect(highlighted).toEqual('Peter <span style="background-color: #226684;">Pan</span>');
        const empty = highlightSearchPhrases(searchPhrases);
        expect(empty).toEqual('');
    });

    it('should escape html characters', () => {
        const searchPhrases = ['dumb', 'and'];
        const desc = 'Dumb & Dumber <HD>';
        const highlighted = highlightSearchPhrases(searchPhrases, desc);
        expect(highlighted).toEqual(
            '<span style="background-color: #226684;">Dumb</span> ' +
                '&amp; ' +
                '<span style="background-color: #226684;">Dumb</span>er &lt;HD&gt;',
        );
        const empty = highlightSearchPhrases(searchPhrases);
        expect(empty).toEqual('');
    });
});
