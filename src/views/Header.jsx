import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import '../style/header.scss';
class Header extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.currentIndex = 0;
    this.keys = ['index', 'product', 'aboutUs', 'joinUs', 'contactUs'];
    this.state = { name: this.keys[this.currentIndex] };
  }
  /**
   * 锚点点击事件
   */
  handleClick(index) {
    this.currentIndex = index;
    this.setName();
  }

  setName() {
    this.setState({
      name: this.keys[this.currentIndex],
    });
  }

  /**
   * 组件完成挂载
   */
  componentDidMount() {
    const { pathname } = this.props.location;
    this.currentIndex = this.keys.findIndex(
      (key) => key === pathname.replace('/', '')
    );
    this.setName();
  }

  render() {
    return (
      <div styleName="header">
        <div styleName="center">
          <Logo style={{ float: 'left' }} />
          <ul styleName="navigater">
            <li styleName="navigater-item">
              <Link
                onClickCapture={(event) => this.handleClick(0, event)}
                to="/"
                activeClassName="active"
              >
                首页
              </Link>
            </li>
            <li styleName="navigater-item">
              <Link
                onClickCapture={(event) => this.handleClick(1, event)}
                to="/product"
                activeClassName="active"
              >
                产品特点
              </Link>
            </li>
            <li styleName="navigater-item">
              <Link
                onClickCapture={(event) => this.handleClick(2, event)}
                to="/aboutUs"
                activeClassName="active"
              >
                关于我们
              </Link>
            </li>
            <li styleName="navigater-item">
              <Link
                onClickCapture={(event) => this.handleClick(3, event)}
                to="/joinUs"
                activeClassName="active"
              >
                加入我们
              </Link>
            </li>
            <li styleName="navigater-item">
              <Link
                onClickCapture={(event) => this.handleClick(4, event)}
                to="/contactUs"
                activeClassName="active"
              >
                联系我们
              </Link>
            </li>
            <span styleName={'bar ' + this.state.name}></span>
          </ul>
          <span styleName="login">请登录</span>
        </div>
      </div>
    );
  }
}

export default Header;
