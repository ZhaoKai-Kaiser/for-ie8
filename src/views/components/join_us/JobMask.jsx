import React from 'react';
const ReactDOM = require('react-dom');
import Logo from '../common/Logo';
import Icon from '../common/Icon';
import '../../../style/join_us/job_mask.scss';

class Component extends React.Component {
  constructor({ job = {}, container }) {
    super();
    this.job = job;
    this.container = container;
    this.handleClose = this.handleClose.bind(this);

    this.logoStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
    };

    this.iconStyle = {
      color: '#bfbfbf',
      marginRight: '10px',
    };

    document.body.style.overflow = 'hidden';
  }
  /**
   * 蒙层关闭事件
   */
  handleClose() {
    document.body.style.overflow = 'auto';
    this.container.remove();
  }

  getHTML(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return '';
    return arr.map((des, index) => (
      <p styleName="job-des" key={des}>
        {index + 1}. {des}
      </p>
    ));
  }

  render() {
    return (
      <div styleName="mask">
        <div styleName="close" onClick={this.handleClose}></div>
        <div styleName="fix">
          <Logo
            style={this.logoStyle}
            classNameOfIcon="white"
            styleOfText={{ color: '#fff' }}
          />
        </div>
        <div styleName="box">
          <div styleName="top">
            <p styleName="job-title">{this.job.jobTitle}</p>

            <span styleName="job-WWE">
              <Icon name="icondingweiweizhi" style={{ ...this.iconStyle }} />
              {this.job.workPlace}
            </span>
            <span styleName="job-WWE">
              <Icon name="icongongzuo" style={{ ...this.iconStyle }} />
              {this.job.workingYear}
            </span>
            <span styleName="job-WWE">
              <Icon name="iconxueli" style={{ ...this.iconStyle }} />
              {this.job.education}
            </span>

            <p styleName="job-RC">
              <span>发布时间: {this.job.releaseTime}</span>
              <span styleName="top-line">|</span>
              <span>联系电话{this.job.contactNumber}</span>
            </p>
          </div>

          <div styleName="bottom">
            <p styleName="bottom-title">工作职责</p>
            {this.getHTML(this.job.jobResponsibilities)}
            <div styleName="bottom-line"></div>
            <p styleName="bottom-title">任职资格</p>
            {this.getHTML(this.job.jobResponsibilities)}
          </div>
        </div>
      </div>
    );
  }
}

export default class Mask {
  constructor({ job }) {
    const container = document.createElement('div');
    ReactDOM.render(<Component job={job} container={container} />, container);
    document.body.appendChild(container);
  }
}
