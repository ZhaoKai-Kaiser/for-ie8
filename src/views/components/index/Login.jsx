import React from 'react';
import '../../../style/index/login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.style = {
      display: 'block',
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: '80px',
    };
  }
  render() {
    return (
      <div styleName="login">
        <div styleName="box">
          <p styleName="title">私域流量平台开创者</p>
          <a styleName="btn" href="https://shop.flygen.cn/">
            立即登录
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
