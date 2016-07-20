const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src(config.html.src)
    .pipe($.useref({searchPath: [config.tmp, config.app, '.']}))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(config.dest));
});
