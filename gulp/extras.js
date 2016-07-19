const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('extras', () => {
  return gulp.src([
    config.extras.src,
    config.extras.src1
  ], {
    dot: true
  }).pipe(gulp.dest(config.dest));
});
