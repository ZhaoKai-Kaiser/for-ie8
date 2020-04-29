/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-04-29 11:12:32
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./utils');

module.exports = {
  // Webpack 使用的根目录， string 类型必须是绝对路径
  context: utils.resolve('/'),
  entry: {
    polyfill: 'babel-polyfill',
    bundle: './src/index.js',
  },
  output: {
    // 输出路径
    path: utils.resolve('dist'),
    // 文件命名规则
    filename: utils.assetsPath('js/[name].[hash:8].js'),
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: utils.resolve('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.s?[ac]ss$/,
        // Extract css from a bundle, or bundles, into a separate file.
        use: ExtractTextPlugin.extract({
          // fallback: loader that should be used when css is not extracted
          // Inject CSS into the DOM. use <style>XX</style>
          fallback: 'style-loader',
          use: [
            // The css-loader interprets @import and url() like import/require() and will resolve them.
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            // Loader for webpack to process CSS with PostCSS
            'postcss-loader',
            // Loads a Sass/SCSS file and compiles it to CSS.
            'sass-loader',
          ],
        }),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: utils.assetsPath('images/[name].[hash:7].[ext]'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve(`dist/index.html`),
      template: utils.resolve('index.html'),
    }),
    new es3ifyPlugin(),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[chunkhash].css'),
    }),
  ],
};
