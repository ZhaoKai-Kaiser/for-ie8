/*
 * @Author: Kaiser
 * @Date: 2020-04-28 18:08:56
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-06-03 17:42:44
 * @Description:
 */
'use strict';
const path = require('path');

// 资源输出路径
exports.assetsPath = function (_path, root = 'static') {
  const assetsSubDirectory = root;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.resolve = function (dir) {
  return path.join(__dirname, '..', dir);
};
