const wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(
  (file) => {
    return (/\.(js|coffee)$/i).test(file);
  }).map(
  (file) => {
    require(`./gulp/${file}`);
  }
);
