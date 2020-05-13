import React from 'react';

import Banner from '../index/banner';
import About from '../index/about';
import Promise from '../index/promise';
import Team from '../index/team';
import Login from '../index/login';
import '../../style/index/index.scss';

const Index = () => (
  <div>
    <Banner />
    <About />
    <Promise />
    <Team />
    <Login/>
  </div>
);

export default Index;
