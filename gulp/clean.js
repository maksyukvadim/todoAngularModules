const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('clean', del.bind(null, [config.tmp, config.dest]));
