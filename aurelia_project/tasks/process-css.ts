import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as postcss from 'gulp-postcss';
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as postcssUrl from 'postcss-url';
import * as postcssModules from 'postcss-modules';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true})
    .pipe(postcss([
      postcssModules({
        camelCase: true,
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }),
      autoprefixer({grid: true}),
      postcssUrl({url: 'inline', encodeType: 'base64'}),
      cssnano()
    ]))
    .pipe(build.bundle());
}

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(postcss([
        postcssModules({
          camelCase: true,
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }),
        autoprefixer({grid: true}),
        postcssUrl({url: 'inline', encodeType: 'base64'}),
        cssnano()
      ]))
      .pipe(gulp.dest(dest));
  };
}
