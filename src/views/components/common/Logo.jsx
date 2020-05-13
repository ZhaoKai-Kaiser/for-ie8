import React from 'react';
import { Link } from 'react-router';
import '../../../style/logo.scss';
class Logo extends React.Component {
  render() {
    return (
      <Link
        to="/"
        style={this.props.style ? { ...this.props.style } : {}}
        styleName="logo"
      >
        <span styleName="icon"></span>
        <span styleName="name">飞耕</span>
      </Link>
    );
  }
}

export default Logo;
