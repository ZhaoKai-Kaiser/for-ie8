import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import '../style/index.scss';

const App = (props) => (
  <div>
    <Header location={props.location} />
    <div styleName="body">{props.children}</div>
    <Footer />
  </div>
);

export default App;
