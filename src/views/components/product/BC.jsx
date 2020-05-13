import React from 'react';
import { next } from '../../../utils/next';
import '../../../style/product/bc.scss';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      animationOfImg1: 'hide',
      animationOfImg2: 'hide',
      animationOfWord: 'hide',
    };
    this.scroll = this.scroll.bind(this);
  }

  async animate() {
    this.setAnimation({ animationOfImg1: 'fadeInRight' });
    this.setAnimation({ animationOfImg2: 'fadeInRight' });
    this.setAnimation({ animationOfWord: 'fadeInDown' });
  }

  setAnimation(obj) {
    return this.$isMounted && next(() => this.setState(obj));
  }

  /**
   * 滚动事件
   */
  scroll() {
    const about = document.querySelector('#bc');
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
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    this.$isMounted = false;
    window.removeEventListener('scroll', this.scroll);
  }

  render() {
    return (
      <div id="bc" styleName="bc">
        <div styleName="box">
          <div styleName={'left animated ' + this.state.animationOfWord}>
            <p styleName="title">BC一体化</p>
            <p styleName="detail">给你的零售客户免费送微信小程序</p>
            <p styleName="detail">实现BC一体化，帮你做增量</p>
          </div>
          <div styleName="right">
            <div
              styleName={'img-1 animated ' + this.state.animationOfImg1}
            ></div>
            <div
              styleName={'img-2 animated ' + this.state.animationOfImg2}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
