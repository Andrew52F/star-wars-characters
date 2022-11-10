const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  // alias object
  const options = {
    '@components': './src/components',
    '@containers': './src/containers',
    '@constants': './src/constants',
    '@services': './src/services',
    '@utils': './src/utils',
    '@styles': './src/styles',
    '@routes': './src/routes',
    '@static': './src/static',
    '@hooks': './src/hooks',
    '@store': './src/store',

  }
  alias(options)(config)


  return config
}