const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
