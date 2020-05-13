import React from 'react';
import Logo from './Logo';
import '../../../style/footer.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.styleOfLogo = {
      display: 'inline-block',
      marginRight: '518px',
    };
  }
  /**
   * 锚点点击事件
   */
  handleClick(index) {
    this.currentIndex = index;
  }

  /**
   * 组件完成挂载
   */
  componentDidMount() {}

  render() {
    return (
      <div styleName="footer">
        <div styleName="center">
          <div styleName="footer-top">
            <Logo style={{ ...this.styleOfLogo }} />
            <span styleName="tel">客服电话：0571-85188250</span>
          </div>
          <div styleName="footer-body">
            <div styleName="qrcode">
              <p styleName="qrcode-text">扫描二维码</p>
              <span styleName="qrcode-img"></span>
            </div>
            <div styleName="texts">
              <span styleName="text">
                杭州办公点：杭州市西湖区教工路18号欧美中心B座501
              </span>
              <span styleName="text">义乌运营中心：义乌市柳青路1562号</span>
              <span styleName="text">联系电话：0579-85517067</span>
              <span styleName="text">邮箱地址：service@miaosuankej.com</span>
            </div>
          </div>
          <div styleName="footer-bottom">
            ©2015-2020 杭州秒算科技有限公司 浙ICP备17006670号
            ICP经营许可证浙B2-20200161
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
