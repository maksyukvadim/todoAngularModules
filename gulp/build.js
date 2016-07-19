const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('build', [ 'html', 'images', 'fonts', 'copy', 'extras'], () => {
  return gulp.src(config.build.dest).pipe($.size({title: 'build', gzip: true}));
});
