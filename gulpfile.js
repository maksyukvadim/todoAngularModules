// generated on 2016-07-13 using generator-webapp 2.1.0
const gulp = require('gulp');
const wrench = require('wrench');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const config = require('./gulp/config').path;
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const del = require('del');

wrench.readdirSyncRecursive('./gulp').filter(
  (file) => {
    return (/\.(js|coffee)$/i).test(file);
  }).map(
  (file) => {
    require(`./gulp/${file}`);
  }
);

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint(config.scripts.watch, {
    fix: true
  })
    .pipe(gulp.dest(`${app}/scripts`));
});

gulp.task('extras', () => {
  return gulp.src([
    `${app}/*.*`,
    config.html.src
  ], {
    dot: true
  }).pipe(gulp.dest(config.dest));
});

gulp.task('copy', function() {
    gulp.src([config.json.src])
        .pipe(gulp.dest(config.json.dest))
});

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
    config.html.watch,
    config.images.watch,
    config.fonts.watch
  ]).on('change', reload);

  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.scripts.watch, ['scripts']);
  gulp.watch(config.fonts.watch, ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('build', [ 'html', 'images', 'fonts', 'copy', 'extras'], () => {
  return gulp.src(`${dest}/**/*`).pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
