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
        index: {
            src: `${app}/index.html`,
            dest: `${dest}/`,
        }, default: {
            all: `${app}/modules/**/*.html`,
            dest: `${dest}/views`,
        }
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
