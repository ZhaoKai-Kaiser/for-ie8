import React from 'react';
import css from '../style/iconfont.scss';

class Icon extends React.Component {
  render() {
    return (
      <i
        className={css.iconfont + ' ' + css[this.props.name]}
        style={this.props.style ? { ...this.props.style } : {}}
      />
    );
  }
}

export default Icon;
