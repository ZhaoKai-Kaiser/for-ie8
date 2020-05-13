import React from 'react';
import Icon from '../common/Icon';
import '../../style/index/team.scss';

class Team extends React.Component {
  constructor() {
    super();
    this.style = {
      display: 'block',
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: '80px',
    };
  }
  render() {
    return (
      <div styleName="team">
        <div styleName="top">
          <p styleName="title">飞耕批发团队</p>
          <p styleName="detail">
            我们相信团队协作是通向成功的保证,专注的态度则让我们更加优秀
          </p>
        </div>
        <div styleName="bottom">
          <div styleName="item">
            <span styleName={'image image-3_1'}></span>
            <div styleName="item-content">
              <p styleName="title">独 立</p>
              <p styleName="detail">INDEPENDENT</p>
            </div>
            <div styleName="icon">
              <Icon
                name="iconren"
                style={{ ...this.style, fontSize: '26px' }}
              ></Icon>
            </div>
          </div>
          <div styleName="item">
            <span styleName={'image image-3_2'}></span>
            <div styleName="item-content">
              <p styleName="title">公 平</p>
              <p styleName="detail">FAIR</p>
            </div>
            <div styleName="icon">
              <Icon
                name="iconfalvtianping"
                style={{ ...this.style, fontSize: '27px' }}
              ></Icon>
            </div>
          </div>
          <div styleName="item">
            <span styleName={'image image-3_3'}></span>
            <div styleName="item-content">
              <p styleName="title">效 率</p>
              <p styleName="detail">EFFICIENCY</p>
            </div>
            <div styleName="icon">
              <Icon
                name="iconhuojian"
                style={{ ...this.style, fontSize: '39px' }}
              ></Icon>
            </div>
          </div>
          <div styleName="item">
            <span styleName={'image image-3_4'}></span>
            <div styleName="item-content">
              <p styleName="title">守 时</p>
              <p styleName="detail">PUNCTUAL</p>
            </div>
            <div styleName="icon">
              <Icon name="iconshijian" style={{ ...this.style }}></Icon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
