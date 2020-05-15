import React from 'react';
import '../../../style/contact_us/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="banner">
        <div styleName="box">
          <p styleName="title">联系我们</p>
          <p styleName="detail">专业服务于小商品批发市场</p>
        </div>
      </div>
    );
  }
}

export default Banner;
