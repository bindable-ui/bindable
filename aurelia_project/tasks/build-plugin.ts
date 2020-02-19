import * as gulp from 'gulp';
import * as del from 'del';
import {pluginMarkup} from './process-markup';
import {pluginCSS} from './process-css';
import {pluginJson} from './process-json';
import {buildPluginJavaScript} from './transpile';

function clean() {
  return del('dist');
}

export const buildPackage = gulp.series(
  gulp.series(
    // package.json "module" field pointing to dist/native-modules/index.js
    pluginCSS('dist/native-modules'),
    pluginJson('dist/native-modules'),
    pluginMarkup('dist/native-modules'),
    buildPluginJavaScript('dist/native-modules', 'es2015'),

    // package.json "main" field pointing to dist/commonjs/index.js
    pluginCSS('dist/commonjs'),
    pluginJson('dist/commonjs'),
    pluginMarkup('dist/commonjs'),
    buildPluginJavaScript('dist/commonjs', 'commonjs'),
  ),
);

export default gulp.series(
  clean,
  buildPackage
);
