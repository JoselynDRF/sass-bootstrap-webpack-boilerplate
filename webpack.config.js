const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Autoprefixer = require('autoprefixer');

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
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins() { // postcss plugins, can be exported to postcss.config.js
              return [
                Autoprefixer,
              ];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new CleanWebpackPlugin(['build']),
  ],
};
