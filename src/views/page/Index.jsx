import React from 'react';

import Banner from '../components/index/Banner';
import About from '../components/index/About';
import Promise from '../components/index/Promise';
import Team from '../components/index/Team';
import Login from '../components/index/Login';

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
