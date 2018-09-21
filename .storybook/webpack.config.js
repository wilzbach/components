const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(new VueLoaderPlugin())

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import "~bootstrap/scss/functions";
            @import "~bootstrap/scss/variables";
            @import "~bootstrap/scss/mixins";
            @import "./src/styles/index";
          `,
          includePaths: ['../', '../node-modules/']
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  return defaultConfig
}
