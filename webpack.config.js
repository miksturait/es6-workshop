module.exports = {
  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/node_modules/] }
    ]
  }
};