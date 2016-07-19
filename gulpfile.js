// generated on 2016-07-13 using generator-webapp 2.1.0
const gulp = require('gulp');
const wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(
  (file) => {
    return (/\.(js|coffee)$/i).test(file);
  }).map(
  (file) => {
    require(`./gulp/${file}`);
  }
);
