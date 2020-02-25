import {build} from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as htmlmin from 'gulp-htmlmin';
import * as plumber from 'gulp-plumber';
import * as notify from 'gulp-notify';

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source, {sourcemaps: true, since: gulp.lastRun(processMarkup)})
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: false,
        minifyCSS: true,
        minifyJS: true,
        ignoreCustomFragments: [/\${.*?}/g] // ignore interpolation expressions
    }))
    .pipe(build.bundle());
}

export function pluginMarkup(dest) {
  return function processPluginMarkup() {
    return gulp.src(project.plugin.source.html)
      .pipe(htmlmin({
          removeComments: true,
          collapseWhitespace: false,
          minifyCSS: true,
          minifyJS: true,
          ignoreCustomFragments: [/\${.*?}/g] // ignore interpolation expressions
      }))
      .pipe(gulp.dest(dest));
  };
}
