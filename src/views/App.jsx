import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import '../style/app.scss';

const App = (props) => (
  <div>
    <Header location={props.location} />
    <div styleName="body">{props.children}</div>
    <Footer />
  </div>
);

export default App;
