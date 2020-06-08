import React from 'react';

import Icon from '../common/Icon';
import Mask from './JobMask';
import '../../../style/join_us/recruit_item.scss';

const ReactDOM = require('react-dom');

class Component extends React.Component {
  constructor(props) {
    super();
    const { job } = props;
    this.jobTitle = job.jobTitle;
    this.des = `${job.workingYear} | ${job.numberOfRecruiters} | ${job.workPlace} | ${job.releaseTime}`;
    this.iconStyle = {
      position: 'absolute',
      top: '22px',
      right: '26px',
      color: 'red',
      fontSize: '26px',
    };
    this.iconName = job.iconName;
    this.style = props.style || {};
    this.job = job;
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   * 点击事件 - 查看详情
   * 在dom中插入mask
   */
  handleClick() {
    const container = document.createElement('div');
    ReactDOM.render(<Mask job={this.job} container={container} />, container);
    document.body.appendChild(container);
  }

  render() {
    return (
      <div
        styleName="item"
        style={{ ...this.style }}
        onClick={this.handleClick}
      >
        <p styleName="title">{this.jobTitle}</p>
        <p styleName="des">{this.des}</p>
        <p styleName="see">查看岗位 ></p>
        <Icon
          name={this.iconName}
          style={{
            position: 'absolute',
            top: '22px',
            right: '26px',
            color: 'red',
            fontSize: '26px',
          }}
        />
      </div>
    );
  }
}

export default Component;
