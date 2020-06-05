import React from 'react';
import { next } from '../../../utils/next';
import '../../../style/product/find.scss';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      animationOfImg: 'hide',
      animationOfWord: 'hide',
    };
    this.scroll = this.scroll.bind(this);
  }

  async animate() {
    this.setAnimation({ animationOfImg: 'fadeInLeft' });
    this.setAnimation({ animationOfWord: 'fadeInDown' });
  }

  animateForIE() {
    this.setState({
      animationOfImg: 'fadeInLeft',
      animationOfWord: 'fadeInDown',
    });
  }

  setAnimation(obj) {
    return this.$isMounted && next(() => this.setState(obj));
  }

  /**
   * 滚动事件
   */
  scroll() {
    const about = document.querySelector('#find');
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
      <div id="find" styleName="find">
        <div styleName={'left animated ' + this.state.animationOfImg}></div>
        <div styleName={'right animated ' + this.state.animationOfWord}>
          <p styleName="title">垂直调货增量</p>
          <p styleName="detail">
            您的客户可以看到你的上游供应商的产品及所有新品
          </p>
          <p styleName="detail">但必须通过你卖货给他，让客户帮你选新品</p>
          <p styleName="detail">紧跟市场有增量</p>
        </div>
      </div>
    );
  }
}

export default About;
