const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('copy', function() {
    gulp.src([config.copy.src])
        .pipe(gulp.dest(config.copy.dest))
});
