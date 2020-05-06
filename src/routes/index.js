/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-05-06 13:59:57
 * @Description:
 */
import React from 'react';
import { Router, Route, IndexRedirect, Redirect } from 'react-router';

import App from '../views/App';

import Index from '../views/Index';
import Product from '../views/Product';
import AboutUs from '../views/AboutUs';
import JoinUs from '../views/JoinUs';
import ContactUs from '../views/ContactUs';

const routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRedirect to="/index" />
      <Route path="index" component={Index} />
      <Route path="product" component={Product} />
      <Route path="aboutUs" component={AboutUs} />
      <Route path="joinUs" component={JoinUs} />
      <Route path="contactUs" component={ContactUs} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

export default routes;
