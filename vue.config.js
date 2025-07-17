//const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },
};
