const dest = 'dist';
const app = 'app';
const tmp = '.tmp';

module.exports = {
    path: {
      scripts: {
          src: `${app}/app.js`,
          dest: `${dest}/js/`,
          tmp: `${tmp}/`,
          watch: `${app}/**/*.js`,
      },
      json: {
          src: `${app}/lang_json/*.json`,
          dest: `./${dest}/lang_json/`,
      },
      fonts: {
          src: `${app}/fonts/**/*`,
          tmp: `${tmp}/fonts`,
          dest: `${dest}/fonts`,
          watch: `${tmp}/fonts/**/*`,
      },
      html: {
          src: `${app}/*.html`,
          dest: `${dest}/js/`,
          watch: `${app}/*.html`,
      },
      images: {
          src: `${app}/images/**/*`,
          dest: `${dest}/images`,
          watch: `${app}/images/**/*`,
      },
      styles: {
          src: `${app}/styles/*.scss`,
          tmp: `${tmp}/styles`,
          watch: `${app}/styles/**/*.scss`,
      },
    },
};
