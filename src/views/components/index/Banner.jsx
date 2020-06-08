import React from 'react';
import '../../../style/index/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div styleName="banner">
        <div styleName="box">
          <a styleName="link" href="javascript:;">点击查看></a>
        </div>
      </div>
    );
  }
}

export default Banner;
