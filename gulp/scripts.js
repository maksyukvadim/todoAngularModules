const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const $ = gulpLoadPlugins();
const config = require('./config').path;
const browserSync = require('browser-sync');
const reload = browserSync.reload;
gulp.task('scripts', function () {
  return browserify(config.scripts.src, {debug: true}).transform(babelify.configure({
    presets: ["es2015"],  plugins: ["ng-annotate"]
  }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(reload({stream:true}));
});
