import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = (props) => (
  <div className="global-container">
    <Header location={props.location} />
    <div className="wrap">{props.children}</div>
    <Footer />
  </div>
);

export default App;
