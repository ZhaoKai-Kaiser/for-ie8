import React from 'react';
import '../../style/index/promise.scss';

class Promise extends React.Component {
  render() {
    return (
      <div styleName="promise">
        <div styleName="top">
          <p styleName="title">我们承诺</p>
          <p styleName="detail">三大承诺，少些担心，多份安心</p>
        </div>
        <div styleName="bottom">
          <div styleName="item">
            <span styleName={'image image-2_1'}></span>
            <p styleName="title">永远不搞竞价排名</p>
            <p styleName="detail">永远不搞竞价排名</p>
          </div>
          <div styleName="item">
            <span styleName={'image image-2_2'}></span>
            <p styleName="title">反对价格竞争</p>
            <p styleName="detail">反对价格竞争</p>
          </div>
          <div styleName="item">
            <span styleName={'image image-2_3'}></span>
            <p styleName="title">支持品牌商、总代理商做价格管控</p>
            <p styleName="detail">支持品牌商、总代理商做价格管控</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Promise;
