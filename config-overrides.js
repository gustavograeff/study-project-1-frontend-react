const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@services': path.resolve(__dirname, 'src/shared/services'),
      '@interfaces': path.resolve(__dirname, 'src/shared/interfaces'),
      '@sharedPages': path.resolve(__dirname, 'src/shared/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts')
    },
  };

  return config;
};
