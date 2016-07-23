const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const config = require('./config').path;
const browserSync = require('browser-sync');
const reload = browserSync.reload;
gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat(config.fonts.all))
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(reload({stream:true}));
});
