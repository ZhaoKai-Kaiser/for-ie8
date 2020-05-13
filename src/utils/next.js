/*
 * @Author: Kaiser
 * @Date: 2020-05-12 13:43:47
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-05-13 12:47:34
 * @Description:
 */

export function next(func, time = 1000) {
  return new Promise((resolve) => {
    func();
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, Number(time || 0) + 100);
  });
}
