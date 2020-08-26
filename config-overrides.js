const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@services': path.resolve(__dirname, 'src/shared/services')
    },
  };

  return config;
};
