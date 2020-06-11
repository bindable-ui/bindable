const beautify = require('js-beautify');
const _ = require('lodash');
const fs = require('fs');

const defaults = {
    "indent_size": 4,
    "indent_char": " ",
    "end_with_newline": true,
    "preserve_newlines": true,
    "max_preserve_newlines": 2,
    "brace_style": "expand",
    "wrap_line_length": 120,
    "wrap-attributes": "force-expand-multiline",
    "content_unformatted": ["pre", "code", "c-code", "c-code-sample", "style"],
    "unformatted": ["code", "c-code", "c-code-sample", "inline"],
};

const cssCurlyRegex = / \{$/gm;
const cssNestedRegex = />/gm;

const nestedTagRegex = /(?<!code|pre)>([^< \n=])/gm;
const nestedTagEndRegex = /([^> \n=])<(?!.*(pre|code))/gm;
const classInternalRegex = / +class="[^"]*"/gm;
const cssInternalRegex = / +css="[^"]*"/gm;
const interpolatedRegex = /(\${[^}]*})/gm;

const returnNumSpaces = numOfSpaces => {
    let spaces = '';

    _.times(numOfSpaces, () => {
        spaces += ' ';
    });

    return spaces;
};

const formatClasses = (classes, firstIndent) => {
    let classesStr = `class="\n`;
    const indent = firstIndent + defaults.indent_size;

    _.forEach(classes, className => {
        classesStr = `${classesStr}${returnNumSpaces(indent)}${className}\n`
    });

    classesStr = `${classesStr}${returnNumSpaces(firstIndent)}"`

    return classesStr;
};

const formatStyles = (styles, firstIndent) => {
    let stylesStr = `css="\n`;
    const indent = firstIndent + defaults.indent_size;

    _.forEach(styles, styleName => {
        stylesStr = `${stylesStr}${returnNumSpaces(indent)}${styleName.trim()};\n`
    });

    stylesStr = `${stylesStr}${returnNumSpaces(firstIndent)}"`

    return stylesStr;
};

const prettyHTML = str => {
    var opts = { ...defaults };

    str = beautify.html(str, opts) // Run it through js-beautify
        .replace(nestedTagRegex, '>\n$1') // If a tag has something in it, it should be broken on it's own line
        .replace(nestedTagEndRegex, '$1\n<'); // Closing tag on seperate line

    let classMatches = str.match(classInternalRegex);
    let cssMatches = str.match(cssInternalRegex);

    // Check if class attr only has one name in it
    _.forEach(classMatches, match => {
        let matchClone = match;

        const styleMatches = match.match(/"[^"]*"/gm);

        if (!styleMatches) {
            return;
        }

        const style = styleMatches[0].replace(/"/gm, '');

        const classes = style
            .replace(/ +/gm, ' ')
            .replace(/\n/gm, '')
            .trim()
            .split(interpolatedRegex)
            .map((part, i) => (i % 2 ? part.trim() : part.replace(/ +/g, ' ').trim()))
            .filter(className => className.length > 0);

        // Remove empty class attr
        if (classes.length === 0) {
            str = str.replace(match, '');
            return;
        }

        if (classes.length > 1) {
            matchClone = match.replace(/class/gm, 'nullattr class')
            str = str.replace(match, matchClone);
        } else {
            matchClone = match.replace(styleMatches, `"${classes[0]}"`);
            str = str.replace(match, matchClone);
        }
    });

    // Check if css attr only has one name in it
    _.forEach(cssMatches, match => {
        let matchClone = match;

        const styleMatches = match.match(/"[^"]*"/gm);

        if (!styleMatches) {
            return;
        }

        const style = styleMatches[0].replace(/"/gm, '');

        const styles = style
            .replace(/ +/gm, ' ')
            .replace(/\n/gm, '')
            .split(';')
            .map(styleStr => styleStr.trim())
            .filter(styleStr => styleStr.length > 0);

        // Remove empty style attr
        if (styles.length === 0) {
            str = str.replace(match, '');
            return;
        }

        if (styles.length > 1) {
            matchClone = match.replace(/css/gm, 'nullattr css')
            str = str.replace(match, matchClone);
        } else {
            matchClone = match.replace(styleMatches, `"${styles[0]}"`);
            str = str.replace(match, matchClone);
        }
    });

    str = beautify.html(str, opts);

    classMatches = str.match(classInternalRegex);
    cssMatches = str.match(cssInternalRegex);

    // Clean up class strings
    _.forEach(classMatches, match => {
        let matchClone = match;

        const styleMatches = match.match(/"[^"]*"/gm);

        if (!styleMatches) {
            return;
        }

        const style = styleMatches[0].replace(/"/gm, '');

        const classes = style
            .replace(/ +/gm, ' ')
            .replace(/\n/gm, '')
            .trim()
            .split(interpolatedRegex)
            .map((part, i) => (i % 2 ? part.trim() : part.replace(/ +/g, ' ').trim()))
            .filter(className => className.length > 0);

        if (classes.length > 1) {
            const spaceMatches = match.match(/( +)class/);

            if (!spaceMatches || spaceMatches.length < 2) {
                return;
            }

            const spaces = spaceMatches[1].length;

            matchClone = match.replace(/class="[^"]*"/gm, formatClasses(classes, spaces));
            str = str.replace(match, matchClone);
        }
    });

    // Clean up css strings
    _.forEach(cssMatches, match => {
        let matchClone = match;

        const styleMatches = match.match(/"[^"]*"/gm);

        if (!styleMatches) {
            return;
        }

        const style = styleMatches[0].replace(/"/gm, '');

        const styles = style
            .replace(/ +/gm, ' ')
            .replace(/\n/gm, '')
            .split(';')
            .map(styleStr => styleStr.trim())
            .filter(styleStr => styleStr.length > 0);

        if (styles.length > 1) {
            const spaceMatches = match.match(/( +)css/);

            if (!spaceMatches || spaceMatches.length < 2) {
                return;
            }

            const spaces = spaceMatches[1].length;

            matchClone = match.replace(/css="[^"]*"/gm, formatStyles(styles, spaces));
            str = str.replace(match, matchClone);
        }
    });

    str = str.replace(/nullattr\n +/gm, '');

    return str;
};

const prettyCSS = str => {
    var opts = { ...defaults };

    str = beautify.css(str, opts)
        .replace(cssCurlyRegex, '{')
        .replace(cssNestedRegex, ' > ');

    return str;
};

const options = {
    filename: null,
    processHTML: false,
    processCSS: false,
};

const args = process.argv.slice(2);

_.forEach(args, arg => {
    if (arg.indexOf('.html') > -1) {
        options.filename = arg;
        options.processHTML = true;
    } else if (arg.indexOf('.css') > -1) {
        options.filename = arg;
        options.processCSS = true;
    }
});

if (!options.filename) {
    return;
}

const fileStr = fs.readFileSync(options.filename, {encoding: 'utf8'});
let cleanedStr = fileStr;

if (options.processHTML) {
    // console.log(prettyHTML(fileStr));
    // prettyHTML(fileStr);
    cleanedStr = prettyHTML(fileStr);
}

if (options.processCSS) {
    cleanedStr = prettyCSS(fileStr);
}

if (cleanedStr !== fileStr) {
    fs.writeFileSync(options.filename, cleanedStr, {encoding: 'utf8'});
}