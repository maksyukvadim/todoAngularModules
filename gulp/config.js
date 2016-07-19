const dest = 'dist';
const app = 'app';
const tmp = '.tmp';

module.exports = {
    path: {
    scripts: {
        src: `${app}/app.js`,
        dest: `${dest}/js/`,
        watch: `${app}/**/*.js`,
    },
    build: {
        dest: `${dest}/**/*`,
    },
    copy: {
        src: `${app}/lang_json/*.json`,
        dest: `./${dest}/lang_json/`,
    },
    extras: {
        src: `${app}/*.*`,
        src2: `!${app}/*.html`,
    },
    fonts: {
        src: `${app}/fonts/**/*`,
        tmp: `${tmp}/fonts`,
        dest: `${dest}/fonts`,
    },
    html: {
        src: `${app}/*.html`,
        dest: `${dest}/js/`,
    },
    images: {
        src: `${app}/images/**/*`,
        dest: `${dest}/images`,
    },
    lint: {
        dest: `${app}/scripts`,
    },
    serve: {
        src: `${app}/app.js`,
        dest: `${dest}/js/`,
        watch: `${app}/**/*.js`,
    },
    styles: {
        src: `${app}/styles/*.scss`,
        dest: `${tmp}/styles`,
        watch: `${app}/fonts/**/*`,
    },
  },
};
