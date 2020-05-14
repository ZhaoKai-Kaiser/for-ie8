import React from 'react';
import '../../../style/join_us/team.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="team">
        <div styleName="box">
          <div styleName="des">
            <p styleName="title">技术团队</p>
            <p styleName="detail">
              杭州秒算科技有限公司是一家专注于流通领
              域软件的公司，整合了流通领域的主流软件
              尤其是小商品批发领域的软件产品，并专门
              服务于小商品批发市场。我们的技术骨干来
              自阿里、网易扥等公司，具有深厚的技术背 景和丰富的项目经验。
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
