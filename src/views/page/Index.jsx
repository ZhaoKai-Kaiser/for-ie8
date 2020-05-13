import React from 'react';

import Banner from '../index/Banner';
import About from '../index/About';
import Promise from '../index/Promise';
import Team from '../index/Team';
import Login from '../index/Login';

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
