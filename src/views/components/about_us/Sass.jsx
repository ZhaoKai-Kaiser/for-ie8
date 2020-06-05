import React from 'react';
import '../../../style/about_us/sass.scss';

class Team extends React.Component {
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
      <div styleName="sass">
        <div styleName="box">
          <p styleName="title">SAAS模式批发平台</p>
          <p styleName="detail url">shop.flygen.cn</p>
          <p styleName="detail">
            SAAS是杭州秒算科技有限公司通过互联网技术为批发领域搭建的一套完成的基于
          </p>
          <p styleName="detail">
            私域流量的线上批发平台帮助上进的传统行业人士转型，引领批发领域实现私域
          </p>
          <p styleName="detail">
            流量的增量，通过多年的打磨，飞耕批发网更加贴近传统批发业态
          </p>
        </div>
      </div>
    );
  }
}

export default Team;
