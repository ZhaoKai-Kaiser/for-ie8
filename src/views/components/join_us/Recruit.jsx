import React from 'react';
import RecruitItem from './RecruitItem';

import '../../../style/join_us/recruit.scss';

const JOBS = [
  {
    // 职位名称
    jobTitle: '产品经理',
    // 工作地点
    workPlace: '杭州',
    // 工作年限
    workingYear: '3-5年',
    // 学历
    education: '本科',
    // 发布时间
    releaseTime: '2020-4-10',
    // 联系电话
    contactNumber: '0571-85188250',
    // 工作职责/职位描述
    jobResponsibilities: [
      '观察和分析市场情况，了解并收集用户需求',
      '根据市场及用户反馈，分析需求，构思并策划产品方案',
      '制定产品整体策略，规划发展方向和迭代计划',
      '完成产品设计工作（功能、信息结构、内容、流程、交互等）',
      '整合资源，协调不同岗位人员的工作，跟进研发过程，推动项目落地',
      '参与产品上线前的测试、验收，为产品整体质量负责',
      '产品上线后，配合运营和市场，将产品推向用户',
      '收集市场和用户的反馈、跟进产品关键数据指标，制定后续的迭代发展计划',
    ],
    // 招聘人数
    numberOfRecruiters: '3人',
    // 任职资格/岗位要求
    qualifications: [
      '独立负责过一个完整产品的设计和管理',
      '具备商家端、电商类的产品设计经验',
      '优秀的逻辑思维能力',
      '优秀的表达和沟通能力',
      '优秀的抗压能力',
    ],
    // 职位icon
    iconName: 'iconchanpin',
  },
  {
    // 职位名称
    jobTitle: '前端工程师',
    // 工作地点
    workPlace: '杭州',
    // 工作年限
    workingYear: '1-3年',
    // 学历
    education: '本科',
    // 发布时间
    releaseTime: '2020-4-10',
    // 联系电话
    contactNumber: '0571-85188250',
    // 工作职责/职位描述
    jobResponsibilities: [
      '能够很好的同页面设计师沟通，并全面理解设计师的需求；',
      '根据需求实现前端开发工作；',
      '与后台工程师配合，实现最终交互页面；',
      '前端组件编写，前端资源库建设。',
      '解决各类技术难题',
    ],
    // 招聘人数
    numberOfRecruiters: '3人',
    // 任职资格/岗位要求
    qualifications: [
      '熟练使用photoshop画图工具',
      '熟练使用Webpack 进行常用的打包配置，熟悉相关工具链及插件',
      '熟练使用Vue 前端框架，对其核心思想以及原理有一定了解，有完整的项目经验；',
      '三年以上前端开发经验',
      '熟悉Nodejs及后端WEB框架者优先；',
      '有微信小程序开发经验优先',
      '具备良好的表达和沟通能力',
      '扎实的JavaScript/JQuery基本功',
    ],
    // 职位icon
    iconName: 'iconqianduan',
  },
  {
    // 职位名称
    jobTitle: '高级测试工程师',
    // 工作地点
    workPlace: '杭州',
    // 工作年限
    workingYear: '1-3年',
    // 学历
    education: '本科',
    // 发布时间
    releaseTime: '2020-4-10',
    // 联系电话
    contactNumber: '0571-85188250',
    // 工作职责/职位描述
    jobResponsibilities: [
      '独立负责项目系统的测试，制定测试计划和测试方案；建立并优化测试过程，提升测试效率和产品质量；',
      '分配和执行测试任务并进行缺陷跟踪；',
      '收集关于项目质量的信息，把控质量和风险；',
      '根据测试结果完成测试报告；',
      '不断拓展测试类型，推动项目流程改进，尝试新的测试方法和测试工具。',
    ],
    // 招聘人数
    numberOfRecruiters: '3人',
    // 任职资格/岗位要求
    qualifications: [
      '3年及以上Web测试、移动端测试经验，计算机、电子及其相关专业',
      '熟悉软件工程知识，熟悉软件测试方法和流程，具备独立编写测试方案、测试计划、测试用例及测试报告能力；',
      '熟悉多种常用测试工具的使用，并能根据现有的工具设计测试方案；',
      '熟练使用Linux或Unix操作系统，熟悉计算机网络相关知识者优先；',
      '有自动化测试、性能测试、持续集成经验者优先；',
      '有电商行业测试经验优先；',
    ],
    // 职位icon
    iconName: 'iconceshi',
  },
  {
    // 职位名称
    jobTitle: '中级Java开发工程师',
    // 工作地点
    workPlace: '杭州',
    // 工作年限
    workingYear: '3-5年',
    // 学历
    education: '本科',
    // 发布时间
    releaseTime: '2020-4-10',
    // 联系电话
    contactNumber: '0571-85188250',
    // 工作职责/职位描述
    jobResponsibilities: ['作为团队开发，参与公司相关项目的研发工作；'],
    // 招聘人数
    numberOfRecruiters: '3人',
    // 任职资格/岗位要求
    qualifications: [
      '计算机相关专业本科或以上学历，两年以上Java开发经验；',
      '扎实的编程基础，精通Java开发语言，有一定的代码洁癖；',
      '熟知常用Java框架，如Spring、Springboot、SpringCloud等，对源码有过了解为佳；',
      '深入了解Mysql数据库技术，对SQL优化有一定的经验；',
      '有电子商务产品研发经验和业务知识者尤佳；',
      '具备良好的问题分析和处理能力，解决问题思路清晰，沟通良好；',
    ],
    // 职位icon
    iconName: 'icongongchengshi',
  },
  {
    // 职位名称
    jobTitle: '高级JAVA工程师',
    // 工作地点
    workPlace: '杭州',
    // 工作年限
    workingYear: '3-5年',
    // 学历
    education: '本科',
    // 发布时间
    releaseTime: '2020-4-10',
    // 联系电话
    contactNumber: '0571-85188250',
    // 工作职责/职位描述
    jobResponsibilities: [
      '作为团队核心开发，参与公司相关项目的研发工作，参与规划系统架构以及平台的升级；',
      '参与攻坚解决各种问题，参与系统优化，保证系统的稳定性；',
    ],
    // 招聘人数
    numberOfRecruiters: '3人',
    // 任职资格/岗位要求
    qualifications: [
      '计算机相关专业本科或以上学历，三年以上Java开发经验；',
      '扎实的编程基础，精通Java开发语言，熟悉jvm、类加载、内存模型等，有一定的代码洁癖；',
      '熟知常用Java框架，如Spring、Springboot、SpringCloud等，对源码有过了解为佳；',
      '深入了解Mysql数据库技术，对SQL优化有一定的经验；',
      '具备良好的面向对象的设计能力，熟悉面向对象设计原则，掌握设计模式及应用场景，对代码抽象有一定的理解；',
      '有电子商务产品研发经验和业务知识者尤佳；',
      '具备良好的问题分析和处理能力，解决问题思路清晰，沟通良好；',
    ],
    // 职位icon
    iconName: 'iconsoft',
  },
];

class Recruit extends React.Component {
  constructor() {
    super();
    this.itemStyle = {
      display: 'inline-block',
      margin: '30px 30px 0 0',
    };
  }
  render() {
    const recruits = JOBS.map((job) => (
      <RecruitItem
        style={{ ...this.itemStyle }}
        key={job.jobTitle}
        job={job}
      ></RecruitItem>
    ));

    return (
      <div styleName="recruit">
        <div styleName="box">
          <p styleName="title">招贤纳士</p>
          {recruits}
        </div>
      </div>
    );
  }
}

export default Recruit;
