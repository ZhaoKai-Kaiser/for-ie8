/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-06-05 11:55:37
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    // filename: utils.assetsPath('js/[name].[hash:8].js'),
    filename: utils.assetsPath('js/[name].js'),
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
              options: {
                importLoaders: 3,
                minimize: true,
                modules: true,
                // This matches the babel plugin's setting (generateScopedName)
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            // Loader for webpack to process CSS with PostCSS
            'postcss-loader',
            // Loads a Sass/SCSS file and compiles it to CSS.
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // name: utils.assetsPath('images/[name].[hash:7].[ext]'),
              name: utils.assetsPath('images/[path][name].[ext]'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('fonts/[name].[ext]'),
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve(`dist/index.html`),
      template: utils.resolve('index.html'),
    }),
    new ExtractTextPlugin({
      // filename: utils.assetsPath('css/[name].[chunkhash].css'),
      filename: utils.assetsPath('css/[name].css'),
    }),
  ],
};
