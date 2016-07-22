const gulp = require('gulp');
const config = require('./config').path;

gulp.task('copyView', function() {
     gulp.src([config.html.default.all])
         .pipe(gulp.dest(config.html.default.dest))
 });
