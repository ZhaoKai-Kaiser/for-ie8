import React from 'react';
import Banner from '../components/product/Banner';
import Create from '../components/product/Create';
import Marketing from '../components/product/Marketing';
import Find from '../components/product/Find';
import BC from '../components/product/BC';

import '../../style/product/product.scss';

const About = (props) => (
  <div styleName="product">
    <Banner />
    <Create />
    <Marketing />
    <Find />
    <BC />
  </div>
);

export default About;
