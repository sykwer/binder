module.exports = {
  enforce: "pre",
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "eslint-loader",
  options: {
    failOnError: true,
  }
}
