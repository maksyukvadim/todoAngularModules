const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const $ = gulpLoadPlugins();
const config = require('./config').path;
const reload = browserSync.reload;

gulp.task('serve', ['styles', 'scripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components',
          '/node_modules': 'node_modules',
          '/app': 'app'
      }
    }
  });

  gulp.watch([
    config.html.all,
    config.images.all,
    config.fonts.all
  ]).on('change', reload);

  gulp.watch(config.styles.all, ['styles']);
  gulp.watch(config.scripts.watch, ['scripts']);
  gulp.watch(config.fonts.all, ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});
