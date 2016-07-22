const gulp = require('gulp');
const config = require('./config').path;

gulp.task('copyIndex', function() {
     gulp.src([config.html.index.src])
         .pipe(gulp.dest(config.html.index.dest))
 });
