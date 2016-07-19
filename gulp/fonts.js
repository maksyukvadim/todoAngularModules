const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat(config.fonts.src))
    .pipe(gulp.dest(config.fonts.tmp))
    .pipe(gulp.dest(config.fonts.dist));
});
