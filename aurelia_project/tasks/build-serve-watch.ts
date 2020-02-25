import * as gulp from 'gulp';

import {buildPackage} from './build-plugin';
import {serve, reload} from './run';
import {watchAlt} from './watch';

export default gulp.series(
  gulp.parallel(buildPackage, serve),
  done => { watchAlt(reload); done(); }
);
