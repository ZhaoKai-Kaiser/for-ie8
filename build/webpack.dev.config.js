/*
 * @Author: Kaiser
 * @Date: 2020-04-27 14:44:46
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-04-29 10:58:23
 * @Description:
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  devtool: 'cheap-eval-source-map',
  // entry: {
  //   polyfill: './node_modules/babel-polyfill/lib/index.js',
  // },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
