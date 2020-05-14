import React from 'react';
import { Link } from 'react-router';
import '../../../style/logo.scss';
class Logo extends React.Component {
  constructor({ classNameOfIcon = '', styleOfText = {} }) {
    super();
    this.classNameOfIcon = `icon ${classNameOfIcon}`;
    this.styleOfText = styleOfText;
  }
  render() {
    return (
      <Link
        to="/"
        style={this.props.style ? { ...this.props.style } : {}}
        styleName="logo"
      >
        <span styleName={this.classNameOfIcon}></span>
        <span styleName="name" style={{ ...this.styleOfText }}>
          飞耕
        </span>
      </Link>
    );
  }
}

export default Logo;
