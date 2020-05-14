import React from 'react';
import '../../../style/join_us/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="banner">
        <div styleName="box">
          <p styleName="title">加入我们</p>
          <p styleName="detail">帮助员工与企业共同成长</p>
        </div>
      </div>
    );
  }
}

export default Banner;
