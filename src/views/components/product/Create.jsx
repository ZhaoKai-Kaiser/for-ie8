import React from 'react';
import { next } from '../../../utils/next';
import '../../../style/product/create.scss';

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
    const about = document.querySelector('#create');
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
      <div id="create" styleName="create">
        <div styleName={'left animated ' + this.state.animationOfImg}></div>
        <div styleName={'right animated ' + this.state.animationOfWord}>
          <p styleName="title">半自动化建商品资料</p>
          <p styleName="detail">商品库有几乎全品类的商品资料</p>
          <p styleName="detail">不用自己拍照片做商品描述</p>
          <p styleName="detail">只需标上卖价即可上架</p>
          <p styleName="detail">即使是新品，手机拍照上传也非常方便</p>
        </div>
      </div>
    );
  }
}

export default About;
