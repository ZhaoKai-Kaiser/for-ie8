import React from 'react';
import Icon from '../common/Icon';
import { next } from '../../../utils/next';
import '../../../style/index/about.scss';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      animationOfImg: 'hide',
      animationOfSince: 'hide',
      animationOfLocation: 'hide',
      animationOfEstablish: 'hide',
    };
    this.scroll = this.scroll.bind(this);
  }

  async animate() {
    await this.setAnimation({ animationOfImg: 'bounce' });
    await this.setAnimation({ animationOfSince: 'slideInDown' });
    await this.setAnimation({ animationOfLocation: 'slideInLeft' });
    await this.setAnimation({ animationOfEstablish: 'slideInLeft' });
  }

  animateForIE() {
    this.setState({
      animationOfImg: 'bounce',
      animationOfSince: 'slideInDown',
      animationOfLocation: 'slideInLeft',
      animationOfEstablish: 'slideInLeft',
    });
  }

  setAnimation(obj) {
    return this.$isMounted && next(() => this.setState(obj));
  }

  /**
   * 滚动事件
   */
  scroll() {
    const about = document.querySelector('#about');
    // dom 不存在
    if (!about) return;
    const { top } = about.getBoundingClientRect();
    // 未在显示区域出现
    if (Math.abs(top) > window.innerHeight) return;
    // 移除事件监听
    window.removeEventListener('scroll', this.scroll);
    // 开始动画
    this.animate();
  }

  componentDidMount() {
    this.$isMounted = true;
    if (window.addEventListener) {
      window.addEventListener('scroll', this.scroll);
    } else {
      this.animateForIE();
    }
  }

  componentWillUnmount() {
    this.$isMounted = false;
    if (window.removeEventListener) {
      window.removeEventListener('scroll', this.scroll);
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
