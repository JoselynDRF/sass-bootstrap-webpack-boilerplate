const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js'],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    inline: true,
    contentBase: './build',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
    ],
  },
};
