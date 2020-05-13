import React from 'react';
import '../../../style/product/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="banner">
        <div styleName="box">
          <p styleName="title">产品特点</p>
          <p styleName="detail">
            建立属于自己的私域流量店铺，让您生意线上线下同步做
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
