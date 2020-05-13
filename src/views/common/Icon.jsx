import React from 'react';
import css from '../../style/iconfont.scss';

class Icon extends React.Component {
  render() {
    const style = this.props.style ? { ...this.props.style } : {};
    style.color = style.color || '#000';
    return (
      <i
        className={css.iconfont + ' ' + css[this.props.name]}
        style={{ ...style }}
      />
    );
  }
}

export default Icon;
