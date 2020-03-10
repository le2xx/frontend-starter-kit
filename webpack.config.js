const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = (env, argv) => ({
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true
  },
  devtool: 'inline-source-map',
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
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                 Autoprefixer
              ],
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
              publicPath: 'assets/fonts/'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              publicPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({ template: './src/app/pages/index.pug' }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new BaseHrefWebpackPlugin({
      baseHref: argv.mode === 'development' ? '/' : 'https://le2xx.github.io/frontend-starter-kit/'
    })
  ]
});
