const dest = 'dist';
const app = 'app';


module.exports = {
    path: {
      scripts: {
          src: `${app}/app.js`,
          dest: `${dest}/`,
          watch: `${app}/**/*.js`,
      },
      DataLang: {
          src: `${app}/lang_json/*.json`,
          dest: `./${dest}/lang_json/`,
      },
      fonts: {
          all: `${app}/fonts/**/*`,
          dest: `${dest}/fonts`,
      },
      html: {
          all: `${app}/**/*.html`,
          dest: `${dest}/`,
      },
      images: {
          all: `${app}/images/**/*`,
          dest: `${dest}/images`,
      },
      styles: {
          all: `${app}/styles/**/*.scss`,
          dest: `${dest}/styles`,
      },
      build: {
        all: `${dest}/**/*`,
      },
    },
};
