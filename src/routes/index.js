/*
 * @Author: Kaiser
 * @Date: 2020-04-28 15:28:41
 * @Last Modified by: Kaiser
 * @Last Modified time: 2020-04-29 15:42:20
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
      <Route path="about_us" component={AboutUs} />
      <Route path="join_us" component={JoinUs} />
      <Route path="contact_us" component={ContactUs} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);

export default routes;
