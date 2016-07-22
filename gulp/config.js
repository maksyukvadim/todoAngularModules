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
          all: `${app}/fonts/**/*`,
          tmp: `${tmp}/fonts`,
          dest: `${dest}/fonts`,
      },
      html: {
          all: `${app}/*.html`,
      },
      images: {
          all: `${app}/images/**/*`,
          dest: `${dest}/images`,
      },
      styles: {
          src: `${app}/styles/*.scss`,
          tmp: `${tmp}/styles`,
          all: `${app}/styles/**/*.scss`,
      },
      build: {
        all: `${dest}/**/*`,
      },
    },
};
