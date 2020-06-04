/*
 * @Author: Kaiser
 * @Date: 2020-04-27 14:44:46
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-06-03 16:03:18
 * @Description:
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ip = require('ip');

module.exports = merge(baseWebpackConfig, {
  devtool: 'cheap-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    host: ip.address() || '0.0.0.0',
    port: 8080,
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses.
    historyApiFallback: true,
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    watchOptions: {
      // For some systems, watching many file systems can result in a lot of CPU or memory usage.
      ignored: /node_modules/,
      // Add a delay before rebuilding once the first file changed.
      aggregateTimeout: 300,
      // If watching does not work for you, try out this option. Watching does not work with NFS and machines in VirtualBox.
      poll: false,
    },
  },
  plugins: [
    // Enables Hot Module Replacement,
    new webpack.HotModuleReplacementPlugin(),
    // HMR shows correct file names in console on update.
    new webpack.NamedModulesPlugin(),
    // 启用此插件后，webpack 进程遇到错误代码将不会退出 ?
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
