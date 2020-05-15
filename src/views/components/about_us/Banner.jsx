import React from 'react';
import '../../../style/about_us/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="banner">
        <div styleName="box">
          <p styleName="title">飞耕批发网</p>
          <p styleName="detail">SAAS模式批发平台</p>
        </div>
      </div>
    );
  }
}

export default Banner;
