const webpack = require('webpack')
const environment = require('./environment').toWebpackConfig()

// https://qiita.com/mizchi/items/a329ab567ba2d3cb7d60
environment.plugins = environment.plugins.map((plug) => {
  if (plug instanceof webpack.optimize.UglifyJsPlugin) {
    return new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
      mangle: false,
      uglifyOptions: {
        mangle: false
      },
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  }

  return plug
})

environment.devtool = 'eval'

module.exports = environment
