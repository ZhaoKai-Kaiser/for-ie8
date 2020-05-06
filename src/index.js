/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-05-06 19:26:07
 * @Description: 入口js
 */
require('./style/common.scss');
require('console-polyfill');
require('es6-promise').polyfill();

const React = require('react');
const ReactDOM = require('react-dom');
// const Provider = require('react-redux').Provider;
const Router = require('react-router').Router;
// const store = require('./store').default;
const routes = require('./routes').default;
const browserHistory = require('./history').default;

const App = () => <Router history={browserHistory} routes={routes} />;

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

render(App);

if (module.hot) {
  module.hot.accept();
}
