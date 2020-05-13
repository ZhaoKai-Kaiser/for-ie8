import React from 'react';
import Icon from './../common/Icon';
import { next } from '../../utils/next';
import '../../style/index/about.scss';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      animationOfImg: 'hide',
      animationOfSince: 'hide',
      animationOfLocation: 'hide',
      animationOfEstablish: 'hide',
    };
    this.isShow = false;
  }

  async animate() {
    await next(() => this.setState({ animationOfImg: 'bounce' }));
    await next(() => this.setState({ animationOfSince: 'slideInDown' }));
    await next(() => this.setState({ animationOfLocation: 'slideInLeft' }));
    await next(() => this.setState({ animationOfEstablish: 'slideInLeft' }));
  }

  componentDidMount() {
    this.animate();
    const self = this;
    window.addEventListener('scroll', scroll);
    /**
     * 滚动事件
     */
    function scroll() {
      const about = document.querySelector('#about');
      if (about && !self.isShow) {
        const { top } = about.getBoundingClientRect();
        if (top) {
          self.isShow = true;
          self.animate();
          window.removeEventListener('scroll', scroll);
        }
      }
    }
  }

  render() {
    return (
      <div id="about" styleName="about">
        <div styleName="left">
          <p styleName="title">关于飞耕批发网</p>
          <p styleName="detail">
            做一家帮助传统批发人的平台，用独特的参观 教学方式确保模式落地生根.
          </p>
        </div>
        <div styleName={'right animated ' + this.state.animationOfImg}>
          <div styleName={'since animated ' + this.state.animationOfSince}>
            <p styleName="year">2105</p>
            <p styleName="text">SINCE</p>
          </div>
          <div
            styleName={'locaction animated ' + this.state.animationOfLocation}
          >
            <Icon name="icondingweiweizhi" style={{ color: '#fff' }}></Icon>
            浙江杭州
          </div>
          <div
            styleName={'establish animated ' + this.state.animationOfEstablish}
          >
            2015年2月杭州总部成立
          </div>
        </div>
      </div>
    );
  }
}

export default About;
