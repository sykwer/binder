const { environment } = require('@rails/webpacker')

environment.loaders.set('babel', {
  test: /\.js(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
})

environment.loaders.set('eslint', {
  enforce: "pre",
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    failOnError: true,
  },
})

environment.loaders.set('react', {
  test: /\.(js|jsx)?(\.erb)?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
})

module.exports = environment
