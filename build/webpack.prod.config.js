/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-04-29 11:11:51
 * @Description:
 */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const utils = require('./utils');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new CleanWebpackPlugin(['../dist'], { root: __dirname }),
    new CopyWebpackPlugin([
      {
        from: utils.resolve('public'),
        to: utils.resolve('dist/public'),
        ignore: ['.*'],
      },
    ]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      mangle: {
        screw_ie8: false,
        except: ['$'],
      },
      mangleProperties: { screw_ie8: false },
      compress: {
        screw_ie8: false,
        warnings: false,
      },
      output: { screw_ie8: false },
      support_ie8: true,
    }),
  ],
});
