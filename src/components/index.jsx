import './style.scss';
import React from 'react';
import Header from './Header';
import Page from './Content';

import Footer from './Footer';

function Container() {
 
  return (
    <div className="container">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}
export default Container;
