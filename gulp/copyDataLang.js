const gulp = require('gulp');
const config = require('./config').path;

gulp.task('copyDataLang', function() {
     gulp.src([config.dataLang.src])
         .pipe(gulp.dest(config.dataLang.dest))
 });
