import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';

class Header extends React.Component {
  render() {
    const { username, actions } = this.props;
    return (
      <div className="header">
        <div className="logo-wrapper">
          <span className="logo"></span>
          <span className="name">飞耕</span>
        </div>
        <ul className="navigater">
          <li className="navigater-item">
            <IndexLink to="/" activeClassName="active">
              首页
            </IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              产品特点
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              关于我们
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              加入我们
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              联系我们
            </Link>
          </li>
        </ul>
        <span className="login">
          <Link to="/login">请登录</Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      ...userActions,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
