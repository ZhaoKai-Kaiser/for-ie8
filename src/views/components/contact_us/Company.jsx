import React from 'react';
import '../../../style/contact_us/company.scss';

class Components extends React.Component {
  constructor() {
    super();
    this.style = {
      display: 'block',
      fontSize: '28px',
      textAlign: 'center',
      lineHeight: '80px',
    };
  }

  componentDidMount() {
    this.initMap('map');
  }

  initMap(className) {
    // 百度地图API功能
    var map = new BMap.Map(className);
    var point = new BMap.Point(120.143459,30.278834);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
      width: 200, // 信息窗口宽度
      height: 100, // 信息窗口高度
      title: '杭州秒算科技有限公司', // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      '地址：杭州市西湖区教工路18号欧美中心B座501室',
      opts
    ); // 创建信息窗口对象
    marker.addEventListener('click', function () {
      map.openInfoWindow(infoWindow, point); //开启信息窗口
    });
  }

  render() {
    return (
      <div styleName="company">
        <div styleName="box">
          <div styleName="left">
            <p styleName="title">杭州秒算科技有限公司</p>
            <p styleName="detail">
              地址：杭州市西湖区教工路18号欧美中心B座501室
            </p>
            <p styleName="detail">电话：0571-85188250</p>
            <p styleName="detail">邮箱：service@miaosuankej.com</p>
            <p styleName="detail">
              义乌运营中心：义乌城北路J100号二楼，0579-85517067
            </p>
            <p styleName="detail">时间：周一至周五9：30-18:00</p>
          </div>
          <div styleName="right" id="map"></div>
        </div>
      </div>
    );
  }
}

export default Components;
