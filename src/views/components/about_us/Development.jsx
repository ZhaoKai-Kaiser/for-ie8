import React from 'react';
import '../../../style/about_us/development.scss';

const YEARS = [
  {
    label: '现在',
    value: '2020',
    detail: [],
  },
  {
    label: '2019',
    value: '2019',
    detail: [
      {
        period: '6月',
        events: ['文具用品市场用户达8w', '交易额突破10亿元'],
      },
      {
        period: '11月',
        events: ['义乌市场开始全面推广'],
      },
    ],
  },
  {
    label: '2018',
    value: '2018',
    detail: [
      {
        period: '6月',
        events: ['文具用品市场用户达2w', '交易额突破5亿元'],
      },
    ],
  },
  {
    label: '2016',
    value: '2016',
    detail: [
      {
        period: '7月',
        events: ['文体用品市场开始推广'],
      },
    ],
  },
  {
    label: '2015',
    value: '2015',
    detail: [
      {
        period: '2月',
        events: ['杭州总部成立', '并组建优秀的技术团队'],
      },
    ],
  },
];

class Components extends React.Component {
  constructor() {
    super();
    this.style = {
      display: 'block',
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: '80px',
    };
    this.state = { yearSelected: '2019' };
  }

  handleClick(year) {
    if (year >= 2020) {
      return;
    }
    this.setState({ yearSelected: year });
  }

  render() {
    const years = [];
    const course = [];

    YEARS.forEach((year, index, arr) => {
      years.push(
        <div
          styleName="item"
          key={year.value}
          onClick={(event) => this.handleClick(year.value, event)}
        >
          <p styleName="item-title">{year.label}</p>
          <p
            styleName="item-point"
            styleName={index + 1 === arr.length ? 'no-line' : ''}
            styleName={year.value === this.state.yearSelected ? 'on' : ''}
          ></p>
        </div>
      );
      if (year.value < 2020) {
        course.push(
          <div styleName="course-item" key={year.value}>
            <p styleName="course-year">{year.label}</p>

            {year.detail.map((period) => (
              <div styleName="course-events" key={period.period}>
                <span styleName="event-period">{period.period}</span>

                <div styleName="event-items">
                  {period.events.map((item) => (
                    <span styleName="event-item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    });

    return (
      <div styleName="development">
        <div styleName="box">
          <p styleName="title">发展历程</p>
          <div styleName="line">{years}</div>
          <div
            styleName="course"
            styleName={`course-${this.state.yearSelected}`}
            id="course"
          >
            {course}
          </div>
        </div>
      </div>
    );
  }
}

export default Components;
