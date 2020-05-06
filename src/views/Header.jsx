import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';
import { Motion, spring } from 'react-motion';
import '../style/header.scss';

const keys = ['index', 'product', 'aboutUs', 'joinUs', 'contactUs'];

class Header extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.doms = [];
    keys.forEach((key) => this.doms.push({ key }));
    this.bar = {};
  }
  test() {
    console.log('test');
  }
  /**
   * 锚点点击事件
   */
  handleClick(name) {
    if (!name) {
      return;
    }
    const target = this.getStyleByName(name);
    // 样式不存在
    if (!target || !target.style) {
      return;
    }
    const { width, left } = target.style;
    this.bar.width = width;
    this.bar.left = left - 400;
    console.log(this.bar);
  }
  /**
   * 计算样式
   */
  computeStyle(name) {
    const target = this.getStyleByName(name);
    // 若不存在 or key 不存在 or 已计算样式
    if (!target || !target.key || target.style) {
      return;
    }
    // 未计算样式,重新计算
    const dom = ReactDOM.findDOMNode(this[target.key]);
    const style = dom.getClientRects();
    const { width, left } = style[0];
    // 样式暂存
    target.style = { width, left };
  }

  /**
   * 通过名字获取dom数据
   * @param {string} name
   */
  getStyleByName(name) {
    return this.doms.find((dom) => dom.key === name);
  }
  /**
   * 组件完成挂载
   */
  componentDidMount() {
    keys.forEach((name) => this.computeStyle(name));
  }

  render() {
    return (
      <div styleName="header">
        <div styleName="center">
          <div styleName="logo">
            <span styleName="icon"></span>
            <span styleName="name">飞耕</span>
          </div>
          <ul styleName="navigater">
            <li styleName="navigater-item" onClickCapture={this.test}>
              <IndexLink
                ref={(event) => (this.index = event)}
                onClickCapture={this.handleClick}
                to="/"
                activeClassName="active"
              >
                首页
              </IndexLink>
            </li>
            <li styleName="navigater-item" onClickCapture={this.test}>
              <Link
                ref={(event) => (this.product = event)}
                onClickCapture={this.handleClick}
                to="/product"
                activeClassName="active"
              >
                产品特点
              </Link>
            </li>
            <li styleName="navigater-item" onClickCapture={this.test}>
              <Link
                ref={(event) => (this.aboutUs = event)}
                onClickCapture={this.handleClick}
                to="/about_us"
                activeClassName="active"
              >
                关于我们
              </Link>
            </li>
            <li styleName="navigater-item" onClickCapture={this.test}>
              <Link
                ref={(event) => (this.joinUs = event)}
                onClickCapture={this.handleClick}
                to="/join_us"
                activeClassName="active"
              >
                加入我们
              </Link>
            </li>
            <li styleName="navigater-item" onClickCapture={this.test}>
              <Link
                ref={(event) => (this.contactUs = event)}
                onClickCapture={this.handleClick}
                to="/contact_us"
                activeClassName="active"
              >
                联系我们
              </Link>
            </li>
            <span
              styleName="bar"
              style={{ left: this.bar.left, width: this.bar.width }}
            ></span>
          </ul>
          <span styleName="login">请登录</span>
        </div>
      </div>
    );
  }
}

export default Header;
