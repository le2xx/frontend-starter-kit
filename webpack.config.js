const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: 'env'
          }
        }
      },
      {
        test: /\.styl$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                Autoprefixer({ browsers: ['>= 10%', 'last 2 versions'] })
              ],
              sourceMap: true,
            },
          }, {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
            },
          }],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './src/app/pages/index.pug'
    })
  ]
};
