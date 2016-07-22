const gulp = require('gulp');
const config = require('./config').path;

gulp.task('copyView', function() {
     gulp.src([config.html.all])
         .pipe(gulp.dest(config.html.dest))
 });
