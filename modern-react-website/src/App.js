import React from 'react';

import { Footer, News, Devices, Services, Products, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Products />
    <Services />
    <Devices />
    <CTA />
    <News />
    <Footer />
  </div>
);

export default App;
